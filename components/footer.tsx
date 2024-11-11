import Link from "next/link";

import Logo from "./logo";

export default function SiteFooter() {
  return (
    <footer className="flex flex-col justify-center space-y-2 border-t px-5 py-10 sm:grid sm:grid-cols-2 print:hidden">
      <div className="flex items-center justify-center sm:justify-normal">
        <Link href="/">
          <Logo width={256} height={64} />
        </Link>
      </div>
      <div className="m-4 flex flex-wrap justify-center sm:m-0 sm:justify-normal">
        <FooterLink
          title="Blog"
          description="Articles and updates from the team"
          link="https://blog.peyronnet.group"
        />
        <FooterLink
          title="Privacy Policy"
          description="Learn more about our policies relative to your privacy"
          link="/privacy"
        />

        <FooterLink
          title="X"
          description="Follow us on X to get te latest updates"
          link="https://twitter.com/PeyronnetGroup"
        />

        <FooterLink
          title="YouTube"
          description="Watch our videos about our products"
          link="https://www.youtube.com/@PeyronnetGroup"
        />
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  title: string;
  description: string;
  link: string;
}

function FooterLink(props: FooterLinkProps) {
  return (
    <Link
      href={props.link}
      className="block w-64 rounded-md border border-transparent p-4 transition-all hover:border-muted-foreground/50 hover:bg-muted"
    >
      <h3 className="text-lg font-bold leading-tight tracking-tighter">
        {props.title}
      </h3>
      <p className="text-muted-foreground">{props.description}</p>
    </Link>
  );
}
