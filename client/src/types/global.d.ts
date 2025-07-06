
declare global {
  interface Window {
    EqualWebScriptLoaded?: boolean;
    EqualWeb?: {
      init?: () => void;
      show?: () => void;
      toggle?: () => void;
      hide?: () => void;
    };
  }
}

export {};
