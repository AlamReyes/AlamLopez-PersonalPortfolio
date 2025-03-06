"use client";

import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Configurar localizador con moment.js
const localizer = momentLocalizer(moment);

// Definir el tipo de evento
interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

// Definir eventos de ejemplo
const myEventsList: MyEvent[] = [
  {
    title: "Meeting",
    start: new Date(2024, 2, 10, 10, 0), // Marzo 10, 10:00 AM
    end: new Date(2024, 2, 10, 12, 0),   // Marzo 10, 12:00 PM
  },
  {
    title: "Lunch Break",
    start: new Date(2024, 2, 12, 13, 0), // Marzo 12, 1:00 PM
    end: new Date(2024, 2, 12, 14, 0),   // Marzo 12, 2:00 PM
  },
];

export function MyCalendar() {
  return (
    <div className="w-full h-[500px] bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
      />
    </div>
  );
}
