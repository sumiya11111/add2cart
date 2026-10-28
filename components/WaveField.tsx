"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
  A field of glowing dots that moves like cloth in the wind.
  The mouse lifts the field, and the high points turn brand orange.
  Pauses when off screen. Shows one still frame if the visitor prefers less motion.
*/

const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`;

const VERTEX = /* glsl */ `
uniform float uTime;
uniform vec2 uMouse;
uniform float uPixel;
uniform float uSize;
attribute float aRand;
varying float vElev;
varying float vFade;
${NOISE}
void main(){
  vec3 p = position;
  float t = uTime;
  float e = snoise(vec3(p.x * 0.14, p.z * 0.18 - t * 0.06, t * 0.07)) * 0.95;
  e += sin(p.x * 0.32 + t * 0.45) * 0.22;
  e += cos(p.z * 0.42 - t * 0.35) * 0.16;
  float d = distance(p.xz, uMouse);
  e += exp(-d * d * 0.16) * 1.05;
  e += exp(-d * d * 0.03) * sin(d * 2.0 - t * 2.6) * 0.14;
  p.y += e;
  vElev = e;

  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * uPixel * (0.55 + aRand * 0.7) / -mv.z;

  float far = smoothstep(-17.0, -6.0, p.z);
  float near = 1.0 - smoothstep(1.5, 4.0, p.z);
  float side = 1.0 - smoothstep(8.0, 14.0, abs(p.x));
  vFade = far * near * side;
}
`;

const FRAGMENT = /* glsl */ `
uniform vec3 uBase;
uniform vec3 uAccent;
varying float vElev;
varying float vFade;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float r = length(c);
  if (r > 0.5) discard;
  float soft = smoothstep(0.5, 0.05, r);
  float k = smoothstep(0.35, 1.25, vElev);
  vec3 col = mix(uBase, uAccent, k);
  float a = soft * vFade * (0.28 + k * 0.72);
  gl_FragColor = vec4(col, a);
}
`;

export default function WaveField({ className = "" }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    } catch {
      return; // No WebGL: the CSS glow behind still shows
    }

    // Uses the brand color from globals.css (--color-accent)
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim() || "#3d7bff";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 768;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    renderer.setPixelRatio(dpr);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 60);
    const camBase = new THREE.Vector3(0, 2.3, 6.2);
    camera.position.copy(camBase);
    const lookAt = new THREE.Vector3(0, 0.1, -3.5);
    camera.lookAt(lookAt);

    // Grid of points on the floor
    const cols = small ? 120 : 190;
    const rows = small ? 90 : 130;
    const width = 28;
    const zNear = 4;
    const zFar = -18;
    const count = cols * rows;
    const pos = new Float32Array(count * 3);
    const rand = new Float32Array(count);
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        pos[i * 3] = (c / (cols - 1) - 0.5) * width;
        pos[i * 3 + 1] = 0;
        pos[i * 3 + 2] = zNear + (r / (rows - 1)) * (zFar - zNear);
        rand[i] = Math.random();
        i++;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(3.5, -3) },
      uPixel: { value: dpr },
      uSize: { value: small ? 30 : 34 },
      uBase: { value: new THREE.Color("#d9d4c9") },
      uAccent: { value: new THREE.Color(accent) },
    };
    const mat = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // Mouse to floor position
    const ray = new THREE.Raycaster();
    const floor = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const ndc = new THREE.Vector2();
    const hit = new THREE.Vector3();
    const target = new THREE.Vector2(3.5, -3);
    const parallax = new THREE.Vector2();
    let pointerActive = false;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      parallax.set(ndc.x, ndc.y);
      ray.setFromCamera(ndc, camera);
      if (ray.ray.intersectPlane(floor, hit)) {
        target.set(hit.x, hit.z);
        pointerActive = true;
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const resize = () => {
      const w = el.clientWidth || 1;
      const h = el.clientHeight || 1;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.fov = w < 768 ? 68 : 55;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let visible = true;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduce) loop();
    });
    io.observe(el);

    const clock = new THREE.Clock();
    let raf = 0;
    let elapsed = 0;

    const render = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      elapsed += dt;
      uniforms.uTime.value = elapsed;

      if (!pointerActive) {
        // Drift on its own until someone moves the mouse
        target.set(Math.sin(elapsed * 0.25) * 5, -3 + Math.cos(elapsed * 0.2) * 2);
      }
      uniforms.uMouse.value.lerp(target, 0.06);

      const scroll = Math.min(window.scrollY, 1200);
      camera.position.x += (camBase.x + parallax.x * 0.5 - camera.position.x) * 0.04;
      camera.position.y += (camBase.y + parallax.y * 0.25 + scroll * 0.0012 - camera.position.y) * 0.06;
      camera.lookAt(lookAt);

      renderer.render(scene, camera);
    };

    const loop = () => {
      cancelAnimationFrame(raf);
      const tick = () => {
        if (!visible) return;
        render();
        raf = requestAnimationFrame(tick);
      };
      clock.getDelta();
      raf = requestAnimationFrame(tick);
    };

    if (reduce) {
      elapsed = 4;
      render();
    } else {
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      ro.disconnect();
      io.disconnect();
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={host} aria-hidden="true" className={className} />;
}
