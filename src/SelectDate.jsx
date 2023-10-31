import { useState } from "react";
import DatePicker from "tailwind-datepicker-react";
import dayjs from "dayjs";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";
const options = {
  title: "Set Deadline",
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-white dark:bg-gray-400",
    todayBtn: "bg-purr-primary-color",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-grey-500",
    input: "bg-gray-100",
    inputIcon: "bg-gray-100",
    selected: "bg-purr-primary-color",
  },
  icons: {
    prev: () => (
      <span>
        <ArrowLeftIcon className="w-4" />
      </span>
    ),
    next: () => (
      <span>
        <ArrowRightIcon className="w-4" />
      </span>
    ),
  },
  datepickerClassNames: "left-5",
  defaultDate: "",
  language: "en",
  disabledDates: [],
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Select Date",
  inputDateFormatProp: {
    day: "numeric",
    month: "short",
    year: "numeric",
  },
};

export default function SelectDate({ date, setDate }) {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };
  const formatDate = (date) => {
    const currentDate = dayjs();
    const inputDate = dayjs(date);

    if (inputDate.isSame(currentDate, "day")) {
      return "Today";
    } else if (inputDate.isSame(currentDate.add(1, "day"), "day")) {
      return "Tomorrow";
    } else if (inputDate.isSame(currentDate, "year")) {
      return inputDate.format("D MMM");
    } else {
      return inputDate.format("D MMM YYYY");
    }
  };

  return (
    <div>
      <DatePicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      >
        <div className="border-0 cursor-pointer group relative inline-flex items-center whitespace-nowrap rounded-md bg-gray-50 text-gray-500 hover:bg-gray-100 px-3 w-32 py-1">
          <span className="text-gray-300 h-5 w-5 flex-shrink-0 sm:-ml-1">
            <CalendarIcon />
          </span>
          <input
            type="text"
            className="border-0 bg-gray-50 group-hover:bg-gray-100 cursor-pointer text-sm font-medium focus-within:ring-0 py-0 px-0 truncate ml-2 sm:block"
            placeholder="Due date"
            value={formatDate(date || new Date())}
            onFocus={() => setShow(true)}
            readOnly
          />
        </div>
      </DatePicker>
    </div>
  );
}
