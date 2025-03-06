"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { myEventsList } from "../app/Schedule/events"; // O donde lo tengas

// Configurar localizador con moment.js
const localizer = momentLocalizer(moment);

export function MyCalendar() {
  return (
    <div className="w-full h-[500px] bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        views={["week"]}
        step={30}         // Cada "slot" = 60 minutos
        timeslots={1}
        toolbar={false}
        defaultView="week" // Vista semanal por defecto
        style={{ height: "100%" }}
      />
    </div>
  );
}
