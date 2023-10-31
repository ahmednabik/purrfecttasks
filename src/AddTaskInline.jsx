import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import {
  CalendarIcon,
  PaperClipIcon,
  TagIcon,
  UserCircleIcon,
  FlagIcon,
} from "@heroicons/react/20/solid";
import SelectDate from "./SelectDate";

const flags = [
  { name: "Low", value: 1 },
  { name: "Medium", value: 2 },
  { name: "High", value: 3 },
];

const dueDates = [
  { name: "No due date", value: null },
  { name: "Today", value: "today" },
  // More items...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddTaskInline({ todos, setTodos, projects, labels }) {
  const [date, setDate] = useState(dayjs());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [project, setProject] = useState("Personal");
  const [priority, setPriority] = useState([""]);
  const [notes, setNotes] = useState("No additional notes.");
  const [labelled, setLabelled] = useState([]);
  const [open, setOpen] = useState(false);

  function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(), //done
      title: title, //done
      description: description, //done
      due: date, //done
      project: project,
      labels: [...labelled], //done
      priority: priority.value, //done
      notes: notes,
      completed: false,
    };
    console.log([...todos, newTodo]);
    setTodos([...todos, newTodo]);
    setOpen(false);
    setTitle("");
    setDescription("");
    setDate(dayjs());
    setLabelled("");
    setPriority("");
  }
  if (open)
    return (
      <div className="mt-2 max-w-3xl">
        <form action="#" className="relative" onSubmit={handleTodoSubmit}>
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-gray-400">
            <label htmlFor="title" className="sr-only">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="block w-full border-0 pt-2.5 text-md font-normal focus:ring-0 text-gray-700 placeholder:text-gray-400"
              placeholder="Task name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description" className="sr-only">
              Description
            </label>
            <textarea
              rows={2}
              name="description"
              id="description"
              className="block w-full resize-none border-0 py-0 text-gray-700 placeholder-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Write a description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div aria-hidden="true">
              <div className="py-2">
                <div className="h-9" />
              </div>
              <div className="h-px" />
              <div className="py-2">
                <div className="py-px">
                  <div className="h-9" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-px bottom-0">
            <div className="flex flex-nowrap justify-end space-x-2 py-2 px-2 sm:px-3">
              <Listbox
                as="div"
                value={priority}
                onChange={setPriority}
                className="flex-shrink-0"
              >
                {({ open }) => (
                  <>
                    <Listbox.Label className="sr-only"> Project </Listbox.Label>
                    <div className="relative">
                      <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-md bg-gray-50 py-1 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                        <FlagIcon
                          className={classNames(
                            priority.value === 1
                              ? "text-green-300 h-5 w-5 flex-shrink-0 sm:-ml-1"
                              : priority.value === 2
                              ? "text-orange-300 h-5 w-5 flex-shrink-0 sm:-ml-1"
                              : priority.value === 3
                              ? "text-red-300 h-5 w-5 flex-shrink-0 sm:-ml-1"
                              : "text-gray-300 h-5 w-5 flex-shrink-0 sm:-ml-1"
                          )}
                          aria-hidden="true"
                        />

                        <span
                          className={classNames(
                            !priority.value ? "text-gray-300" : "text-gray-500",
                            "hidden truncate sm:ml-2 sm:block"
                          )}
                        >
                          {!priority.value ? "Priority" : priority.name}
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className=" absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {flags.map((flag) => (
                            <Listbox.Option
                              key={flag.value}
                              className={({ active }) =>
                                classNames(
                                  active ? "bg-gray-100" : "bg-white",
                                  "relative cursor-pointer select-none py-2 px-3"
                                )
                              }
                              value={flag}
                            >
                              <div className="flex items-center">
                                <FlagIcon
                                  className={classNames(
                                    flag.value === 1
                                      ? "text-green-400 h-5 w-5 flex-shrink-0 sm:-ml-1"
                                      : flag.value === 2
                                      ? "text-orange-400 h-5 w-5 flex-shrink-0 sm:-ml-1"
                                      : "text-red-400 h-5 w-5 flex-shrink-0 sm:-ml-1"
                                  )}
                                  aria-hidden="true"
                                />
                                <span className="ml-3 block truncate font-medium">
                                  {flag.name}
                                </span>
                              </div>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>

              <Listbox
                as="div"
                value={labelled}
                onChange={setLabelled}
                className="flex-shrink-0"
              >
                {({ open }) => (
                  <>
                    <Listbox.Label className="sr-only">
                      Add a label
                    </Listbox.Label>
                    <div className="relative">
                      <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-md bg-gray-50 py-1 px-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                        <TagIcon
                          className={classNames(
                            labelled.length === 0
                              ? "text-gray-300"
                              : "text-gray-500",
                            "h-5 w-5 flex-shrink-0 sm:-ml-1"
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={classNames(
                            labelled.length === 0
                              ? "text-gray-300"
                              : "text-gray-500",
                            "hidden truncate sm:ml-2 sm:block"
                          )}
                        >
                          {labelled.length === 0 ? "Label" : labelled}
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {labels.map((label) => (
                            <Listbox.Option
                              key={label}
                              className={({ active }) =>
                                classNames(
                                  active ? "bg-gray-100" : "bg-white",
                                  "relative cursor-pointer select-none py-2 px-3"
                                )
                              }
                              value={label}
                            >
                              <div className="flex items-center">
                                <span className="block truncate font-medium">
                                  {label}
                                </span>
                              </div>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
              <SelectDate date={date} setDate={setDate} />
            </div>
            <div className="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancle
                </button>
              </div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md border border-transparent bg-purr-primary-color px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purr-accent-color focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className=" w-full mt-4 ml-4 text-left text-gray-400 hover:text-purr-primary-color"
      >
        + Add Task
      </button>
    </div>
  );
}
