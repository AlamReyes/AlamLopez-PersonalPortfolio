import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";

export function BoxRevealDemo() {
  return (
    <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-8">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          WiFi 7<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
            Redefining Wireless Connectivity:{" "}
          <span className="text-[#5046e6]">The Next Leap Forward</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; Wi-Fi 7, also known as IEEE 802.11be, 
            represents the seventh generation of wireless connectivity, 
            building upon the advancements of Wi-Fi 6 and 6E. 
            It offers significant improvements in speed, capacity, 
            and efficiency. 
            With theoretical maximum speeds of up to 46 Gbps—nearly four times faster than Wi-Fi 6&apos;s 10 
            Gbps—Wi-Fi 7 can operate across the 2.4 GHz, 5 GHz, and 6 GHz frequency bands. 
            This enhancement is achieved through wider channel bandwidths, 
            increased from 160 MHz in Wi-Fi 6 to 320 MHz in Wi-Fi 7, and a higher modulation scheme, 
            moving from 1024-QAM to 4096-QAM. These advancements enable faster data transmission, reduced latency, and support for more simultaneous device connections, making Wi-Fi 7 ideal for applications requiring high bandwidth and low latency, such as augmented reality (AR), virtual reality (VR), and real-time gaming.
          </p>
        </div>
      </BoxReveal>
        

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[3.5rem] font-semibold">
          6G<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <h2 className="mt-[.5rem] text-[1rem]">
        The Future of Wireless Communication:{" "}
          <span className="text-[#5046e6]">Beyond 5G</span>
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6">
          <p>
            -&gt; 6G refers to the sixth generation of wireless communication technologies, envisioned as the successor to the current 5G networks. While still in the research and development phase, 6G aims to integrate terrestrial, aerial, and maritime communications into a cohesive and robust network. Expected features include ultra-fast data transmission rates, significantly reduced latency, enhanced reliability, and the capacity to support a massive number of connected devices. Key technological enablers for 6G include artificial intelligence (AI) and machine learning (ML), quantum communication, terahertz frequency utilization, and advanced network architectures. These advancements are anticipated to facilitate innovative applications such as holographic communication, tactile internet, and pervasive intelligence, thereby transforming industries and daily life. Experts predict that 6G networks could become operational around 2030, marking a significant milestone in the evolution of wireless communications.
          </p>
        </div>
      </BoxReveal>

    </div>
  );
}
