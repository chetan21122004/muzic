import { WhatsAppIcon } from "./WhatsAppIcon";

const WA_NUMBER = "919156303400";

const WhatsAppWidget = () => (
  <a
    href={`https://wa.me/${WA_NUMBER}?text=Hi!%20I%20am%20exploring%20muziclub%20and%20need%20some%20help.`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-[54px] h-[54px] lg:w-14 lg:h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-[#25D366]/50"
    aria-label="Chat on WhatsApp"
  >
    <WhatsAppIcon className="w-7 h-7 fill-white" />
  </a>
);

export default WhatsAppWidget;
