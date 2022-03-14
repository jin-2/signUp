import type { NextPage } from "next";
import Head from "next/head";
import { useRef } from "react";
import Input from "components/Input";
import Button from "components/Button";
import Inner from "components/Inner";
import SignupAgreement from "container/SignupAgreement";
import SignupStoragePeriod from "container/SignupStoragePeriod";
import useForm, { MessageRecord } from "hooks/useForm";
import { FormDataType } from "types/form";

const SignupPage: NextPage = () => {
  const inputIdRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputUserNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);

  const onSubmit = (msg: MessageRecord<FormDataType>): void => {
    if (inputIdRef.current && msg.id) {
      inputIdRef.current.focus();
      return;
    }

    if (inputPasswordRef.current && msg.password) {
      inputPasswordRef.current.focus();
      return;
    }

    if (inputUserNameRef.current && msg.userName) {
      inputUserNameRef.current.focus();
      return;
    }

    if (inputEmailRef.current && msg.email) {
      inputEmailRef.current.focus();
      return;
    }

    if (msg.agreement) {
      alert(msg.agreement);
      return;
    }

    if (msg.storagePeriod) {
      alert(msg.storagePeriod);
      return;
    }

    console.table(values);
  };

  const {
    submitting,
    values,
    handleChange,
    message,
    touched,
    handleSubmit,
    setValue
  } = useForm<FormDataType>(
    {
      id: "",
      password: "",
      userName: "",
      email: "",
      agreement: [],
      storagePeriod: null
    },
    onSubmit
  );

  const isDisabledSubmitButton = (): boolean => {
    if (!Object.keys(touched).length) {
      return true;
    }
    return Object.values(message).filter((v) => v).length !== 0;
  };

  return (
    <>
      <Head>
        <title>개인회원 가입 | 알바몬</title>
      </Head>
      <form onSubmit={handleSubmit} noValidate>
        <Inner>
          <Input
            name="id"
            ref={inputIdRef}
            type="text"
            label="아이디"
            message={(touched.id && message.id) || ""}
            maxlength={16}
            value={values.id}
            handleChange={handleChange}
          />

          <Input
            name="password"
            ref={inputPasswordRef}
            type="text"
            label="비밀번호"
            message={(touched.password && message.password) || ""}
            maxlength={16}
            value={values.password}
            handleChange={handleChange}
          />

          <Input
            name="userName"
            ref={inputUserNameRef}
            type="text"
            label="이름"
            message={(touched.userName && message.userName) || ""}
            maxlength={12}
            value={values.userName}
            handleChange={handleChange}
          />

          <Input
            name="email"
            ref={inputEmailRef}
            type="email"
            label="이메일"
            message={(touched.email && message.email) || ""}
            maxlength={50}
            value={values.email}
            handleChange={handleChange}
          />
        </Inner>

        <SignupAgreement setValue={setValue} />

        <SignupStoragePeriod setValue={setValue} />

        <Inner paddingTop="44px">
          <Button
            disabled={submitting}
            className={isDisabledSubmitButton() ? "disabled" : ""}
          >
            가입하기
          </Button>
        </Inner>
      </form>
    </>
  );
};

export default SignupPage;
