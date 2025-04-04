import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";

import { DATA } from "@/data/resume";
import { AnimatedListDemo } from "@/components/AnimatedList";
const BLUR_FADE_DELAY = 0.04;

export default function AboutPage() {
    return (
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="about">
            <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
                <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                    yOffset={8}
                    text={`I'm ${DATA.name.split(" ")[0]} 🫡`}
                />
                <BlurFadeText
                    className="max-w-[600px] md:text-xl"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.description}
                />
                </div>
                <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                </BlurFade>
            </div>
            </div>
        </section>
         
        <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Hobbies & Interests</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          </Markdown>
        </BlurFade>
        <AnimatedListDemo>
            
        </AnimatedListDemo>
      </section>
      </main>
    );
  }
  