import { format } from 'date-fns';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  let footer = <p>Пожалуйста, выберите дату:</p>;
  if (selectedDate) {
    footer = <p>Вы выбрали {format(selectedDate, "PP", { locale: ru })}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
    />
  );
}