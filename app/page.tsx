import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Services } from "@/components/Services";
import { Audience } from "@/components/Audience";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { Expertise } from "@/components/Expertise";
import { Students } from "@/components/Students";
import { CallToAction } from "@/components/CallToAction";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Statement />
      <Services />
      <Audience />
      <Work />
      <Process />
      <Expertise />
      <Students />
      <CallToAction />
      <Faq />
    </main>
  );
}
