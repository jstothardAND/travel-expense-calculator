import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const transports = trpc.useQuery(["transport.getAll"]);
  console.log("transports", JSON.stringify(transports.data, null, 2));
  return (
    <>
      <Head>
        <title>Travel Expense Calculator</title>
        <meta
          name="description"
          content="A travel expense calculator for AND Digital"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4 grid">
        <h1 className="text-5xl md:text-[5rem] font-extrabold">
          Travel Expense Calculator
        </h1>
        <form action="" className="grid gap-4">
          <h2 className="text-3xl md:text-[3rem] leading-normal">
            Which mode of transport did you take?
          </h2>
          <div className="container grid ">
            {transports?.data &&
              transports.data.map((transport) => (
                <label
                  key={transport.id}
                  className="container grid grid-flow-col p-5"
                >
                  <input
                    type="radio"
                    name="transport"
                    id={transport.id.toString()}
                  />
                  {transport.name}
                  <p className="ml-auto font-light text-slate-800">
                    {transport.price * 100}p/mile
                  </p>
                </label>
              ))}
          </div>
          <label>
            <h2 className="text-3xl md:text-[3rem] leading-normal">
              Where did your journey start?
            </h2>
            <input type="text" name="start" />
          </label>
          <label>
            <h2 className="text-3xl md:text-[3rem] leading-normal">
              Where did your journey end?
            </h2>
            <input type="text" name="end" />
          </label>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calculate
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;
