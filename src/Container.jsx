import React from "react";
import TaskList from "./assets/imgs/TaskList";
function Container({ todos, setTodos }) {
  return (
    <div className="flex justify-center">
      <main className="max-w-6xl flex-1">
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl ml-4 font-semibold text-gray-900">Inbox</h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
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
              </div>
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Container;
