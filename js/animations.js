(() => {
  "use strict";

  let observer = null;

  function reducedMotion() {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }

  function makeVisible(element) {
    element.classList.add("is-visible");
  }

  function refresh() {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    if (reducedMotion() || !("IntersectionObserver" in window)) {
      elements.forEach(makeVisible);
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          makeVisible(entry.target);
          observer.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    elements.forEach((element) => observer.observe(element));
  }

  function initPointerDepth() {
    if (reducedMotion()) return;
    const finePointer = window.matchMedia?.("(hover: hover) and (pointer: fine)");
    if (!finePointer?.matches) return;
    const visual = document.querySelector(".hero-visual");
    if (!visual) return;

    let raf = 0;
    visual.addEventListener("pointermove", (event) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = visual.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        visual.style.setProperty("--pointer-x", `${x * 7}px`);
        visual.style.setProperty("--pointer-y", `${y * 7}px`);
        visual.querySelectorAll(".produce-piece").forEach((piece, index) => {
          const factor = (index + 1) * 0.45;
          piece.style.marginLeft = `${x * factor * 4}px`;
          piece.style.marginTop = `${y * factor * 4}px`;
        });
      });
    });

    visual.addEventListener("pointerleave", () => {
      visual.querySelectorAll(".produce-piece").forEach((piece) => {
        piece.style.marginLeft = "0px";
        piece.style.marginTop = "0px";
      });
    });
  }

  function init() {
    refresh();
    initPointerDepth();
  }

  window.BDRAnimations = { init, refresh };
  document.addEventListener("DOMContentLoaded", init, { once: true });
})();
