import { useState } from "react";
import DatePicker from "tailwind-datepicker-react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
const options = {
  title: "Set Deadline",
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  clearBtnText: "Clear",
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-white dark:bg-gray-800",
    todayBtn: "bg-purr-primary-color",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-grey-500",
    input: "",
    inputIcon: "",
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
  datepickerClassNames: "top-22",
  defaultDate: new Date(),
  language: "en",
  disabledDates: [],
  weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  inputNameProp: "date",
  inputIdProp: "date",
  inputPlaceholderProp: "Select Date",
  inputDateFormatProp: {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
};

export default function SelectDate({ setDate }) {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    setDate(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <div>
      <DatePicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
}
