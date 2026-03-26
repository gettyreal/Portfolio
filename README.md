# Getty's Portfolio Website

A professional portfolio website showcasing work and skills. Built with vanilla HTML, CSS, and JavaScript.

## Folder Structure

```
Portfolio/
├── src/
│   ├── index.html          (Homepage)
│   ├── projects.html       (Project showcase)
│   ├── contact.html        (Contact form)
│   ├── css/
│   │   ├── main.css        (Global styles, resets, variables)
│   │   ├── components.css  (Reusable UI components)
│   │   └── animations.css  (Keyframes and transitions)
│   ├── js/
│   │   ├── main.js         (App initialization, imports all modules)
│   │   ├── api.js          (GitHub API fetching)
│   │   ├── nav.js          (Navigation and page switching)
│   │   └── utils.js        (Utility helper functions)
│   └── service-worker.js   (PWA offline support)
├── assets/
│   ├── images/             (Portfolio project images)
│   ├── icons/              (SVG icons for tech stack)
│   └── fonts/              (Local fonts if needed)
├── public/
│   └── manifest.json       (Web app manifest for PWA)
├── README.md               (This file)
└── .gitignore
```

## CSS Organization

The stylesheet is split into three semantic files that are loaded in order:

1. **main.css** — Global foundation
   - CSS resets and normalization
   - Color variables and custom properties
   - Typography and spacing utilities
   - Global layout utilities
   - Base element styles

2. **components.css** — Reusable UI components
   - Navigation bar and menu styles
   - Buttons and button variants
   - Card components (project cards, skill cards, etc.)
   - Form elements and form styling
   - Hero sections and containers
   - Any other reusable UI patterns

3. **animations.css** — Motion and transitions
   - CSS keyframe animations
   - Transition utilities
   - Hover effects
   - Loading states and spinners
   - Page transition effects

**Load order matters:** main.css first (resets and variables), then components.css (uses variables), then animations.css (applies to components).

## JavaScript Module Organization

The JavaScript codebase uses ES6 modules for clean separation of concerns. All modules are imported by `main.js`, which runs on the `DOMContentLoaded` event.

1. **main.js** — Entry point and initialization
   - Imports all other modules
   - Runs on `DOMContentLoaded` event
   - Initializes the app and sets up event listeners
   - No business logic — just orchestration

2. **api.js** — GitHub API integration
   - Exports `fetchProfile()` function
   - Fetches user profile and repositories from GitHub API
   - Handles API errors gracefully
   - Returns structured data for other modules to consume

3. **nav.js** — Navigation and page switching
   - Exports `setupNavigation()` function
   - Sets up click handlers for navigation links
   - Manages page visibility (show/hide pages)
   - Handles active menu item highlighting

4. **utils.js** — Helper functions
   - DOM manipulation utilities
   - String formatting helpers
   - Data transformation functions
   - Any other utility functions needed across modules

**Module pattern example:**
```javascript
// my-module.js
export function doSomething(param) {
  return result;
}

// main.js
import { doSomething } from './my-module.js';
doSomething(value);
```

## Naming Conventions

### File and Directory Names
- Use **lowercase with hyphens** for separation
- Examples: `service-worker.js`, `project-image.png`, `src/`, `css/`, `js/`

### CSS Class Names
- Use **lowercase with hyphens** for separation
- Semantic and descriptive
- Examples: `.home-menu`, `.project-card`, `.navigation-bar`, `.skill-badge`

### JavaScript Function Names
- Use **camelCase** (first word lowercase, subsequent words capitalized)
- Descriptive verb-noun pattern
- Examples: `fetchProfile`, `setupNavigation`, `renderProjectCard`, `validateEmail`

