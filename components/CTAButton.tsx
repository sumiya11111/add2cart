
import { waLink } from "@/lib/site";
import { WhatsAppIcon, ArrowRight } from "./Arrow";

export default function CTAButton({
  text,
  label = "Start a project",
  size = "md",
  variant = "solid",
}: {
  text?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "ghost";
}) {
  const sizes = {
    sm: "h-10 px-4 text-sm gap-2",
    md: "h-12 px-6 text-[15px] gap-2.5",
    lg: "h-14 px-8 text-base gap-3",
  }[size];

  const styles =
    variant === "solid"
      ? "bg-accent-deep text-on-accent hover:bg-accent-deeper"
      : "border border-line-2 text-cream hover:border-cream/40 hover:bg-white/[0.04]";

  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 ${sizes} ${styles}`}
    >
      {/* Green WhatsApp icon */}
      <span className="inline-flex shrink-0 items-center justify-center text-[#25D366] [&_svg]:stroke-current">
        <WhatsAppIcon className="size-[18px]" />
      </span>

      {/* Button text */}
      <span>{label}</span>

      {/* Arrow */}
      <ArrowRight className="size-4 -ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}
