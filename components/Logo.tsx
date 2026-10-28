import Image from "next/image";
import Link from "next/link";

export default function Logo({ height = 28 }: { height?: number }) {
  const width = Math.round((900 / 267) * height);
  return (
    <Link href="/" aria-label="add2cart home" className="inline-flex shrink-0">
      <Image src="/brand/logo-light.png" alt="add2cart" width={width} height={height} priority />
    </Link>
  );
}
