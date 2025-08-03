import { useCallback, useEffect } from "react";

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
  // Clean up function to remove all EqualWeb elements and references
  const cleanupEqualweb = useCallback(() => {
    try {
      console.log("🧹 Cleaning up existing EqualWeb instances...");

      // Remove all EqualWeb scripts
      const existingScripts = document.querySelectorAll(
        'script[src*="equalweb.com"], script[src*="accessibility.js"], script[id*="equalweb"]'
      );
      existingScripts.forEach((script) => {
        console.log("🗑️ Removing script:", script.src || script.id);
        script.remove();
      });

      // Remove all EqualWeb widget elements with more comprehensive selectors
      const widgetSelectors = [
        '[id*="equalweb"]',
        '[class*="equalweb"]',
        '[id*="interdeal"]',
        '[class*="interdeal"]',
        "[data-equalweb]",
        ".accessibility-widget",
        "#accessibility-widget",
        'div[style*="accessibility"]',
      ];

      widgetSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          console.log(
            "🗑️ Removing widget element:",
            element.className || element.id
          );
          element.remove();
        });
      });

      // Clear window references more thoroughly
      const windowRefs = [
        "interdeal",
        "equalweb",
        "accessibilityWidget",
        "__equalweb",
      ];
      windowRefs.forEach((ref) => {
        if (window[ref]) {
          console.log("🗑️ Clearing window reference:", ref);
          delete window[ref];
        }
      });

      // Clear any stored accessibility settings in localStorage/sessionStorage
      const storageKeys = ["equalweb", "accessibility", "interdeal"];
      storageKeys.forEach((key) => {
        try {
          localStorage.removeItem(key);
          sessionStorage.removeItem(key);
        } catch (e) {
          // Ignore storage errors
        }
      });

      console.log("✅ EqualWeb cleanup completed");
    } catch (error) {
      console.error("❌ Error during EqualWeb cleanup:", error);
    }
  }, []);

  // Clean up on component mount to ensure fresh state
  useEffect(() => {
    cleanupEqualweb();
  }, [cleanupEqualweb]);

  const loadAccessibilityWidget = useCallback(() => {
    try {
      console.log("🔧 Starting EqualWeb accessibility widget loading...");
      console.log("🌍 Current window.interdeal:", window.interdeal);

      // Clean up any existing instances first
      cleanupEqualweb();

      // Wait a moment for cleanup to complete
      setTimeout(() => {
        console.log("🧹 Cleanup completed, setting up new configuration...");

        // Set up the interdeal configuration object
        window.interdeal = {
          sitekey: EQUALWEB_CONFIG.sitekey,
          domains: EQUALWEB_CONFIG.domains,
          Position: EQUALWEB_CONFIG.Position,
          Menulang: EQUALWEB_CONFIG.Menulang,
          draggable: EQUALWEB_CONFIG.draggable,
          btnStyle: EQUALWEB_CONFIG.btnStyle,
        };

        console.log("✅ EqualWeb configuration set:", window.interdeal);
        console.log("🔗 Script URL:", ACCESSIBILITY_SCRIPT_URL);

        // Create and load the accessibility script
        const script = document.createElement("script");
        script.src = ACCESSIBILITY_SCRIPT_URL;
        script.defer = true;
        script.async = true;
        if (SCRIPT_INTEGRITY) {
          script.integrity = SCRIPT_INTEGRITY;
        }
        script.crossOrigin = "anonymous";
        script.setAttribute("data-cfasync", "true");
        script.setAttribute("data-equalweb-widget", "true");

        script.onload = () => {
          console.log("✅ EqualWeb accessibility script loaded successfully");
          console.log("🎯 Widget should now be visible on the page");
          console.log("🔍 Checking for widget elements...");

          // Check if widget was created
          setTimeout(() => {
            const widgets = document.querySelectorAll(
              '[id*="equalweb"], [class*="equalweb"], [id*="interdeal"]'
            );
            console.log("🎨 Widget elements found:", widgets.length);
            widgets.forEach((widget, index) => {
              console.log(
                `Widget ${index + 1}:`,
                widget.id || widget.className
              );
            });
          }, 1000);
        };

        script.onerror = (error) => {
          console.error(
            "❌ Failed to load EqualWeb accessibility script:",
            error
          );
          console.error("🔗 Script URL that failed:", script.src);
        };

        // Check if script already exists
        const existingScript = document.querySelector(
          `script[src="${ACCESSIBILITY_SCRIPT_URL}"]`
        );
        if (existingScript) {
          console.log("⚠️ Script already exists, removing first...");
          existingScript.remove();
        }

        // Append to body
        document.body.appendChild(script);
        console.log("📜 EqualWeb script tag added to document body");
        console.log("🏗️ Script element:", script);
      }, 100);
    } catch (error) {
      console.error("💥 Error loading EqualWeb accessibility widget:", error);
      console.error("💥 Error details:", error.message, error.stack);
    }
  }, [cleanupEqualweb]);

  return {
    loadAccessibilityWidget,
    cleanupEqualweb,
  };
};
