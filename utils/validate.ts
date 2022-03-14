import { FormDataType } from "types/form";
import { MessageRecord } from "hooks/useForm";

type FormDataPartial = Partial<FormDataType>;

const idPattern = /[^a-z0-9]/;
const passwordPattern = /[^0-9a-zA-Z!"#$%&()*+,-.\/:;?@^_{}~\[\]]/;
const spacePattern = /\s/;
const userNamePattern = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z ]/;
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const isRequired = (value: string): boolean => {
  return !value || value.trim().length <= 0;
};

const isRepeatOneCharacter = (value: string): boolean => {
  const firstCharacter = value[0];
  let counting = 1;
  for (let i = 1; i < value.length; i++) {
    if (firstCharacter !== value[i]) {
      break;
    }
    counting++;
  }
  return value.length === counting;
};

export default function validate({
  id = "",
  password = "",
  userName = "",
  email = "",
  agreement = [],
  storagePeriod = null
}: FormDataPartial) {
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
  } else if (6 > id.length || 16 < id.length || idPattern.test(id)) {
    msg.id = "6~16자의 영소문자, 숫자만 사용 가능합니다.";
  }

  if (isRequired(password)) {
    msg.password = "비밀번호를 입력해주세요.";
  } else if (spacePattern.test(password)) {
    msg.password = "비밀번호 내 공백은 사용할수 없습니다.";
  } else if (passwordPattern.test(password)) {
    msg.password =
      '사용 가능한 특수문자는 ! " # $ % & ( ) * + , - . / : ; ? @ ^ _ { } ~ 입니다.';
  } else if (8 > password.length || 16 < password.length) {
    msg.password = "8~16자의 영문, 숫자, 특수문자만 사용 가능합니다.";
  } else if (id === password) {
    msg.password =
      "아이디와 비밀번호가 같습니다. 보안상의 이유로 아이디와 같은 비밀번호는 허용하지 않습니다.";
  } else if (isRepeatOneCharacter(password)) {
    msg.password = "한 문자나 숫자로 연속된 비밀번호는 사용할 수 없습니다.";
  }

  // 특수문자나 숫자는 사용하실 수 없습니다.
  if (isRequired(userName)) {
    msg.userName = "이름을 입력해주세요.";
  } else if (
    2 > userName.length ||
    12 < userName.length ||
    userNamePattern.test(userName) ||
    spacePattern.test(userName)
  ) {
    msg.userName = "2~12자의 한글, 영문만 사용 가능합니다.";
  }

  if (isRequired(email)) {
    msg.email = "이메일을 입력해주세요.";
  } else if (!emailPattern.test(email)) {
    msg.email = "이메일을 올바르게 입력해주세요.";
  }

  if (!agreement?.includes("Agree5")) {
    msg.agreement = "만 15세 이상 확인에 동의해주세요.";
  } else if (!agreement?.includes("Agree1")) {
    msg.agreement = "서비스 이용약관에 동의해주세요.";
  } else if (!agreement?.includes("Agree2")) {
    msg.agreement = "개인정보수집 및 이용에 동의해주세요.";
  }

  if (storagePeriod === null) {
    msg.storagePeriod = "개인정보 유효기간을 선택해주세요.";
  }

  return { msg };
}
