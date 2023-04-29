import Link from "next/link"

import Logo from "./logo"

export default function SiteFooter() {
  return (
    <footer className="flex flex-col justify-center space-y-2 px-5 py-10 sm:grid sm:grid-cols-3">
      <div className="flex items-center">
        <Link href="/">
          <Logo width={256} height={64} />
        </Link>
      </div>
      <div>
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
      <div>
        <h3 className="font-wide text-lg uppercase leading-tight tracking-tighter">
          Socials
        </h3>
        <div className="flex flex-col">
          <Link className="hover:underline" href={""}>
            Twitter
          </Link>
          <Link className="hover:underline" href={""}>
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
