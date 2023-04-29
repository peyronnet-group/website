import Link from "next/link"

import Logo from "./logo"

export default function SiteFooter() {
  return (
    <footer className="sm:grid flex flex-col space-y-2 justify-center sm:grid-cols-3 px-5 py-10">
      <div className="flex items-center">
        <Link href="/">
          <Logo width={256} height={64} />
        </Link>
      </div>
      <div>
        <h3 className="text-lg font-wide leading-tight tracking-tighter uppercase">
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
        <h3 className="text-lg font-wide leading-tight tracking-tighter uppercase">
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
