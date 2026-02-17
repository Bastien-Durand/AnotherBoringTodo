# Another Boring Todo

A full-stack todo application built with React, TypeScript, Node.js, Express, and MongoDB Atlas. Features full CRUD operations, RESTful API design, and cloud deployment.

## Live Demo

- **Frontend:** [another-boring-todo-hozmlvhka-bastien-durands-projects.vercel.app](https://another-boring-todo-hozmlvhka-bastien-durands-projects.vercel.app)
- **Backend API:** [anotherboringtodo-backend.onrender.com](https://anotherboringtodo-backend.onrender.com)

> Note: The backend is hosted on Render's free tier and may take ~30 seconds to wake up on the first request.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CSS Modules

### Backend

- Node.js
- Express
- MongoDB Atlas
- Mongoose

## Features

- Create new todos with title and description
- View all todos fetched from the database
- Toggle todo completion status
- Delete todos
- Form validation to prevent empty submissions
- Responsive design with CSS Modules
- Full TypeScript type safety
- RESTful API with proper HTTP methods
- Cloud-hosted MongoDB database

## API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/todos`     | Fetch all todos     |
| POST   | `/todos`     | Create a new todo   |
| PUT    | `/todos/:id` | Update a todo by ID |
| DELETE | `/todos/:id` | Delete a todo by ID |

## Project Structure

```
├── frontend/todo-app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.tsx
│   │   │   ├── TodoList.tsx
│   │   │   └── *.module.css
│   │   ├── types/
│   │   │   └── Todo.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
├── backend/
│   ├── models/
│   │   └── todo.js
│   ├── index.js
│   ├── .env
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

```bash
node index.js
```

### Frontend Setup

```bash
cd frontend/todo-app
npm install
npm run dev
```

Open http://localhost:5173 to view the app.

## Key Technical Decisions

- **MongoDB Atlas over localStorage:** Moved from client-side persistence to a cloud database for real data persistence across devices and sessions
- **RESTful routing:** Used consistent `/todos` resource naming with HTTP methods (GET, POST, PUT, DELETE) to define operations
- **Re-fetch pattern:** After each mutation (create, update, delete), the frontend re-fetches the full todo list from the API to keep state in sync with the database
- **Mongoose schemas with defaults:** Set `completed: false` as a schema default so the frontend only needs to send title and description when creating a todo
- **Environment variables:** Secured database credentials using dotenv, keeping sensitive config out of version control
- **CORS middleware:** Configured cross-origin requests to allow the frontend (Vercel) to communicate with the backend (Render)

## Data Flow

```
User Action (React Frontend)
    ↓
Fetch request to Express API
    ↓
Mongoose query to MongoDB Atlas
    ↓
JSON response back to frontend
    ↓
React state update → UI re-render
```

## Deployment

- **Frontend:** Deployed on Vercel with automatic GitHub integration
- **Backend:** Deployed on Render as a Node.js web service
- **Database:** MongoDB Atlas free tier (M0 cluster)
