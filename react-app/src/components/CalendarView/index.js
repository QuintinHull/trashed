import React, { useState } from "react";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar, DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import "./CalendarView.css";

const CalendarView = () => {
  const [date, setDate] = useState();

  return (
    <div className="calendar-container">
      <div>---- calendar view----</div>
      <DatePickerCalendar className="calendar" locale={enGB} />
    </div>
  );
};

export default CalendarView;
