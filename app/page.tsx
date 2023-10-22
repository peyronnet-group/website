"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import SiteFooter from "@/components/footer"
import { AnimatedLink, Paragraph, Title } from "@/components/text"
import { Separator } from "@/components/ui/separator"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function IndexPage() {

  return (
    <>
      <div className="container">
        <section className="flex min-h-screen flex-col items-center justify-center gap-2">
          <Title>Where the future unfolds.</Title>
          <Paragraph>
            Peyronnet Group is a company that specializes in designing and
            delivering innovative solutions for various industries and sectors.
            The company&apos;s vision is to create experiences that are already
            in the future, by combining cutting-edge technology, creativity and
            user-centric design.
          </Paragraph>
          <AnimatedLink href={"#innovation"}>Learn more</AnimatedLink>
        </section>
        <section
          id="innovation"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <Title>The home of innovation.</Title>
          <Paragraph>
            Peyronnet Group is the home of innovation and an experience
            creator. It has different divisions focused on different areas: Léo Corporation creates applications aimed at improving productivity, Devyus builds tools for developers and Synapsy creates AI-related web experiences.
          </Paragraph>

          <div className="flex space-x-4 mt-8">
            <HoverCard>
              <HoverCardTrigger><Link href={"https://leocorporation.dev"}>
                <Image height={48} width={48} className="saturate-0 opacity-50 hover:opacity-100 hover:saturate-100 transition duration-300" alt="Logo of Léo Corporation" src="Logo.svg" />
              </Link></HoverCardTrigger>
              <HoverCardContent>
                Application and experience creator since 2017 that makes people more productive.
              </HoverCardContent>
            </HoverCard>

            <Separator orientation="vertical" className="h-auto" />
            <HoverCard>
              <HoverCardTrigger><Link href={"https://dev.peyronnet.group"}>
                <Image height={48} width={48} className="saturate-0 opacity-50 hover:opacity-100 hover:saturate-100 transition duration-300" alt="Logo of Devyus" src="/Devyus.png" />
              </Link></HoverCardTrigger>
              <HoverCardContent>
                Organization that specializes in making high-quality developer libraries that help developers create amazing applications.
              </HoverCardContent>
            </HoverCard>

            <Separator orientation="vertical" className="h-auto" />
            <HoverCard>
              <HoverCardTrigger><Link href={"#"}>
                <Image height={48} width={48} className="saturate-0 opacity-50 hover:opacity-100 hover:saturate-100 transition duration-300" alt="Logo of Synapsy" src="/Synapsy.png" />
              </Link></HoverCardTrigger>
              <HoverCardContent>
                Where Artificial Intelligence Meets Experiences. Synapsy focuses on making AI-powered web experiences.
              </HoverCardContent>
            </HoverCard>

          </div>
        </section>
        <section className="flex min-h-screen flex-col justify-center">
          <Title>A trusted place.</Title>
          <Paragraph>
            At Peyronnet Group, we are more than just a company. We are a
            trusted place where innovation thrives and where our clients can
            find the best solutions for their challenges. We are a trusted place
            where our employees can grow and develop their skills and talents.
            We are a trusted place where we collaborate with our partners and
            stakeholders to create value and positive impact. We are a trusted
            place where we uphold the highest standards of quality, ethics and
            sustainability. We are Peyronnet Group, and we invite you to join us
            in shaping the future.
          </Paragraph>
        </section>
        <section className="flex min-h-screen flex-col justify-center">
          <Title>Open Source as a core value.</Title>
          <Paragraph>
            At Peyronnet Group, we believe in the power of open source to foster
            innovation, collaboration and transparency. We use open source
            technologies and tools to create our solutions, and we contribute
            back to the open source community by sharing our code, knowledge and
            expertise. By embracing open source as a core value, we aim to
            create a positive impact on the world and the future.
          </Paragraph>
          <AnimatedLink href="https://github.com/Leo-Corporation/">
            See our Open-Sourced projects
          </AnimatedLink>
        </section>
      </div>
    </>
  )
}
