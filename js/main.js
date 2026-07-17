// =========================================================
// Maimuna Rahman — Personal Site
// Shared script: dark mode toggle + scroll reveal + academics
// =========================================================

(function () {
    const root = document.documentElement;
    const STORAGE_KEY = "mr-theme";

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        const btn = document.querySelector(".theme-toggle");
        if (btn) {
            btn.setAttribute(
                "aria-label",
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            );
        }
    }

    // Determine initial theme: saved > system > light
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));

    document.addEventListener("DOMContentLoaded", () => {
        // ----- theme toggle button -----
        const toggle = document.querySelector(".theme-toggle");
        if (toggle) {
            toggle.addEventListener("click", () => {
                const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
                const next = current === "dark" ? "light" : "dark";
                applyTheme(next);
                localStorage.setItem(STORAGE_KEY, next);
            });
        }

        // ----- smooth reveal for .reveal elements -----
        const revealEls = document.querySelectorAll(".reveal");
        if (revealEls.length && "IntersectionObserver" in window) {
            const io = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-visible");
                            io.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.15 }
            );
            revealEls.forEach((el) => io.observe(el));
        } else {
            revealEls.forEach((el) => el.classList.add("is-visible"));
        }

        // ==================== ACADEMICS PAGE ONLY ====================
        
        // ----- accordion -----
        const courseHeaders = document.querySelectorAll(".course-header");
        
        courseHeaders.forEach((header) => {
            header.addEventListener("click", () => {
                const isExpanded = header.getAttribute("aria-expanded") === "true";
                
                // Close all others in same year section
                const parentSection = header.closest(".year-section");
                if (parentSection) {
                    parentSection.querySelectorAll(".course-header").forEach((h) => {
                        if (h !== header) h.setAttribute("aria-expanded", "false");
                    });
                }
                
                header.setAttribute("aria-expanded", !isExpanded);
            });
        });

        // ----- year tabs -----
        const yearTabs = document.querySelectorAll(".year-tab");
        const yearSections = document.querySelectorAll(".year-section");

        yearTabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                const targetYear = tab.dataset.year;

                // Update tabs
                yearTabs.forEach((t) => t.classList.remove("active"));
                tab.classList.add("active");

                // Switch sections + close all accordions
                yearSections.forEach((section) => {
                    section.classList.remove("active");
                    section.querySelectorAll(".course-header").forEach((h) => {
                        h.setAttribute("aria-expanded", "false");
                    });
                });

                const target = document.getElementById(`year-${targetYear}`);
                if (target) target.classList.add("active");
            });
        });
    });
})();