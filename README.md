# Todo App

A fully-functional todo application built with React, TypeScript, and Vite. Features CRUD operations, persistent storage, and form validation.

## 🎯 Project Overview

A complete todo management application demonstrating modern React development practices, TypeScript type safety, and local data persistence. Built as part of daily coding practice while preparing for junior developer roles.

## 🛠️ Tech Stack

- **React** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast development build tool
- **CSS Modules** - Scoped component styling
- **localStorage** - Client-side data persistence

## ✨ Features

### Completed

- ✅ Create new todos with title and description
- ✅ Display list of all todos
- ✅ Mark todos as complete/incomplete with checkbox
- ✅ Visual feedback (strikethrough) for completed todos
- ✅ Delete todos
- ✅ Data persistence with localStorage (survives page refresh)
- ✅ Form validation (prevents empty submissions)
- ✅ Responsive design with CSS Modules
- ✅ Full TypeScript type safety

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd todo-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## 📂 Project Structure

```
src/
├── components/
│   ├── TodoForm.tsx       # Form for creating new todos
│   ├── TodoForm.module.css
│   ├── TodoList.tsx       # Displays list of todos
│   └── TodoList.module.css
├── types/
│   └── Todo.ts           # Shared TypeScript interface
├── App.tsx               # Main app component with state management
└── main.tsx             # App entry point
```

## 🧩 Key Concepts Demonstrated

### React Fundamentals

- Component composition and reusability
- State management with `useState`
- Side effects with `useEffect`
- Controlled form inputs
- Event handling
- Conditional rendering
- List rendering with `.map()`

### TypeScript

- Interface definitions
- Type-safe props
- Type-safe event handlers
- Generic types with `useState`

### Data Management

- Lifting state up (parent-child communication)
- Passing functions as props
- Immutable state updates
- localStorage persistence (save on change, load on mount)

### Array Methods

- `.map()` - Transform and render arrays
- `.filter()` - Remove items from arrays
- Spread operator (`...`) - Create new arrays/objects

## 📝 Learning Goals

This project was built to practice:

- Building complete CRUD applications
- Managing state in React
- Type-safe development with TypeScript
- Component architecture and data flow
- Form handling and validation
- Client-side data persistence
- Modern CSS styling practices

## 🎨 Styling

Uses CSS Modules for scoped, component-level styling:

- Clean, modern UI design
- Hover effects on interactive elements
- Visual feedback for completed items
- Responsive layout
- Box shadows for depth

## 🔄 Data Flow

```
User Input (TodoForm)
    ↓
onAddTodo prop function
    ↓
App.tsx state update
    ↓
localStorage save (useEffect)
    ↓
TodoList re-render
```

## 🧪 Future Enhancements

Potential additions for further learning:

- Edit existing todos
- Filter todos (all/active/completed)
- Search functionality
- Due dates
- Categories/tags
- Backend API integration (Node.js/Express)
- Database persistence (MongoDB)
- User authentication
- Unit tests (Jest/React Testing Library)

## 📚 Daily Practice

This project is part of a structured learning routine:

- **Morning (90 min):** Feature development
- **Afternoon (90 min):** Interview prep and coding challenges
- **Goal:** Build job-ready skills and portfolio projects

## 🤝 About

Built by Bastien Durand as part of a daily coding practice routine while transitioning from coaching to software engineering. Currently job hunting for junior full-stack developer roles.

## 📄 License

MIT

---

**Current Status:** Core functionality complete and production-ready. Available for code review and discussion in technical interviews.
