import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, Download } from "lucide-react";

export function AnimatedSubscribeButtonDemo() {


  return (
    <AnimatedSubscribeButton className="w-36">
      <span className="group inline-flex items-center">
        Download
        <Download className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <span className="group inline-flex items-center">
        <CheckIcon className="mr-2 size-4" />
        Success!
      </span>
    </AnimatedSubscribeButton>
  );
}
