"use client"

import { Metadata } from "next"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Paragraph, Title } from "@/components/text"

export const metadata: Metadata = {
  title: "Distribution",
}
export default function DisPage() {
  return (
    <div className="container grid justify-center">
      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-2">
        <Title>Software Distribution</Title>
        <Paragraph>
          Learn more about the way we distribute software and applications to
          customers and developers.
        </Paragraph>
      </section>
      <section className="max-w-[1240px] text-justify">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Where can I download applications from Peyronnet Group?
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Léo Corporation and Devyus may deliver products to download. We
                have a few places where you can safely download our software and
                applications, we call them &ldquo;trusted sources&rdquo;:
              </p>
              <ul className="ml-8 list-disc">
                <li>
                  GitHub -{" "}
                  <a
                    className="underline"
                    href="https://github.com/Leo-Corporation"
                  >
                    @Leo-Corporation
                  </a>
                  ,{" "}
                  <a className="underline" href="https://github.com/DevyusCode">
                    @DevyusCode
                  </a>{" "}
                  and{" "}
                  <a
                    className="underline"
                    href="https://github.com/peyronnet-group"
                  >
                    @peyronnet-group
                  </a>
                </li>
                <li>
                  Léo Corporation Web Store and any{" "}
                  <a className="underline" href="https://leocorporation.dev">
                    leocorporation.dev
                  </a>{" "}
                  pages/subdomain
                </li>
                <li>Pages of the peyronnet.group domain.</li>
                <li>
                  <a
                    className="underline"
                    href="https://www.nuget.org/profiles/Devyus"
                  >
                    NuGet.org
                  </a>{" "}
                  or{" "}
                  <a
                    className="underline"
                    href="https://github.com/orgs/DevyusCode/packages?repo_name=PeyrSharp"
                  >
                    GitHub Packages
                  </a>{" "}
                  for Devyus packages
                </li>
                <li>
                  Links that are from our official social media accounts such
                  as:{" "}
                  <ul className="ml-8 list-decimal">
                    <li>
                      <a
                        className="underline"
                        href="https://www.youtube.com/@Leo-Corporation"
                      >
                        YouTube
                      </a>{" "}
                      (@Leo-Corporation)
                    </li>
                    <li>
                      <a
                        className="underline"
                        href="https://twitter.com/LeoCorpNews"
                      >
                        Twitter
                      </a>{" "}
                      (@LeoCorpNews)
                    </li>
                    <li>
                      <a
                        className="underline"
                        href="https://www.tiktok.com/@leocorporation_"
                      >
                        TikTok
                      </a>{" "}
                      (@leocorporation_)
                    </li>
                    <li>
                      <a
                        className="underline"
                        href="https://www.instagram.com/leocorporation_/"
                      >
                        Instagram
                      </a>{" "}
                      (@leocorporation_)
                    </li>
                    <li>
                      <a
                        className="underline"
                        href="https://www.facebook.com/LeoCorporationSoftwares/"
                      >
                        Facebook
                      </a>{" "}
                      (@LeoCorporationSoftwares)
                    </li>
                  </ul>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              I saw your softwares and applications on another website, are they
              safe?
            </AccordionTrigger>
            <AccordionContent>
              The only places that are safe to download our apps are GitHub, Léo
              Corporation Web Store. If you are downloading our apps on
              third-party websites, we are not responsible if the file is
              containing malware or other threats that may damage your computer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Have you published your softwares on third-party website?
            </AccordionTrigger>
            <AccordionContent>
              No, we do not publish our software on third-party websites. For
              more informations, see &ldquo;Where can you download our
              softwares?&rdquo;
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              I got a warning by my antivirus that the app I downloaded is a
              threat, is the app safe?
            </AccordionTrigger>
            <AccordionContent>
              If you downloaded one of our software from either the official
              GitHub repo or the web store, you have nothing to worry about.
              These warnings are issued by your antivirus because our apps
              aren&apos;t signed with a valid certificate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left">
              Your app is a trojan according to my antivirus, is it true?
            </AccordionTrigger>
            <AccordionContent>
              <span className="italic">
                (Assuming you used a trusted source)
              </span>{" "}
              No, the app is not a trojan. It is a false positive from your
              antivirus software. The reason why the app is detected as a trojan
              is because it has an update system that downloads files from the
              internet and installs them on your device. The app needs to have
              permissions to write files to disk, read registry keys, and get
              files from the internet for the update system to work properly.
              The app does not use these permissions for any malicious purposes.
              The app is safe and secure to use.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}
