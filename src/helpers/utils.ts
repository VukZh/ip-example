import dayjs from "dayjs";
import "dayjs/locale/ru";
import {IStopsCount} from "../state/ContextProvider.tsx";

const getDate = (date: string): string => {
  return dayjs(date).locale("ru").format("DD MMM, YYYY dd");
};

export const getReformattedDate = (rawDate: string): string => {
  const date = getDate(rawDate);
  const splittedDate = date.split(" ");
  return `${Number(splittedDate[0])} ${splittedDate[1].slice(0, -2)} ${splittedDate[2]}, ${
    splittedDate[3][0].toUpperCase()}${splittedDate[3].slice(1, splittedDate[3].length)}`;
};

export const roundToTwoDecimalPlaces = (number: number): string => {
  return number.toFixed(2);
};

export const getStopsText = (number: number): string => {
  return number === 0 ? "БЕЗ ПЕРЕСАДОК" : number === 1 ? "1 ПЕРЕСАДКА" : number === 2 ? "2 ПЕРЕСАДКИ" : "3 ПЕРЕСАДКИ";
};

export const updateStopsSettings = (fieldName: keyof IStopsCount, value: boolean, only: boolean, stops: IStopsCount): IStopsCount => {
  const updatedStops = {...stops};
  updatedStops[fieldName as keyof IStopsCount] = value;
  if (only) {
    for (const key in updatedStops) {
      if (key !== fieldName) {
        updatedStops[key as keyof IStopsCount] = false;
      }
    }
  } else if (fieldName === "all" && value) { // if all is true and value is true then set all to false
    updatedStops.all = true;
    for (const key in updatedStops) {
      if (key !== fieldName) {
        updatedStops[key as keyof IStopsCount] = false;
      }
    }
  } else if (fieldName !== "all" && value) {
    updatedStops.all = false;
    if (updatedStops.no && updatedStops.one && updatedStops.two && updatedStops.three) { // if all is false and others values is true then set all to true, others to false

      updatedStops.all = true;
      for (const key in updatedStops) {
        if (key !== "all") {
          updatedStops[key as keyof IStopsCount] = false;
        }
      }
    }
  }
  return updatedStops;
};