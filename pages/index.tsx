import type { NextPage } from "next";
import Head from "next/head";
import Input from "components/Input";
import Title from "components/Title";
import Radio from "components/Radio";
import Button from "components/Button";
import ButtonIcon from "components/ButtonIcon";
import Inner from "components/Inner";
import SignupAgreement from "container/SignupAgreement";
import useForm from "hooks/useForm";
import { submitEventType } from "types/common";
import { FormDataType } from "types/form";

const Home: NextPage = () => {
  const { values, handleChange, message, touched } = useForm<FormDataType>({
    id: "",
    password: "",
    userName: "",
    email: "",
    agreement: [],
    storagePeriod: null
  });

  const handleSubmit: submitEventType = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>개인회원 가입 | 알바몬</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <Inner>
          <Input
            type="text"
            name="id"
            label="아이디"
            message={(touched.id && message.id) || ""}
            maxlength={16}
            value={values.id}
            handleChange={handleChange}
          />

          <Input
            name="password"
            type="text"
            label="비밀번호"
            message={(touched.password && message.password) || ""}
            maxlength={16}
            value={values.password}
            handleChange={handleChange}
          />

          <Input
            name="userName"
            type="text"
            label="이름"
            message={(touched.userName && message.userName) || ""}
            maxlength={12}
            value={values.userName}
            handleChange={handleChange}
          />

          <Input
            name="email"
            type="email"
            label="이메일"
            message={(touched.email && message.email) || ""}
            maxlength={50}
            value={values.email}
            handleChange={handleChange}
          />
        </Inner>

        <Inner>
          <SignupAgreement />
        </Inner>

        <Inner>
          <div>
            <Title>개인정보 유효기간</Title>
            <ButtonIcon />
          </div>

          <Radio name="storagePeriod" value="365">
            1년
          </Radio>
          <Radio name="storagePeriod" value="1095">
            3년
          </Radio>
          <Radio name="storagePeriod" value="0">
            회원탈퇴시
          </Radio>
        </Inner>

        <Inner paddingTop="44px">
          <Button>가입하기</Button>
        </Inner>
      </form>
    </>
  );
};

export default Home;
