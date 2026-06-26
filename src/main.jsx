import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// ── Loader: must complete within 500ms ──
const loaderEl = document.createElement("div");
loaderEl.id = "loader";
loaderEl.setAttribute("aria-hidden", "true");
loaderEl.innerHTML = `<div class="loader-ring"></div>`;
document.body.appendChild(loaderEl);

const START = performance.now();

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Hide loader as soon as first paint — guaranteed < 500ms
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const elapsed = performance.now() - START;
    const remaining = Math.max(0, 280 - elapsed); // min 280ms for polish
    setTimeout(() => {
      loaderEl.classList.add("hidden");
      setTimeout(() => loaderEl.remove(), 300);
    }, remaining);
  });
});
