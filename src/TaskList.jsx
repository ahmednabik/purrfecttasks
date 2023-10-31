import dayjs from "dayjs";
import { ClockIcon, TagIcon } from "@heroicons/react/24/outline";
export default function TaskList({ todo }) {
  const priorityClass =
    todo.priority === 1
      ? "border-red-600 bg-red-100"
      : todo.priority === 2
      ? "border-orange-500 bg-orange-100"
      : "border-gray-500 bg-gray-100";

  const dueDate =
    dayjs(todo.due).format("DD") === dayjs().format("DD") &&
    dayjs(todo.due).format("MM") === dayjs().format("MM")
      ? "Today"
      : dayjs(todo.due).format("DD") === dayjs().add(1, "day").format("DD") &&
        dayjs(todo.due).format("MM") === dayjs().add(1, "day").format("MM")
      ? "Tomorrow"
      : dayjs(todo.due).format("MMM D, YYYY");

  return (
    <fieldset>
      <div className="mt-4 divide-y divide-purr-text-color border-b border-gray-200">
        <div className="relative flex items-start py-2">
          {/* checkbox */}
          <div className="ml-3 mr-4 flex h-6 items-center ">
            <input
              id={todo.id}
              value={todo.id}
              name={todo.title}
              type="checkbox"
              className={`h-4 w-4 rounded-full border-gray-300 text-purr-primary-color focus:ring-purr-primary-color ${priorityClass}`}
            />
          </div>
          {/* checkbox ends */}

          {/* title and due date starts */}

          <div className="min-w-0 flex-1 text-sm">
            <label className="select-none text-base font-medium text-gray-700">
              <p>{todo.title}</p>
              <span className="text-gray-500 text-sm">
                <ClockIcon className="w-4 -mt-1 inline" /> {dueDate}
              </span>
              <span
                className={
                  !todo.labels.length
                    ? "hidden text-gray-400 text-xs ml-6"
                    : "text-gray-400 text-xs ml-6"
                }
              >
                <TagIcon className="w-4 inline" />{" "}
                {todo.labels.map((label) => label)}
              </span>
            </label>
          </div>
          {/* title and due date ends */}

          {/* project start */}
          <div className="min-w-0 text-sm self-end ">
            <label className="select-none font-medium text-gray-700">
              {todo.project}
            </label>
          </div>

          {/* projects ends */}
        </div>
      </div>
    </fieldset>
  );
}
