import type { NextPage } from "next";
import Head from "next/head";
import Input from "components/Input";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>개인회원 가입 | 알바몬</title>
      </Head>
      <div>
        <Input />
      </div>
    </>
  );
};

export default Home;
