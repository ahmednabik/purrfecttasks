import React from "react";
import TaskList from "./TaskList";
import AddTaskInline from "./AddTaskInline";
import { Menu } from "@headlessui/react";
import EditTask from "./EditTask";
function DisplayTasks({
  todos,
  setTodos,
  open,
  setOpen,
  projects,
  labels,
  setLabels,
}) {
  return (
    <div className="flex justify-center">
      <main className="max-w-6xl flex-1">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl ml-4 font-semibold text-gray-900">Inbox</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <div className="h-96 rounded-lg">
                <ul>
                  {todos.map((todo) => {
                    return (
                      <li key={todo.id}>
                        <TaskList todo={todo} />
                      </li>
                    );
                  })}
                </ul>
                <AddTaskInline
                  open={open}
                  setOpen={setOpen}
                  todos={todos}
                  setTodos={setTodos}
                  projects={projects}
                  labels={labels}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DisplayTasks;
