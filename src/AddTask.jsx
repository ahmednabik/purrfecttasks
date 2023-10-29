import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import SelectDate from "./SelectDate";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

export default function AddTask({ open, setOpen, todos, setTodos, projects }) {
  const [date, setDate] = useState(dayjs());
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [project, setProject] = useState("Personal");
  const [labels, setLabels] = useState("Personal");
  const [priority, setPriority] = useState(1);
  const [comments, setComments] = useState("No additional comments.");

  function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: title,
      description: description,
      due: date,
      project: project,
      labels: [labels],
      priority: priority,
      comments: comments,
    };
    console.log([...todos, newTodo]);
    setTodos([...todos, newTodo]);
    setTitle(" ");
    setDescription(" ");
    setDate(" ");
    setOpen(false);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form
                    className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                    onSubmit={(e) => handleTodoSubmit(e)}
                  >
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-purr-primary-color py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            Add New Task
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center"></div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-white">
                            Add a new task, fill in short descriptiona and
                            optionally assign a deadline. Click Save to add to
                            your list.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pt-6 pb-5">
                            <div>
                              <label
                                htmlFor="task-title"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Title
                              </label>
                              <div className="mt-1">
                                <input
                                  value={title}
                                  onChange={(e) => setTitle(e.target.value)}
                                  type="text"
                                  name="task-title"
                                  id="task-title"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purr-primary-color focus:ring-purr-primary-color sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-1">
                                <textarea
                                  value={description}
                                  onChange={(e) =>
                                    setDescription(e.target.value)
                                  }
                                  id="description"
                                  name="description"
                                  rows={4}
                                  className="block w-full rounded-md border-gray-300 shadow-sm  focus:border-purr-primary-color focus:ring-purr-primary-color sm:text-sm"
                                />
                              </div>
                            </div>
                            <div className="h-10 flex justify-start items-center mt-4 gap-5">
                              <input
                                type="radio"
                                value={1}
                                name="priority"
                                id="priority-1"
                                onChange={(e) => setPriority(e.target.value)}
                                className="hidden priority-input"
                              />
                              <label
                                htmlFor="priority-1"
                                className="cursor-pointer bg-orange-200 px-2 py-1 rounded-md text-sm"
                              >
                                Priority 1
                              </label>
                              <input
                                type="radio"
                                value={2}
                                name="priority"
                                id="priority-2"
                                onChange={(e) => setPriority(e.target.value)}
                                className="hidden priority-input"
                              />

                              <label
                                htmlFor="priority-2"
                                className="cursor-pointer bg-orange-200 px-2 py-1 rounded-md text-sm"
                              >
                                Priority 2
                              </label>
                              <input
                                type="radio"
                                value={3}
                                name="priority"
                                id="priority-3"
                                onChange={(e) => setPriority(e.target.value)}
                                className="hidden priority-input"
                              />
                              <label
                                htmlFor="priority-3"
                                className="cursor-pointer bg-orange-200 px-2 py-1 rounded-md text-sm"
                              >
                                Priority 3
                              </label>
                            </div>
                            <div className="labels">
                              <label htmlFor="dropdown">
                                Assign to project:
                              </label>
                              <select
                                id="dropdown"
                                onChange={(e) => {
                                  setProject(e.target.value);
                                }}
                              >
                                {projects.map((project) => (
                                  <option key={project.id} value={project.name}>
                                    {project.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="mt-2">
                              <SelectDate setDate={setDate} />
                            </div>
                          </div>
                          <div className="pt-4 pb-6">
                            <div className="mt-4 flex text-sm">
                              <a
                                href="#"
                                className="group inline-flex items-center text-gray-500 hover:text-gray-900"
                              >
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="ml-2">
                                  Learn more about adding tasks
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-purr-primary-color py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
