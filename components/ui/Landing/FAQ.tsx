import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/shadcn/accordion"

export default function FAQ() {
return (
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
        <AccordionTrigger>Is everything free?</AccordionTrigger>
        <AccordionContent>
        Absolutely. Everything I offer right now is free and always will be. I may however, add paid premium features in the future.
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>How does this work?</AccordionTrigger>
        <AccordionContent>
        TBD.
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
        <AccordionTrigger>How did you build this website?</AccordionTrigger>
        <AccordionContent>
        I built this website using Next.js, Shadcn, Supabase, Vercel, Github, and Cursor.
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
        <AccordionTrigger>Why are you doing this?</AccordionTrigger>
        <AccordionContent>
        I'm an entrepreneur. I want to provide value to the world. <br></br>I'm also extremely passionate about networking/recruiting.
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
        <AccordionTrigger>How can I contribute?</AccordionTrigger>
        <AccordionContent>
        Use the product, give detailed feedback, and spread the word. Tell me what part of networking/recruiting gives you a monster headache at alek11221@gmail.com
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6">
        <AccordionTrigger>Where can I find more of what you're doing?</AccordionTrigger>
        <AccordionContent>
        Everything I do is open sourced. You can find it in my notion docs <a 
          href="https://alekturkmen.notion.site/100-Users-7-Days-Alek-Turkmen-1360c1259cce80aa95ebd4dabd8c379f?pvs=4"
          className="underline hover:text-zinc-400 transition-colors"
        >here</a>.
        </AccordionContent>
    </AccordionItem>
    </Accordion>
)
}