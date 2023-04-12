import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>School GPT</title>
        <meta
          name="description"
          content="An open curriculum powered by GPT, reviewed by humans."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-blue-900">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-blue-500">School</span> GPT
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Contribute →</h3>
              <div className="text-lg">
                Visit our GitHub Project and help us build a curriculum for 1st
                to 5th graders that is powered by GPT but reviewed by humans.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://twitter.com/intent/tweet?text=I%20am%20contributing%20to%20https%3A//github.com/SchoolGPT/SchoolGPT,%20an%20open-source%20school%20curriculum%20powered%20by%20GPT%20that%20is%20reviewed%20by%20humans."
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Share on Twitter →</h3>
              <div className="text-lg">
                Tell more people about School GPT and help us find more
                contributors.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
