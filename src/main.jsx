import React from "react";
import ReactDOM from "react-dom/client";
import FeedbackWidget from "./FeedbackWidget";

function mount() {
  let container = document.getElementById("feedback-widget-root");
  if (!container) {
    container = document.createElement("div");
    container.id = "feedback-widget-root";
    document.body.appendChild(container);
  }

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <FeedbackWidget />
    </React.StrictMode>
  );
}

// Auto-mount on load
mount();

// Also expose globally if needed
window.FeedbackWidget = { mount };
