import dayjs from "dayjs";
import 'dayjs/locale/ru'

const getDate = (date: string): string => {
  return dayjs(date).locale("ru").format("DD MMM, YYYY dd");
}

export const getReformattedDate = (rawDate: string): string => {
  const date = getDate(rawDate);
  const splittedDate = date.split(" ");
  return `${Number(splittedDate[0])} ${splittedDate[1].slice(0, -2)} ${splittedDate[2]}, ${
    splittedDate[3][0].toUpperCase()}${splittedDate[3].slice(1, splittedDate[3].length)}`;
}

export const roundToTwoDecimalPlaces = (number: number): string => {
  return number.toFixed(2);
}

export const getStopsText = (number: number): string => {
  return number === 0 ? 'БЕЗ ПЕРЕСАДОК' : number === 1 ? '1 ПЕРЕСАДКА' : number === 2 ? '2 ПЕРЕСАДКИ' : '3 ПЕРЕСАДКИ';
}
