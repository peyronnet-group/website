import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 min-h-screen">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-wide leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl uppercase">
          Where the future unfolds.
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Peyronnet Group is a company that specializes in designing and
          delivering innovative solutions for various industries and sectors.
          The company's vision is to create experiences that are already in the
          future, by combining cutting-edge technology, creativity and
          user-centric design.
        </p>
      </div>
    </section>
  )
}
