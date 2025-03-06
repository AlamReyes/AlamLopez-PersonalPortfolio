
import {MyCalendar} from '@/components/Calendar'

export default function SchedulePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="about">
          <h1 className="text-3xl font-bold">Schedule</h1>
          <p className="text-muted-foreground md:text-xl">
            Schedule
          </p>
        </section>

        <section id="about">
            <MyCalendar/>
        </section>

      </main>
    );
  }
  