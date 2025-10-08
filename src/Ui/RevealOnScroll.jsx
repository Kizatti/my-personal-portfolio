import { useEffect, useRef } from "react";

function RevealOnScroll({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback: if IntersectionObserver isn't supported, reveal immediately
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
          // stop observing once visible
          obs.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

export default RevealOnScroll;

