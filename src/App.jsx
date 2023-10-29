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
    },
    {
      id: 2,
      title: "Install new react app using vite",
      due: "2023-11-25",
      project: "todo project",
      labels: ["programming, personal"],
      priority: 2,
      comments: "",
    },
    {
      id: 3,
      title: "Install dependencies & configure tailwind",
      due: "2023-11-30",
      project: "todo project",
      labels: ["programming, personal"],
      priority: 1,
      comments: "",
    },
    {
      id: 4,
      title: "Implement level 1 logic",
      due: "2023-12-30",
      project: "todo project",
      labels: ["programming, personal"],
      priority: 3,
      comments: "",
    },
  ]);
  console.log(dayjs().format("MMM D, YYYY"));
  return (
    <div className="bg-purr-background-color">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 flex-col md:pl-64">
        <Searchbar setSidebarOpen={setSidebarOpen} />
        <Container todos={todos} setTodos={setTodos} />
        <AddTask open={open} setOpen={setOpen} setTodos={setTodos} />
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
