import Link from "next/link";

export default function Home() {
  return (
    <section className="lg:grid lg:grid-cols-6 p-10 lg:p-20 bg-lgBackground min-h-screen">
      <h1 className="hidden lg:block col-span-1">Laurenz Guevara</h1>
      <div className="hidden lg:block lg:col-span-5 lg:col-start-2 lg:row-start-1">
        <ul className=" lg:flex lg:space-y-0 lg:justify-end lg:space-x-28">
          <li>
            <Link
              target="_blank"
              href="https://docs.google.com/document/d/1FU8cYTrCgXB2S_QAJoIxWpBr1OUXAah7ZQNo3nSxtGQ/edit?usp=sharing"
            >
              resume
            </Link>
          </li>
          <li>
            <Link href="/">work</Link>
          </li>
          <li>
            <Link href="/">portfolio</Link>
          </li>
          <li>
            <Link href="mailto:laurenz.guevara@gmail.com">contact</Link>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-5 lg:mt-auto">
        <h1 className="block lg:hidden">Hello, I'm Laurenz Guevara</h1>
        <div className="lg:col-span-2">
          <h2 className="hidden lg:block">Hello</h2>
          <p className="pt-4 max-w-xl">
            I’m a UK-based Frontend Developer, actively building websites and
            tinkering daily. Explore to discover more about my ongoing projects
            and past endeavours in this digital space.
          </p>
        </div>
        <div className="space-y-8 pt-8 lg:pt-20 lg:flex lg:space-y-0 lg:space-x-28">
          <div className="space-y-2">
            <h3 className="text-lgGrey">ROLE</h3>
            <p>Front-end Developer</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lgGrey">LOCATION</h3>
            <p>United Kingdom, Isle of Wight</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lgGrey">COMPANY</h3>
            <p>Scorado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
