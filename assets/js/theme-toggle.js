// Keep al-folio's theme application and persistence; toggle the visible theme
// directly instead of cycling through a separate system preference setting.
(() => {
  const button = document.getElementById("light-toggle");
  if (!button) return;

  const updateLabel = () => {
    const next = determineComputedTheme() === "dark" ? "light" : "dark";
    const label = `Switch to ${next} mode`;
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  };

  toggleThemeSetting = () => {
    setThemeSetting(determineComputedTheme() === "dark" ? "light" : "dark");
    updateLabel();
  };

  // The system preference is used until the visitor makes an explicit choice.
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateLabel);
  updateLabel();
})();
