import { useCallback } from "react";

const EQUALWEB_CONFIG = {
  sitekey: "9207c65ae73d46e832525f3e1fed4463",
  domains: {
    js: "https://cdn.equalweb.com/",
    acc: "https://access.equalweb.com/",
  },
  Position: "left",
  Menulang: "EN",
  draggable: true,
  btnStyle: {
    vPosition: ["80%", "80%"],
    margin: ["0", "0"],
    scale: ["0.5", "0.5"],
    color: {
      main: "#790204",
      second: "#ffffff",
    },
    icon: {
      outline: true,
      outlineColor: "#ffffff",
      type: 13,
      shape: "semicircle",
    },
  },
};

const ACCESSIBILITY_SCRIPT_URL =
  "https://cdn.equalweb.com/core/5.1.15/accessibility.js";
const SCRIPT_INTEGRITY =
  "sha512-IuFBhiBlQSJQU8muh9DCDRAPPfo0jqX3OXD7fBvmzPt7K0InWtrkQ662YgJWeG5zSu94WoonZn61uUUDII00eA==";

export const useEqualweb = () => {
  const loadAccessibilityWidget = useCallback(() => {
    try {
      console.log("🔧 Loading EqualWeb accessibility widget...");

      // Clean up any existing EqualWeb scripts and widgets first
      const existingScripts = document.querySelectorAll(
        'script[src*="equalweb.com"], script[src*="accessibility.js"]'
      );
      existingScripts.forEach((script) => script.remove());

      // Remove any existing EqualWeb widget elements
      const existingWidgets = document.querySelectorAll(
        '[id*="equalweb"], [class*="equalweb"], [id*="interdeal"], [class*="interdeal"]'
      );
      existingWidgets.forEach((widget) => widget.remove());

      // Clear any existing EqualWeb references
      if (window.interdeal) {
        delete window.interdeal;
      }

      // Set up the interdeal configuration object
      window.interdeal = {
        get sitekey() {
          return EQUALWEB_CONFIG.sitekey;
        },
        get domains() {
          return EQUALWEB_CONFIG.domains;
        },
        Position: EQUALWEB_CONFIG.Position,
        Menulang: EQUALWEB_CONFIG.Menulang,
        draggable: EQUALWEB_CONFIG.draggable,
        btnStyle: EQUALWEB_CONFIG.btnStyle,
      };

      console.log("✅ EqualWeb configuration set:", window.interdeal);

      // Load the accessibility script
      const script = document.createElement("script");
      script.src = ACCESSIBILITY_SCRIPT_URL;
      script.defer = true;
      script.integrity = SCRIPT_INTEGRITY;
      script.crossOrigin = "anonymous";
      script.setAttribute("data-cfasync", "true");

      script.onload = () => {
        console.log("✅ EqualWeb accessibility script loaded successfully");
        console.log("🎯 Widget should now be visible on the page");
      };

      script.onerror = (error) => {
        console.error(
          "❌ Failed to load EqualWeb accessibility script:",
          error
        );
      };

      // Append to body if available, otherwise to head
      const targetElement = document.body || document.head;
      targetElement.appendChild(script);

      console.log("📜 EqualWeb script tag added to document");
    } catch (error) {
      console.error("💥 Error loading EqualWeb accessibility widget:", error);
    }
  }, []);

  return {
    loadAccessibilityWidget,
  };
};
