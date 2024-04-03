import { TODAY, isValidDate } from "@/app/utils/dateUtils";
import dayjs from "dayjs";
import { useState } from "react";

const DateField = () => {
  const [date, setDate] = useState(TODAY);

  const handleChange = (e: { target: { value: string } }) => {
    const inputDate = e.target.value;
    const onlyNumber = inputDate.replace(/\D/g, "");

    if (isValidDate(onlyNumber) && onlyNumber.length === 8) {
      return setDate(dayjs(onlyNumber).format("YYYY.MM.DD"));
    }
    setDate(onlyNumber);
  };
  return (
    <div>
      <div>Date Field</div>
      <input value={date} type="text" maxLength={8} onChange={handleChange} />
    </div>
  );
};

export default DateField;
