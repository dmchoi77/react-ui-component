import dayjs from "dayjs";

export const isValidDate = (dateString: string) => {
  const regex = /^\d{8}$/;
  if (!regex.test(dateString)) return false;

  const year = parseInt(dateString.substr(0, 4), 10);
  const month = parseInt(dateString.substr(4, 2), 10);
  const day = parseInt(dateString.substr(6, 2), 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) return false;

  if (month < 1 || month > 12) return false;

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) return false;

  return true;
};

export const TODAY = dayjs().format("YYYY.MM.DD");
