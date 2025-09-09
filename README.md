# React Component Library: InputField & DataTable

![Storybook](https://img.shields.io/badge/Storybook-Live_Demo-ff4785)

A modern, reusable, and type-safe component library built with React, TypeScript, and Tailwind CSS v4. This project features two core components: a highly configurable `InputField` and a powerful, responsive `DataTable`. The entire library is documented and visualized using Storybook and deployed with Chromatic.

➡️ **View the live Storybook demo here:** **[Live Demo](https://www.chromatic.com/setup?appId=68bf60fbb9a0519a8b8e9655)**

---

## Component Showcase

### InputField
A versatile input component that supports multiple variants, sizes, states, and includes a password visibility toggle.

<img width="901" height="482" alt="Screenshot 2025-09-09 044832" src="https://github.com/user-attachments/assets/889942bf-55f3-48ea-875f-4e7ad92ce464" />
<img width="901" height="479" alt="Screenshot 2025-09-09 044846" src="https://github.com/user-attachments/assets/e94fd33d-3c43-45bd-bced-8908eceba2e0" />
<img width="898" height="478" alt="Screenshot 2025-09-09 044856" src="https://github.com/user-attachments/assets/02820cbd-16c7-4720-99a6-d426f2734643" />
<img width="900" height="482" alt="Screenshot 2025-09-09 044924" src="https://github.com/user-attachments/assets/f78e5783-1ddd-48cc-98f9-d58e52af6a99" />
<img width="894" height="471" alt="Screenshot 2025-09-09 044935" src="https://github.com/user-attachments/assets/1e154010-1b3a-4c5d-900f-085f6aa45e78" />
<img width="899" height="481" alt="Screenshot 2025-09-09 044951" src="https://github.com/user-attachments/assets/cd000aa2-79bc-46a2-a71a-0995cfa29c15" />

*A showcase of the InputField's variants, states (invalid, disabled, loading), and sizes.*

### DataTable
A powerful table for displaying data with support for sorting, row selection, custom cell rendering, and a fully responsive card-based layout for mobile devices.

<img width="900" height="406" alt="Screenshot 2025-09-09 044709" src="https://github.com/user-attachments/assets/0b3a8f10-e3a5-4bbe-8494-148d8a4c2119" />
<img width="898" height="404" alt="Screenshot 2025-09-09 044725" src="https://github.com/user-attachments/assets/c2ac5484-fa40-4515-a306-af345442992a" />
<img width="906" height="410" alt="Screenshot 2025-09-09 044737" src="https://github.com/user-attachments/assets/62b7979d-436f-4cd0-acc8-946688f4eb8e" />
<img width="900" height="407" alt="Screenshot 2025-09-09 044753" src="https://github.com/user-attachments/assets/2166273e-14fb-44b5-aaf3-db2a423d717b" />
<img width="898" height="410" alt="Screenshot 2025-09-09 044805" src="https://github.com/user-attachments/assets/518501e9-35ee-408c-b7b0-172b7a71ad28" />

*The DataTable demonstrating sorting, row selection, and its responsive transformation on smaller screens.*

---

## Features

### `InputField`
- **Multiple Variants**: `outlined` (default), `filled`, and `ghost` styles.
- **Multiple Sizes**: `sm`, `md`, and `lg` for flexible layouts.
- **Rich States**: Supports `disabled`, `invalid` (with error messages), and `loading` states.
- **Password Toggle**: Automatically adds a hide/show button for `type="password"`.
- **Full Accessibility**: Includes `aria-invalid` attributes and associated labels.

### `DataTable`
- **Dynamic Column Configuration**: Define columns and their behavior with a simple config object.
- **Interactive Sorting**: Enable sorting on any column with the `sortable` flag.
- **Row Selection**: Enable row selection with a `selectable` prop and get selected data via the `onRowSelect` callback.
- **Advanced Cell Rendering**: Use the custom `render` function to display JSX, custom components (like status badges or action buttons), or formatted data in any cell.
- **Fully Responsive**: Gracefully transforms from a standard table on desktop to a card-based layout on mobile, eliminating horizontal scrolling.
- **Loading & Empty States**: Provides clear user feedback when data is loading or unavailable.

---

## Tech Stack

- **Framework**: [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Component Documentation**: [Storybook](https://storybook.js.org/)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Deployment**: [Chromatic](https://www.chromatic.com/)

---

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```
    git clone [YOUR_GITHUB_REPO_LINK_HERE]
    ```
2.  **Navigate to the project directory:**
    ```
    cd react-component-library-assignment
    ```
3.  **Install dependencies:**
    ```
    npm install
    ```
4.  **Run the local development server (for App.tsx playground):**
    ```
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

5.  **Run the Storybook server:**
    ```
    npm run storybook
    ```
    Open [http://localhost:6006](http://localhost:6006) in your browser to view the component documentation.

---

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `npm run storybook`: Starts the Storybook development server.
- `npm run build-storybook`: Builds a static version of the Storybook site into the `storybook-static` directory.
- `npm run test`: Runs the component tests using Vitest.

---

## 📂 Folder Structure

The project follows a standard feature-based structure, keeping all component-related files together.

``` bash
├── public/
├── src/
│   ├── components/
│   │   ├── InputField/
│   │   │   ├── InputField.tsx # Component logic and styling
│   │   │   ├── InputField.stories.tsx # Storybook stories
│   │   │   └── InputField.test.tsx # Component tests
│   │   ├── DataTable/
│   │   │   ├── DataTable.tsx
│   │   │   ├── DataTable.stories.tsx
│   │   │   └── DataTable.test.tsx
│   │   └── index.ts # Barrel file for easy component exports
│   ├── styles/
│   │   └── globals.css # Global styles and Tailwind directives
│   ├── utils/
│   │   └── clsx.ts # Utility for conditional class names
│   ├── App.tsx # Main application file for local demo
│   └── main.tsx # Application entry point
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## Technical Approach and Architectural Decisions

My goal was to create a component library that is not only functional but also scalable, maintainable, and built on a foundation of modern development practices. The following architectural decisions were key to achieving this.

### 1. Declarative and Predictable API Design

I designed both components with a **props-driven API**, treating them like pure functions of their props (`UI = f(props)`). This means the component's appearance and behavior are a predictable and direct result of the props it receives.

-   **Why it Matters:** This approach makes the components incredibly easy to use and reason about. A developer can see exactly what state a component is in just by looking at the props being passed. For example, setting `invalid={true}` on the `InputField` **declaratively** makes the input red, rather than requiring an imperative command like `input.showError()`. This simplifies debugging and makes testing more straightforward.

### 2. Utility-First Styling with Composition

For styling, I chose **Tailwind CSS v4**. This was a strategic decision to enable rapid development while ensuring long-term maintainability.

-   **Composition over Configuration:** Instead of writing large, monolithic CSS files, I built the UI by composing small, single-purpose utility classes directly in the JSX. This keeps styles co-located with the component logic, making them easier to manage.
-   **Dynamic Styling with `clsx`:** The `clsx` utility is used extensively to dynamically and conditionally combine class names based on the component's props (e.g., `variant`, `size`, `disabled`). This creates a clean, readable, and powerful system for managing the component's many visual states without style conflicts or specificity wars.

### 3. Extensibility and 'Inversion of Control' with Render Props

The most critical architectural decision for the `DataTable` was the implementation of a custom `render` function in the column definition.

-   **The Problem:** A simple `dataIndex` is too restrictive for real-world data, which is often nested, needs special formatting, or requires interactive elements.
-   **The Solution:** I used a **render prop pattern**, which is a form of **"Inversion of Control."** Instead of the `DataTable` dictating *how* to render a cell's content, it delegates (or inverts) that control back to the user.
-   **The Power it Unlocks:** This one feature transforms the `DataTable` from a simple data grid into a flexible layout engine. It allows developers to:
    -   Render nested data (e.g., `user.profile.name`).
    -   Apply custom formatting for dates, currencies, etc.
    -   Embed custom React components, like status badges or avatars.
    -   Include interactive elements like action buttons (`Edit`, `Delete`) within each row.


### 4. A Modern and Efficient Developer Experience (DX)

The choice of tooling was deliberately focused on creating a fast, reliable, and professional development workflow.

-   **Vite as the Build Tool:** Provides a near-instant feedback loop thanks to its lightning-fast Hot Module Replacement (HMR).
-   **Storybook as a Component Workshop:** Used not just for documentation, but as an isolated development environment. This allows for building and testing each component's states in a vacuum, which is crucial for creating a robust and bug-free library.
-   **Chromatic for Visual Testing and Deployment:** Integrated Chromatic to automate deployment and add a layer of quality assurance. Chromatic captures a visual snapshot of every component, allowing it to automatically detect unintended UI changes (**visual regressions**) on future code updates. This ensures that a change to one component doesn't accidentally break another, a common problem in large projects.
#   m y  
 