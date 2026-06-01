# CV Builder
# 📄 CV Builder — Web Dev Capstone

A feature-rich, interactive **Resume / CV Builder** web application built with React 19 and Vite. Create, customize, and export professional CVs entirely in the browser — no backend required.

---

## ✨ Features

- **Live CV Preview** — Changes reflect in real time as you fill in your details
- **Drag & Drop Sections** — Reorder resume sections intuitively via drag-and-drop
- **Custom Routing** — Client-side navigation built without React Router (custom implementation)
- **Persistent Storage** — CV data is saved to `localStorage` so your work survives a page refresh
- **Section Management** — Add, edit, remove entries across Education, Experience, Skills, Projects, and more
- **Responsive Layout** — Works across desktop and mobile viewports
- **Export-ready** — Clean, print-friendly CV layout

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | CSS Modules / custom CSS |
| Routing | Custom client-side router |
| State | React hooks (`useState`, `useEffect`, `useContext`) |
| Persistence | `localStorage` |
| Drag & Drop | Native HTML5 DnD API |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/StillnWater/Web_dev_capstone.git

# 2. Navigate into the project folder
cd Web_dev_capstone/capstone

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

The optimised output will be in the `capstone/dist/` directory.

---

## 📁 Project Structure

```
Web_dev_capstone/
├── capstone/               # Main React app (Vite project root)
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components (form fields, section cards, preview pane)
│   │   ├── pages/          # Route-level views (Editor, Preview, etc.)
│   │   ├── context/        # React context for global CV state
│   │   ├── hooks/          # Custom hooks (useLocalStorage, useDragDrop, etc.)
│   │   ├── utils/          # Helper functions
│   │   ├── App.jsx         # Root component with custom router logic
│   │   └── main.jsx        # Vite entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── package.json            # Root-level package file
```

---

## 🖥️ Usage

1. **Fill in your details** — Personal info, summary, work experience, education, skills, and projects.
2. **Rearrange sections** — Drag section blocks to reorder them on the CV.
3. **Preview your CV** — Switch to the preview pane to see the formatted output.
4. **Print / Export** — Use the browser's print dialog (`Ctrl+P` / `Cmd+P`) to save as PDF.
5. **Come back later** — Your data is auto-saved to `localStorage`; it'll be there when you return.

---

## 🧑‍💻 About

This project was built as the **capstone project** for a Web Development course. It demonstrates practical application of core front-end concepts including component architecture, state management, custom routing, and modern React patterns.

**Author:** Ash ([@StillnWater](https://github.com/StillnWater))

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
