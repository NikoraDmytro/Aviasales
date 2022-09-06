import format from "date-fns/format";
import { ru } from "date-fns/esm/locale";

export const formatDateString = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = format(date, "d MMM yyyy, eeeeee", { locale: ru });

  const dateParts = formattedDate.split(" ");

  //Remove dot for month
  dateParts[1] = dateParts[1].slice(0, -1);

  //Capitalize the first letter of weekday
  dateParts[3] = dateParts[3][0].toUpperCase() + dateParts[3].slice(1);

  return dateParts.join(" ");
};
