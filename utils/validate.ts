import { FormDataType } from "types/form";
import { MessageRecord } from "hooks/useForm";

type FormDataPartial = Partial<FormDataType>;

const idPattern = /[^a-z0-9]/;
const passwordPattern = /^[0-9a-zA-Z!"#$%&()*+,-.\/:;?@^_{}~\[\]]$/;
const spacePattern = /\s/;

const isRequired = (value: string): boolean => {
  return !value || value.trim().length <= 0;
};

export default function validate({
  id = "",
  password = "",
  userName = "",
  email = "",
  agreement,
  storagePeriod
}: FormDataPartial) {
  console.log(id, password, userName, email);
  let isValid = false;

  const msg: MessageRecord<FormDataType> = {
    id: "",
    password: "",
    userName: "",
    email: "",
    agreement: "",
    storagePeriod: ""
  };

  if (isRequired(id)) {
    msg.id = "아이디를 입력해주세요.";
  } else if (6 >= id!.length || 16 < id.length || idPattern.test(id)) {
    msg.id = "6~16자의 영소문자, 숫자만 사용 가능합니다.";
  }

  if (isRequired(password)) {
    msg.password = "비밀번호를 입력해주세요.";
  } else if (spacePattern.test(password)) {
    msg.password = "비밀번호 내 공백은 사용할수 없습니다.";
  } else if (passwordPattern.test(password)) {
    msg.password =
      '사용 가능한 특수문자는 ! " # $ % & ( ) * + , - . / : ; ? @ ^ _ { } ~ 입니다.';
  } else if (8 >= id!.length || 16 < id.length) {
    msg.password = "8~16자의 영문, 숫자, 특수문자만 사용 가능합니다.";
  }

  if (isRequired(userName)) {
    msg.userName = "이름을 입력해주세요.";
  } else if (2 >= id!.length || 12 < id.length) {
    msg.userName = "2~12자의 한글, 영문만 사용 가능합니다.";
  }

  if (isRequired(email)) {
    msg.email = "이메일을 입력해주세요.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    msg.email = "이메일을 올바르게 입력해주세요.";
  }

  return { isValid, msg };
}