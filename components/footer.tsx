import Link from "next/link"

import Logo from "./logo"

export default function SiteFooter() {
  return (
    <footer className="flex flex-col justify-center space-y-2 px-5 py-10 sm:grid sm:grid-cols-3">
      <div className="flex items-center justify-center sm:justify-normal">
        <Link href="/">
          <Logo width={256} height={64} />
        </Link>
      </div>
      <div className="m-4 sm:m-0">
        <h3 className="font-wide text-lg uppercase leading-tight tracking-tighter">
          Links
        </h3>
        <div className="flex flex-col">
          <Link
            className="hover:underline"
            href={"https://blog.peyronnet.group"}
          >
            Blog
          </Link>
          <Link className="hover:underline" href={"/privacy"}>
            Privacy policy
          </Link>
        </div>
      </div>
      <div className="m-4 sm:m-0">
        <h3 className="font-wide text-lg uppercase leading-tight tracking-tighter">
          Socials
        </h3>
        <div className="flex flex-col">
          <Link
            className="hover:underline"
            href={"https://twitter.com/PeyronnetGroup"}
          >
            Twitter
          </Link>
          <Link
            className="hover:underline"
            href={"https://www.youtube.com/@PeyronnetGroup"}
          >
            YouTube
          </Link>
          <Link className="hover:underline" href={""}>
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  )
}
