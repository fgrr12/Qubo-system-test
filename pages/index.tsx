import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FirstCase } from '../views/first-case';
import { SecondCase } from '../views/second-case';
import { ThirdCase } from '../views/third-case';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Qubo Systems test</title>
        <meta name="description" content="Qubo Systems test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="card">
        <h3>Fluid Diagram</h3>
        <Image src="/imgs/fluid diagram.png" alt="img" width={350} height={450} />
      </div>
      <div className="card">
        <FirstCase />
        <br />
        <SecondCase />
        <br />
        <ThirdCase />
      </div>
    </div>
  );
};

export default Home;
