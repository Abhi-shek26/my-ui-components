# React Component Library: InputField & DataTable

![Storybook](https://img.shields.io/badge/Storybook-Live_Demo-ff4785)

A modern, reusable, and type-safe component library built with React, TypeScript, and Tailwind CSS v4. This project features two core components: a highly configurable `InputField` and a powerful, responsive `DataTable`. The entire library is documented and visualized using Storybook and deployed with Chromatic.

➡️ **View the live Storybook demo here:** **[Live Demo](https://www.chromatic.com/setup?appId=68bf60fbb9a0519a8b8e9655)**

---

## Component Showcase

### InputField
A versatile input component that supports multiple variants, sizes, states, and includes a password visibility toggle.
<img width="901" height="482" alt="Screenshot 2025-09-09 044832" src="https://github.com/user-attachments/assets/9f8e8e2e-a014-45f5-ae58-732d00f1ad76" />
<img width="901" height="479" alt="Screenshot 2025-09-09 044846" src="https://github.com/user-attachments/assets/2e47159b-3f72-4ce6-91a8-2a671d27d27d" />
<img width="898" height="478" alt="Screenshot 2025-09-09 044856" src="https://github.com/user-attachments/assets/599b13c8-c9bf-4a58-97a7-a27d01712dfa" />
<img width="900" height="482" alt="Screenshot 2025-09-09 044924" src="https://github.com/user-attachments/assets/1f06d503-6364-4fa2-ad4c-73ab045b3634" />
<img width="894" height="471" alt="Screenshot 2025-09-09 044935" src="https://github.com/user-attachments/assets/192aa470-f98d-403b-848e-330078cb7d94" />
<img width="899" height="481" alt="Screenshot 2025-09-09 044951" src="https://github.com/user-attachments/assets/6c608b64-420b-4689-8988-ca083030bafe" />


*A showcase of the InputField's variants, states (invalid, disabled, loading), and sizes.*

### DataTable
A powerful table for displaying data with support for sorting, row selection, custom cell rendering, and a fully responsive card-based layout for mobile devices.


*The DataTable demonstrating sorting, row selection, and its responsive transformation on smaller screens.*
<img width="900" height="406" alt="Screenshot 2025-09-09 044709" src="https://github.com/user-attachments/assets/ba7bc64e-4c61-4ba9-bc62-3dbe33f8c316" />
<img width="898" height="404" alt="Screenshot 2025-09-09 044725" src="https://github.com/user-attachments/assets/707cf298-f3a3-4c0c-ad38-a87fa4c30e94" />
<img width="906" height="410" alt="Screenshot 2025-09-09 044737" src="https://github.com/user-attachments/assets/e55e24e5-0aa5-4c2a-a4a5-1cd724cd2368" />
<img width="900" height="407" alt="Screenshot 2025-09-09 044753" src="https://github.com/user-attachments/assets/acbca24a-9d56-4765-a247-5ef10845164b" />
<img width="898" height="410" alt="Screenshot 2025-09-09 044805" src="https://github.com/user-attachments/assets/b4790cd5-e8d9-4d5d-a4cd-8d9b864b51a3" />

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



## 📖 How to Use

Using these components in your own React application is straightforward. After installing the library, you can import and configure them with props.

### Using the `InputField`

The `InputField` is designed to be a flexible, controlled component for use in forms. You manage its state with `useState` and pass the `value` and `onChange` props.

#### Example: A Simple Contact Form

Here's how you might use `InputField` to build a form for user feedback.

```
import { useState } from 'react';
import { InputField } from 'your-component-library';

function ContactForm() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [error, setError] = useState('');

const handleSubmit = () => {
if (!name || !email) {
setError('Name and Email are required.');
} else {
setError('');
console.log('Submitting:', { name, email, message });
// API call would go here
}
};

return (
<div className="space-y-4 p-6 border rounded-lg max-w-lg mx-auto">
<h2 className="text-2xl font-bold">Contact Us</h2>
  <InputField
    label="Full Name"
    placeholder="John Doe"
    value={name}
    onChange={(e) => setName(e.target.value)}
    invalid={!!error && !name}
    errorMessage={!!error && !name ? "Name is required." : ""}
  />
  
  <InputField
    label="Email Address"
    placeholder="you@example.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    invalid={!!error && !email}
    errorMessage={!!error && !email ? "Email is required." : ""}
  />

  {/* Using the 'ghost' variant for a larger text area feel */}
  <InputField
    variant="ghost"
    label="Your Message"
    placeholder="How can we help?"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  />
  
  <button 
    onClick={handleSubmit}
    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
  >
    Submit Feedback
  </button>
</div>
);
}
```


### Using the `DataTable`

The `DataTable` is configured via a `columns` array, which defines the headers and how to render data for each column. Its real power comes from the custom `render` function.

#### Example: Displaying a List of Products with Custom Actions

In this example, we'll display a list of products. We'll use the `render` function to:
- Format the price as currency.
- Display a colored "Status" badge.
- Add "Edit" and "Delete" action buttons to each row.

```
import { useState } from 'react';
import { DataTable, Column } from 'your-component-library';

// 1. Define the shape of our data
interface Product {
id: number;
name: string;
price: number;
stock: number;
status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

// 2. Some sample data
const productData: Product[] = [
{ id: 1, name: 'Wireless Mouse', price: 25.99, stock: 150, status: 'In Stock' },
{ id: 2, name: 'Mechanical Keyboard', price: 89.99, stock: 8, status: 'Low Stock' },
{ id: 3, name: '4K Webcam', price: 120.00, stock: 0, status: 'Out of Stock' },
];

// A small helper component for our status badges
const StatusBadge = ({ status }: { status: Product['status'] }) => {
const colorMap = {
'In Stock': 'bg-green-100 text-green-700',
'Low Stock': 'bg-yellow-100 text-yellow-700',
'Out of Stock': 'bg-red-100 text-red-700',
};
return <span className={px-2 py-1 text-xs font-medium rounded-full ${colorMap[status]}}>{status}</span>;
};

// 3. Define the columns with custom render functions
const productColumns: Column<Product>[] = [
{ key: 'name', title: 'Product Name', dataIndex: 'name', sortable: true },
{
key: 'price',
title: 'Price',
sortable: true,
render: (, record) => $${record.price.toFixed(2)} // Format price as currency
},
{ key: 'stock', title: 'Stock', dataIndex: 'stock', sortable: true },
{
key: 'status',
title: 'Status',
render: (, record) => <StatusBadge status={record.status} /> // Use a custom component
},
{
key: 'actions',
title: 'Actions',
render: (_, record) => ( // Add interactive buttons
<div className="space-x-2">
<button className="text-blue-500 hover:underline" onClick={() => alert(Editing ${record.name})}>Edit</button>
<button className="text-red-500 hover:underline" onClick={() => alert(Deleting ${record.name})}>Delete</button>
</div>
)
},
];

function ProductDashboard() {
const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

return (
<div className="space-y-4 p-6">
<h2 className="text-2xl font-bold">Product Inventory</h2>

text
  <DataTable
    columns={productColumns}
    data={productData}
    selectable={true}
    onRowSelect={(rows) => setSelectedProducts(rows)}
  />

  <p>Selected Products: {selectedProducts.length}</p>
</div>
);
}
```
