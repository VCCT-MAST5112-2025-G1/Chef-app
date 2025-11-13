### New Features
- Added **Home Screen** showing:
  - Complete menu list
  - Average price calculation using `calculateAveragePrice()`
- Added **Chef Screen**:
  - Allows adding menu items (name, course, price)
  - Allows removing menu items
  - Data saved dynamically in a TypeScript array
- Added **Filter Screen**:
  - Guests can filter menu by course (Starters, Mains, Desserts)
  - Implemented `filterByCourse()` function for reusability

---

### Refactoring Changes
- **Split the app into multiple files** for better structure:
  - `App.tsx` – main entry point  
  - `screens/` folder – contains each page component  
  - `components/` folder – reusable `MenuItemCard`  
  - `utils.ts` – shared logic (filtering and average calculations)  
  - `types.ts` – shared TypeScript types  
  - `menuData.ts` – starter menu data
- Replaced inline logic with **modular functions** for easier testing.
- Converted all components to **TypeScript functional components**.

---

### Interface & UI Improvements
- Added consistent layout spacing and styles for all screens.
- Introduced a simple **manual navigation system** using `useState` instead of React Navigation.
- Improved readability with clear titles, bold labels, and structured buttons.


###  Technical Improvements
- Implemented **TypeScript interfaces** (`MenuItem`, `Course`) for type safety.
- Improved code readability by separating UI and logic layers.
- Simplified state management using React hooks.


###  Removed
- Removed all **React Navigation dependencies** (`@react-navigation/*`).
- Removed redundant inline functions in `App.tsx`.


### Summary
This refactored version is clean, modular, and meets all PoE requirements:
- **Code organized into multiple files**
- **Guest and Chef functionality implemented**
- **Filter by course feature added**
- **Improved maintainability and performance**
