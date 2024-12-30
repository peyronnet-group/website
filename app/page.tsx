"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatedLink, Paragraph, Title } from "@/components/text";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function IndexPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const projects = [
    {
      name: "Synapsy Write",
      description: "AI-powered document generator. ",

      language: "TypeScript",
      url: "https://github.com/synapsy-ai/write",
    },
    {
      name: "InternetTest",
      description: "A modern connection utility for Windows.",
      language: "C#",
      url: "https://github.com/Leo-Corporation/InternetTest",
    },
    {
      name: "Gavilya",
      description: "A game launcher and library for Windows.",
      language: "C#",
      url: "https://github.com/Leo-Corporation/Gavilya",
    },

    // Add more projects as needed
  ];
  return (
    <>
      <div className="container">
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <motion.div
            className="absolute inset-0 z-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, ${0.1 + scrollY * 0.001}) 0%, rgba(99, 102, 241, 0) 70%)`,
            }}
          />
          <Title>Where the future unfolds.</Title>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="z-50 mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            GRP is a company that specializes in designing and delivering
            innovative solutions for various industries and sectors. We create
            experiences that are already in the future.
          </motion.p>
          <Link className="z-50" href="#innovation">
            Learn more
          </Link>
        </section>
        <section
          id="innovation"
          className="flex min-h-[50vh] flex-col justify-center px-4 py-20"
        >
          <div className="container mx-auto">
            <Title className="mb-8 text-center">The home of innovation.</Title>
            <Paragraph className="mx-auto mb-12 max-w-3xl text-center text-xl">
              GRP is the home of innovation and an experience creator. We have
              different divisions focused on various areas:
            </Paragraph>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Link
                        href="https://leocorporation.dev"
                        className="mb-4 block"
                      >
                        <Image
                          src="/Logo.svg"
                          alt="Logo of Léo Corporation"
                          width={64}
                          height={64}
                          className="mx-auto transition-transform hover:scale-110"
                        />
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <p>
                        Application and experience creator since 2017 that makes
                        people more productive.
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                  <h3 className="mb-2 text-center text-2xl font-semibold">
                    Léo Corporation
                  </h3>
                  <p className="text-center">
                    Creates applications aimed at improving productivity
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Link
                        href="https://dev.peyronnet.group"
                        className="mb-4 block"
                      >
                        <Image
                          src="/Devyus.png"
                          alt="Logo of Devyus"
                          width={64}
                          height={64}
                          className="mx-auto transition-transform hover:scale-110"
                        />
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <p>
                        Organization that specializes in making high-quality
                        developer libraries that help developers create amazing
                        applications.
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                  <h3 className="mb-2 text-center text-2xl font-semibold">
                    Devyus
                  </h3>
                  <p className="text-center">Builds tools for developers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Link href="#" className="mb-4 block">
                        <Image
                          src="/Synapsy.png"
                          alt="Logo of Synapsy"
                          width={64}
                          height={64}
                          className="mx-auto transition-transform hover:scale-110"
                        />
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <p>
                        Where Artificial Intelligence Meets Experiences. Synapsy
                        focuses on making AI-powered web experiences.
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                  <h3 className="mb-2 text-center text-2xl font-semibold">
                    Synapsy
                  </h3>
                  <p className="text-center">
                    Creates AI-related web experiences
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="opensource"
          className="flex min-h-[70vh] flex-col justify-center px-4 py-20"
        >
          <div className="container mx-auto">
            <Title className="mb-8 text-center">
              Open Source as a core value.
            </Title>
            <Paragraph className="mx-auto mb-12 max-w-3xl text-center text-xl">
              At GRP, we believe in the power of open source to foster
              innovation, collaboration and transparency. We use open source
              technologies and tools to create our solutions, and we contribute
              back to the open source community.
            </Paragraph>
            <div className="mb-12 flex justify-center">
              <Link href="https://github.com/Leo-Corporation/">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Github className="mr-2 h-4 w-4" />
                  <span>See all our Open-Source projects</span>
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card
                  key={project.name}
                  className="transition-colors hover:border-primary"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex items-center text-sm text-slate-200">
                      <span className="mr-4 rounded-full bg-gray-700 px-2 py-1">
                        {project.language}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={project.url}>
                      <Button
                        variant="ghost"
                        className="flex w-full items-center space-x-2"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        <span>View on GitHub</span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
