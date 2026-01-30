// Basic interactions for the demo site

document.addEventListener("DOMContentLoaded", () => {
  // set current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Buttons that open external sites
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const btnGoogle = document.getElementById("btn-google");
  const btnWiki = document.getElementById("btn-wiki");
  if (btnGoogle) btnGoogle.addEventListener("click", () => openInNewTab("https://www.google.com"));
  if (btnWiki) btnWiki.addEventListener("click", () => openInNewTab("https://en.wikipedia.org"));

  // Toggle a simple dark theme
  const btnTheme = document.getElementById("btn-theme");
  if (btnTheme) {
    btnTheme.addEventListener("click", () => {
      const root = document.documentElement;
      const isDark = root.style.getPropertyValue("--bg") === "#0b1220";
      if (!isDark) {
        root.style.setProperty("--bg", "#0b1220");
        root.style.setProperty("--card", "#071127");
        root.style.setProperty("--text", "#e6eef8");
        root.style.setProperty("--accent", "#7dd3fc");
        root.style.setProperty("--muted", "#9ca3af");
      } else {
        // reset to defaults (same values as in CSS)
        root.style.removeProperty("--bg");
        root.style.removeProperty("--card");
        root.style.removeProperty("--text");
        root.style.removeProperty("--accent");
        root.style.removeProperty("--muted");
      }
    });
  }

  // small message button
  const btnMessage = document.getElementById("btn-message");
  if (btnMessage) {
    btnMessage.addEventListener("click", () => {
      alert("Thanks for visiting my website demo!");
    });
  }
});
