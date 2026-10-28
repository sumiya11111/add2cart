
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Arrow";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hello! I would like to discuss a website project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] active:scale-95 md:bottom-7 md:right-7 md:h-[60px] md:w-[60px]"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
