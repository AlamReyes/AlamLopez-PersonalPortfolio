import { MyCalendar } from "@/components/Calendar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";


export default function SchedulePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="schedule">
        <BlurFade>
          <h1 className="text-3xl font-bold">Schedule</h1>
          <p className="text-muted-foreground md:text-xl">This is my weekly schedule</p>
        </BlurFade>
      </section>

      <section id="calendar">
        <BlurFade>
          <MyCalendar />
        </BlurFade>
      </section>
    </main>
  );
}
