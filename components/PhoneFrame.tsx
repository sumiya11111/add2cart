
import Image from "next/image";

export default function PhoneFrame({
  src,
  alt,
  className = "relative",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`box-border rounded-[1rem] border border-line-2 bg-[#0d0d0f] p-1 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] sm:rounded-[1.35rem] sm:p-1.5 md:rounded-[1.6rem] ${className}`}
    >
      <div className="relative aspect-[750/1624] w-full overflow-hidden rounded-[0.8rem] bg-black sm:rounded-[1.1rem] md:rounded-[1.3rem]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 480px) 23vw, (max-width: 768px) 23vw, 190px"
          className="object-cover object-top"
        />
      </div>

      <span className="absolute left-1/2 top-2 h-1 w-[22%] max-w-10 -translate-x-1/2 rounded-full bg-black/80 sm:top-2.5 sm:h-1.5" />
    </div>
  );
}
