import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918608542881"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      items-center
      gap-3
      bg-green-500
      hover:bg-green-600
      text-white
      px-4
      py-3
      rounded-full
      shadow-2xl
      transition-all
      duration-300
      hover:scale-105
      "
    >
      <FaWhatsapp size={28} />

      <div className="hidden sm:block">
        <p className="text-sm font-semibold">
          Need Help?
        </p>

        <p className="text-xs">
          Chat on WhatsApp
        </p>
      </div>
    </a>
  );
}
