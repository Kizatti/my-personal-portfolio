import { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const footer = document.getElementById("footer");
      const buffer = 300;
      let show = false;
      if (contact) {
        const rect = contact.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0 - buffer) show = true;
      }
      if (footer) {
        const rectF = footer.getBoundingClientRect();
        if (rectF.top <= window.innerHeight && rectF.bottom >= 0 - buffer) show = true;
      }
      setVisible(show);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed right-4 sm:right-6 bottom-20 sm:bottom-6 z-50 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        type="button"
        className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:scale-105 transform transition"
        style={{ minWidth: 44, minHeight: 44 }}
      >
        <FiChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </a>
  );
}
