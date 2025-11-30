# Rick and Morty Catalog

---

> [!NOTE]  
> This project was created as an **exercise to work with React** and experiment with modern tooling like Vite and Tailwind v4.   
> Feel free to explore my newer work at:  
> **https://ramicbenjamin.github.io**
---

A clean, modern React application built to explore characters from the **Rick and Morty API**.  
This project was created as a hands-on exercise for learning **React**, **Vite**, **Tailwind v4**, and component-driven UI design.

The app includes:

- 🔍 **Search with debounce**
- 📄 **Pagination**
- 🎨 **Custom-designed character cards**
- 🖼️ **Skeleton loading states**
- ⚡ **Vite + React + TypeScript**
- 🌈 **Tailwind v4 styling**
- 🔌 **Custom data-fetching hook (`useCharacters`)**

---

## 🧭 Features

### ✔ Search Characters
Type to filter characters by name. Search updates automatically after a short pause thanks to debouncing.

### ✔ Pagination
Browse the entire Rick & Morty character catalog page-by-page with clean, centered navigation controls.

### ✔ Status-Based Styling
Characters are visibly tinted based on their status:

- 🟢 Alive → subtle green tint
- 🔴 Dead → subtle red tint
- ⚪ Unknown → neutral tint

### ✔ Detailed Character Cards
Each card displays:

- Image
- Name
- Status
- Species
- Gender
- Type
- Origin
- Last known location

### ✔ Skeleton Loaders
While data loads, placeholder cards mimic the layout for a smooth, visually pleasing experience.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### **1. Clone the repository**

```bash
git clone https://github.com/ramicbenjamin/rick-and-morty-catalog.git
cd rick-and-morty-catalog
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Start the development server**

```bash
npm run dev
```

Then visit:

```
http://localhost:5173
```

---

## 🛠️ Tech Stack

- **React 18**
- **Vite**
- **TypeScript**
- **Tailwind CSS v4**
- **Rick and Morty API**
- **Custom hooks + modular components**

---

## 🧩 Project Structure

```
src/
│
├── components/
│   ├── CharacterCard.tsx
│   ├── CharacterList.tsx
│   ├── Pagination.tsx
│   ├── SearchBar.tsx
│   ├── SkeletonCard.tsx
│   ├── SkeletonList.tsx
│
├── hooks/
│   └── useCharacters.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🧠 How It Works

### **1. `useCharacters` hook**
A custom React hook that manages:

- Fetching paginated character data
- Applying search filters
- Handling loading + errors
- Tracking total pages

Example usage:

```tsx
const { characters, isLoading, totalPages, error } =
  useCharacters(page, search);
```

### **2. Debounced Search**
- `searchInput` updates immediately
- `debouncedSearch` updates after 500ms
- The hook refetches when `debouncedSearch` changes

This reduces redundant API calls and improves UX.

### **3. Tailwind UI Components**
Each UI component uses Tailwind v4 classes via `@import "tailwindcss";` for a clean, modern, responsive design.

### **4. Responsive Layout**
Cards stack vertically on mobile and switch to a horizontal layout on larger screens.

## 👁️ How It Looks
<img width="1333" height="1276" alt="image" src="https://github.com/user-attachments/assets/c3b36f7a-a4fe-4481-bdd4-ced2c0755e17" />

---

## 📜 License

MIT © 2025
