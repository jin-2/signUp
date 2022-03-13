import type { NextPage } from "next";
import Head from "next/head";
import Input from "components/Input";
import Checkbox from "components/Checkbox";
import Mark from "components/Mark";
import Title from "components/Title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>개인회원 가입 | 알바몬</title>
      </Head>
      <form>
        <Input
          type="text"
          label="아이디"
          message="아이디를 입력해주세요."
          maxlength={16}
        />

        <Title>약관동의</Title>
        <Checkbox>
          필수동의 항목 및 개인정보수집 및 이용 동의(선택), 광고성 정보 수신
          동의(선택)에 전체 동의합니다.
        </Checkbox>
        <Checkbox>
          <Mark>(필수)</Mark> 만 15세 이상입니다.
        </Checkbox>
        <Checkbox>
          <Mark color="secondary">(선택)</Mark> 개인정보수집 및 이용 동의
        </Checkbox>
      </form>
    </>
  );
};

export default Home;
