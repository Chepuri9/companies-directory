import { type ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // small timeout ensures DOM ready
    const timer = setTimeout(() => {
      const scrollOptions: ScrollToOptions = { top: 0, behavior: "smooth" };

      // try window
      if (typeof window !== "undefined" && window.scrollTo) {
        window.scrollTo(scrollOptions);
      }

      // try html element
      if (document.documentElement) {
        document.documentElement.scrollTo(scrollOptions);
      }

      // try body
      if (document.body) {
        document.body.scrollTo(scrollOptions);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
};
