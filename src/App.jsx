import "./App.css";
import Searchbar from "./Searchbar";
import Container from "./Container";
import Sidebar from "./Sidebar";
import { useState } from "react";
import AddTask from "./AddTask";
import { PlusIcon } from "@heroicons/react/20/solid";
import dayjs from "dayjs";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup Github repository from scratch",
      due: dayjs(),
      project: "todo project",
      labels: ["programming, personal"],
      priority: 1,
      comments: "",
      completed: false,
    },
    {
      id: 2,
      title: "Install new react app using vite",
      due: "2023-11-25",
      project: "todo project",
      labels: ["programming, personal"],
      priority: "2",
      comments: "",
      completed: false,
    },
    {
      id: 3,
      title: "Install dependencies & configure tailwind",
      due: "2023-10-30",
      project: "todo project",
      labels: ["programming, personal"],
      priority: 1,
      comments: "",
      completed: false,
    },
    {
      id: 4,
      title: "Implement level 1 logic",
      due: "Tue Oct 31 2023 00:00:00 GMT+0500 (Pakistan Standard Time)",
      project: "todo project",
      labels: ["programming, personal"],
      priority: 3,
      comments: "",
      completed: false,
    },
  ]);
  const [projects, setProjects] = useState([
    { id: 1, name: "Fitness", href: "#", current: false },
    { id: 2, name: "Relationships", href: "#", current: false },
    { id: 3, name: "Groceries", href: "#", current: false },
    { id: 4, name: "Appointments", href: "#", current: false },
  ]);
  return (
    <div className="bg-purr-background-color">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        projects={projects}
        setProjects={setProjects}
      />
      <div className="flex flex-1 flex-col md:pl-64">
        <Searchbar setSidebarOpen={setSidebarOpen} />
        <Container todos={todos} setTodos={setTodos} />
        <AddTask
          open={open}
          setOpen={setOpen}
          todos={todos}
          setTodos={setTodos}
          projects={projects}
        />
        <button
          className="fixed right-10 bottom-10 w-16 h-16 rounded-full bg-purr-primary-color drop-shadow-xl hover:scale-105 text-white"
          onClick={() => setOpen(!open)}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}

export default App;
