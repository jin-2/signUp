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
        <Input
          type="text"
          label="아이디"
          message="아이디를 입력해주세요."
          maxlength={16}
        />
      </div>
    </>
  );
};

export default Home;
