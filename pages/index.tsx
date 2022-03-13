import type { NextPage } from "next";
import Head from "next/head";
import Input from "components/Input";
import Checkbox from "components/Checkbox";
import Mark from "components/Mark";
import Title from "components/Title";
import Radio from "components/Radio";
import Button from "components/Button";
import ButtonIcon from "components/ButtonIcon";

const Home: NextPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>개인회원 가입 | 알바몬</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="UserId"
          label="아이디"
          message="아이디를 입력해주세요."
          maxlength={16}
        />

        <Input
          name="UserPwd"
          type="password"
          label="비밀번호"
          message="mm"
          maxlength={16}
        />

        <Input
          name="Name"
          type="text"
          label="이름"
          message="mm"
          maxlength={12}
        />

        <Input
          name="EmailId"
          type="email"
          label="이메일"
          message="mm"
          maxlength={50}
        />

        <div>
          <Title>약관동의</Title>
        </div>

        <Checkbox name="agreeChkAll">
          필수동의 항목 및 개인정보수집 및 이용 동의(선택), 광고성 정보 수신
          동의(선택)에 전체 동의합니다.
        </Checkbox>

        <Checkbox name="Agree5">
          <Mark>(필수)</Mark> 만 15세 이상입니다.
        </Checkbox>

        <Checkbox name="Agree1">
          <Mark>(필수)</Mark> 서비스 이용약관 동의
        </Checkbox>

        <Checkbox name="Agree2">
          <Mark>(필수)</Mark> 개인정보수집 및 이용 동의
        </Checkbox>

        <Checkbox name="Agree4">
          <Mark color="secondary">(선택)</Mark> 개인정보수집 및 이용 동의
        </Checkbox>

        <Checkbox name="Agree3">
          <Mark color="secondary">(선택)</Mark> 광고성 정보 이메일/SMS 수신 동의
        </Checkbox>

        <div>
          <Title>개인정보 유효기간</Title>
          <ButtonIcon />
        </div>

        <Radio name="Valid_Day_Cnt" value="365">
          1년
        </Radio>
        <Radio name="Valid_Day_Cnt" value="1095">
          3년
        </Radio>
        <Radio name="Valid_Day_Cnt" value="0">
          회원탈퇴시
        </Radio>

        <Button>가입하기</Button>
      </form>
    </>
  );
};

export default Home;
