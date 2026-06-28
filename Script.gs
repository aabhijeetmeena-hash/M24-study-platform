/**
 * M24 Study Front-End Application Architecture Controller
 * Author: M24 Study Dev Team
 */

// Comprehensive Search Target Registry Data Pool
const MOCK_DATABASE_INDEX = [
    { title: "UPSC CSE General Studies Paper I 2025", category: "papers", tag: "UPSC" },
    { title: "SSC CGL Tier-1 Combined Graduate Level 2024", category: "papers", tag: "SSC" },
    { title: "NDA Mathematics & GAT Reference Paper 2024", category: "papers", tag: "NDA" },
    { title: "NCERT Mathematics Class 12 Core Textbook", category: "ncert", tag: "Class 12" },
    { title: "NCERT Physics Class 12 Detailed Solutions", category: "ncert", tag: "Class 12" },
    { title: "NCERT Chemistry Structural Formulas Chapter 3", category: "ncert", tag: "Class 12" },
    { title: "High Yield Revision Notes - Modern Indian History", category: "materials", tag: "Notes" },
    { title: "Daily Vocabulary Practice Set - Level 4", category: "materials", tag: "Vocabulary" }
];

document.addEventListener("DOMContentLoaded", () => {
    initializeApplicationLoader();
    initializeThemeEngine();
    initializeMobileNavigation();
    initializeGlobalSearchEngine();
    initializeLazyLoadingFramework();
});

/**
 * 1. Application Loader Removal Cycle
 */
function initializeApplicationLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("opacity-0");
            setTimeout(() => loader.remove(), 500);
        }, 300);
    }
}

/**
 * 2. Premium Light/Dark Mode Switcher Logic Loop
 */
function initializeThemeEngine() {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // System Status Initialization
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', () => {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    });
}

/**
 * 3. Mobile Navigation Menu Mechanics
 */
function initializeMobileNavigation() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");

    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        const icon = btn.querySelector("i");
        if(menu.classList.contains("hidden")) {
            icon.className = "fa-solid fa-bars text-xl";
        } else {
            icon.className = "fa-solid fa-xmark text-xl";
        }
    });

    // Auto Collapse menu system upon selecting a section
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.add("hidden");
            btn.querySelector("i").className = "fa-solid fa-bars text-xl";
        });
    });
}

/**
 * 4. High-Performance Instant Local Index Engine
 */
function initializeGlobalSearchEngine() {
    const searchInput = document.getElementById("global-search");
    const panel = document.getElementById("search-results-panel");

    if (!searchInput || !panel) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        panel.innerHTML = "";

        if (query.length < 2) {
            panel.classList.add("hidden");
            return;
        }

        const filtered = MOCK_DATABASE_INDEX.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.tag.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            panel.innerHTML = `<div class="p-4 text-xs text-slate-400">No structured documents match your keyword.</div>`;
        } else {
            filtered.forEach(item => {
                const row = document.createElement("div");
                row.className = "p-3 border-b last:border-0 border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer flex justify-between items-center transition";
                row.innerHTML = `
                    <div>
                        <p class="text-sm font-semibold text-slate-800 dark:text-slate-200">${item.title}</p>
                        <span class="text-[10px] px-2 py-0.5 rounded-md font-medium bg-blue-50 dark:bg-slate-900 text-brand dark:text-cyan-400">${item.tag}</span>
                    </div>
                    <i class="fa-solid fa-chevron-right text-xs text-slate-300"></i>
                `;
                row.addEventListener("click", () => {
                    alert(`Routing connection pipeline safely to resource: ${item.title}`);
                    panel.classList.add("hidden");
                    searchInput.value = "";
                });
                panel.appendChild(row);
            });
        }
        panel.classList.remove("hidden");
    });

    // Close panel if clicked externally
    document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !panel.contains(e.target)) {
            panel.classList.add("hidden");
        }
    });
}

/**
 * 5. Native Accordion Systems for FAQs
 */
function toggleAccordion(buttonElement) {
    const content = buttonElement.nextElementSibling;
    const icon = buttonElement.querySelector("i");
    
    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-180");
}

/**
 * 6. Dynamic PDF Infrastructure Mock Gateways
 */
function mockViewPdf(documentName) {
    alert(`Initializing Internal Cloud PDF Engine Instance...\nLoading File Sandbox: "${documentName}" successfully in secure read-only environment.`);
}

function mockDownloadPdf(documentName) {
    alert(`Establishing dynamic secure link parameters for: \n"${documentName}.pdf"\nFile transfer starting automatically in local background storage context.`);
}

/**
 * 7. Modern IO Lazy Load Performance Optimization
 */
function initializeLazyLoadingFramework() {
    // Dynamically apply optimization flags to section cards
    const elements = document.querySelectorAll('.category-card, #ncert .grid > div, #papers .grid > div');
    
    const observerOptions = {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(el => {
        el.classList.add('lazy-loaded-element');
        observer.observe(el);
    });
}
