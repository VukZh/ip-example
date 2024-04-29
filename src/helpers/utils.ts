import dayjs from "dayjs";
import 'dayjs/locale/ru'

export const getDate = (date: string): string => {
  return dayjs(date).locale("ru").format("DD MMM, YYYY dd");
}

export const reformattedDate = (date: string): string => {
  const splittedDate = date.split(" ");
  return `${Number(splittedDate[0])} ${splittedDate[1].slice(0, -2)} ${splittedDate[2]}, ${
    splittedDate[3][0].toUpperCase()}${splittedDate[3].slice(1, splittedDate[3].length)}`;
}