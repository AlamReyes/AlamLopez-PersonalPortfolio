// events.ts (o dentro de tu mismo archivo)

import { Event } from "react-big-calendar";

export interface MyEvent extends Event {
  title: string;
  start: Date;
  end: Date;
}

export const myEventsList: MyEvent[] = [
  // --- Lunes ---
  {
    title: "Microcomputadoras",
    start: new Date(2025, 2, 3, 7, 0), // Lunes 3/Mar/2025 07:00
    end: new Date(2025, 2, 3, 8, 30),
  },
  {
    title: "Lab Computación gráfica",
    start: new Date(2025, 2, 3, 11, 0),
    end: new Date(2025, 2, 3, 13, 0),
  },
  {
    title: "Redes de datos seguras",
    start: new Date(2025, 2, 3, 17, 0),
    end: new Date(2025, 2, 3, 19, 0),
  },
  {
    title: "Big Data & ML",
    // Empieza 23:00 del lunes y acaba 03:00 del martes
    start: new Date(2025, 2, 3, 23, 0),
    end: new Date(2025, 2, 4, 3, 0),
  },

  // --- Martes ---
  {
    title: "Literatura Hispanoaméricana",
    start: new Date(2025, 2, 4, 7, 0),
    end: new Date(2025, 2, 4, 9, 0),
  },
  {
    title: "Computación gráfica",
    start: new Date(2025, 2, 4, 9, 0),
    end: new Date(2025, 2, 4, 11, 0),
  },
  {
    title: "Lab Microcomputadoras",
    start: new Date(2025, 2, 4, 11, 0),
    end: new Date(2025, 2, 4, 13, 0),
  },
  {
    title: "Redes de datos seguras",
    start: new Date(2025, 2, 4, 17, 0),
    end: new Date(2025, 2, 4, 19, 0),
  },

  // --- Miércoles ---
  {
    title: "Microcomputadoras",
    start: new Date(2025, 2, 5, 7, 0),
    end: new Date(2025, 2, 5, 8, 30),
  },
  {
    title: "Lab Redes de datos seguras",
    start: new Date(2025, 2, 5, 9, 0),
    end: new Date(2025, 2, 5, 11, 0),
  },

  // --- Jueves ---
  {
    title: "Literatura Hispanoaméricana",
    start: new Date(2025, 2, 6, 7, 0),
    end: new Date(2025, 2, 6, 9, 0),
  },
  {
    title: "Computación gráfica",
    start: new Date(2025, 2, 6, 9, 0),
    end: new Date(2025, 2, 6, 11, 0),
  },

  // --- Viernes ---
  {
    title: "Ética",
    start: new Date(2025, 2, 7, 13, 0),
    end: new Date(2025, 2, 7, 17, 0),
  },
];
