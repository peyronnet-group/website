"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import SiteFooter from "@/components/footer"

export default function IndexPage() {
  function Title({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
      <h1
        ref={ref}
        className="font-wide text-3xl uppercase leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </h1>
    )
  }

  function Paragraph({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
      <p
        ref={ref}
        className="font-serif text-lg text-muted-foreground sm:text-xl"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
      >
        {children}
      </p>
    )
  }

  function AnimatedLink({ children, href }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
      <Link
        ref={ref}
        className="hover:underline"
        href={href}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
        }}
      >
        {children}
      </Link>
    )
  }

  function CompanyCard(props) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
      <motion.a
        whileHover={{ transform: "translateY(-20px)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        ref={ref}
        href={props.url}
        className="m-2 flex flex-col items-center rounded-xl border border-slate-500 p-2"
        style={{
          transition: "all cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          transform: isInView ? "none" : "translateY(-80px)",
          opacity: isInView ? 1 : 0,
        }}
      >
        <img
          height={128}
          width={128}
          src={props.src}
          alt={`The logo of ${props.name}.`}
        />
        <h2 className="text-xl font-bold">{props.name}</h2>
        <p className="text-center">{props.desc}</p>
      </motion.a>
    )
  }
  return (
    <>
      <div className="container">
        <section className="flex min-h-screen flex-col items-center justify-center gap-2">
          <Title>Where the future unfolds.</Title>
          <Paragraph>
            Peyronnet Group is a company that specializes in designing and
            delivering innovative solutions for various industries and sectors.
            The company&aposs vision is to create experiences that are already
            in the future, by combining cutting-edge technology, creativity and
            user-centric design.
          </Paragraph>
          <AnimatedLink href={"#innovation"}>Learn more</AnimatedLink>
        </section>
        <section
          id="innovation"
          className="flex min-h-screen grid-cols-2 flex-col items-center justify-center gap-2 lg:grid"
        >
          <div>
            <Title>The home of innovation.</Title>
            <Paragraph>
              Peyronnet Group is the home of innovation and an experience
              creator. It has two divisions that offer state-of-the-art
              solutions for different needs.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2">
            <CompanyCard
              url="https://leocorporation.dev"
              src="Logo.svg"
              name="Léo Corporation"
              desc="Application and experience creator since 2017 that make people more productive."
            />
            <CompanyCard
              src="Devyus.png"
              name="Devyus"
              desc="Organization that specializes in making high-quality developer libraries that help developers create amazing applications."
            />
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
