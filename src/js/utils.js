// Utility functions module - helpers for DOM manipulation, formatting, etc.

// Example utility: Get element by ID with fallback
export function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.warn(`Element with id '${id}' not found`);
    }
    return element;
}

// Example utility: Safe DOM text update
export function setText(elementId, text) {
    const element = getElement(elementId);
    if (element) {
        element.textContent = text;
    }
}