### JavaScript Variable Names
- Use **camelCase** for dynamic variables
- Examples: `userProfile`, `projectList`, `isMenuOpen`, `selectedProject`
- Use **UPPERCASE** for constants (values that don't change)
- Examples: `API_BASE_URL`, `MAX_RETRIES`, `GITHUB_USERNAME`

### HTML ID Attributes
- Use **lowercase, single words** when possible
- Use **hyphens for multi-word identifiers**
- Should be unique on the page
- Examples: `id="home"`, `id="profile-image"`, `id="project-list"`

## How to Add a New Page

1. **Create the HTML file** in `src/` directory
   - Name it descriptively: `blog.html`, `resume.html`, etc.

2. **Copy navigation structure** from an existing page
   - Copy the entire `<nav>` section from `index.html` or `projects.html`
   - Keep navigation consistent across all pages

3. **Link CSS files** in the `<head>` section
   ```html
   <link rel="stylesheet" href="css/main.css">
   <link rel="stylesheet" href="css/components.css">
   <link rel="stylesheet" href="css/animations.css">
   ```

4. **Load JavaScript module** in the `<head>` section
   ```html
   <script type="module" src="js/main.js"></script>
   ```

5. **Add page content** in the `<main>` or appropriate semantic element

6. **Update nav.js** if this page needs special navigation behavior
   - Add a click handler to navigate to this page
   - Add it to the list of pages that can be shown/hidden

7. **Add styles** as needed
   - For reusable components: add to `components.css`
   - For page-specific styles: add to `main.css` or create new CSS file (optional)

**Example:** To add a blog page:
```bash
# Create the HTML file
cp src/projects.html src/blog.html

# Edit src/blog.html:
# - Change page title and content
# - Keep <nav> section unchanged
# - Navigation will work automatically
```

## How to Add a New Feature

### Adding JavaScript Logic

1. **Create a new module** in `src/js/` for your feature
   ```bash
   # Example: creating a search feature
   touch src/js/search.js
   ```

2. **Write your feature as an exported function**
   ```javascript
   // src/js/search.js
   export function initSearch() {
     // Set up search UI and event listeners
   }

   export function searchProjects(query) {
     // Search logic here
     return results;
   }
   ```

3. **Import and initialize in main.js**
   ```javascript
   // src/js/main.js
   import { initSearch, searchProjects } from './search.js';
   
   document.addEventListener('DOMContentLoaded', () => {
     initSearch();
   });
   ```

4. **Test the feature** by visiting the page that uses it

### Adding Styles

1. **For reusable components:** Add to `components.css`
   ```css
   /* src/css/components.css */
   .search-box {
     /* styles for search component */
   }

   .search-results {
     /* styles for results display */
   }
   ```

2. **For animations:** Add to `animations.css` if the feature needs motion
   ```css
   /* src/css/animations.css */
   @keyframes fadeIn {
     from { opacity: 0; }
     to { opacity: 1; }
   }

   .search-results {
     animation: fadeIn 0.3s ease-in;
   }
   ```

3. **For page-specific styles:** Add to `main.css` (or keep in component CSS)

### Naming Your Feature

- **CSS classes:** `.feature-name`, `.feature-name-active`, `.feature-name-item`
- **JavaScript functions:** `initFeatureName()`, `handleFeatureAction()`, `getFeatureData()`
- **HTML ids:** `id="feature-name"`, `id="feature-container"`
- **Files:** `feature-name.js`, `feature-name.css`

### Feature Checklist

- [ ] JavaScript logic separated into its own module (or added to appropriate existing module)
- [ ] Functions exported clearly and documented
- [ ] Styles added to appropriate CSS file (components.css for reusable, main.css for global)
- [ ] Naming conventions followed throughout
- [ ] HTML markup is semantic and accessible
- [ ] Event listeners use `addEventListener` (not inline `onclick`)
- [ ] Feature tested in browser
- [ ] No console errors

## Development Notes

### Running Locally

Since this project uses vanilla JavaScript with ES6 modules, you need to serve files over HTTP (not file://). 

Using Python (included on most systems):
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000/src/
```

Using Node.js:
```bash
# If you have Node installed
npx http-server src -p 8000

# Then visit: http://localhost:8000/
```

### ES6 Modules

This project uses ES6 modules (`import` and `export`). This requires:
- `type="module"` in the `<script>` tag: `<script type="module" src="js/main.js"></script>`
- Files served over HTTP (not `file://` protocol)
- Modern browser (any recent Chrome, Firefox, Safari, Edge)

### No Build Step

Version 1 of this portfolio intentionally uses vanilla HTML, CSS, and JavaScript with no build tool (Webpack, Vite, etc.). This keeps the codebase simple and demonstrates frontend fundamentals without framework complexity.

If you want to add a build step in the future, consider:
- **Vite** for bundling and dev server
- **esbuild** for fast JavaScript bundling
- **PostCSS** for CSS preprocessing

### Testing Locally

1. Start local server: `python -m http.server 8000`
2. Visit: `http://localhost:8000/src/`
3. Open DevTools: F12 or right-click → Inspect
4. Check Console for any errors
5. Check Network tab to see API calls and resource loading

### Common Patterns

**DOM Manipulation:**
```javascript
// Get element
const element = document.getElementById('my-id');
const elements = document.querySelectorAll('.my-class');

// Add class
element.classList.add('active');

// Remove class
element.classList.remove('active');

// Toggle class
element.classList.toggle('visible');

// Listen for events
element.addEventListener('click', () => {
  console.log('Clicked!');
});
```

**Fetching Data:**
```javascript
// Fetch data from API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**Modules:**
```javascript
// Export
export const value = 42;
export function myFunction() { }

// Import
import { value, myFunction } from './module.js';
```

---

**Questions?** Review this README or check the code comments in the source files. The portfolio demonstrates clean, professional JavaScript patterns suitable for production codebases.
