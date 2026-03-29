interface Window {
  google?: {
    maps?: {
      places?: {
        Autocomplete: new (
          input: HTMLInputElement,
          options?: Record<string, unknown>
        ) => unknown;
      };
    };
  };
}
