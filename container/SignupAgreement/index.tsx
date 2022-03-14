import { useState } from "react";
import Title from "components/Title";
import Checkbox from "components/Checkbox";
import Mark from "components/Mark";
import Divider from "components/Divider";
import Inner from "components/Inner";
import { changeEventType } from "types/common";
import { FormDataType } from "types/form";
import { SetValueType } from "hooks/useForm";

interface SignupAgreementProps {
  setValue: SetValueType<FormDataType>;
}

interface CheckListType {
  [key: string]: boolean;
  Agree5: boolean;
  Agree1: boolean;
  Agree2: boolean;
  Agree4: boolean;
  Agree3: boolean;
}

const SignupAgreement = ({ setValue }: SignupAgreementProps) => {
  const [checkList, setCheckList] = useState<CheckListType>({
    Agree5: false,
    Agree1: false,
    Agree2: false,
    Agree4: false,
    Agree3: false
  });

  const getNewCheckList = (checked: boolean): {} => {
    return Object.keys(checkList).reduce(
      (obj, key) => ({
        ...obj,
        [key]: checked
      }),
      {}
    );
  };

  const setCheckedNameList = (obj: CheckListType): string[] => {
    return Object.keys(obj).filter((item) => obj[item]);
  };

  const handleChangeAllCheckbox: changeEventType = ({
    target: { checked }
  }) => {
    const newObj: CheckListType = { ...checkList, ...getNewCheckList(checked) };
    setCheckList(newObj);
    setValue("agreement", setCheckedNameList(newObj));
  };

  const handleChangeCheckbox: changeEventType = ({
    target: { name, checked }
  }) => {
    const newObj = { ...checkList, [name]: checked };
    setCheckList(newObj);
    setValue("agreement", setCheckedNameList(newObj));
  };

  const setCheckedAllCheckbox = (): boolean => {
    return Object.values(checkList).every((item) => item);
  };

  return (
    <Inner>
      <div>
        <Title>약관동의</Title>
      </div>

      <Checkbox
        name="agreeChkAll"
        checked={setCheckedAllCheckbox()}
        handleChange={handleChangeAllCheckbox}
      >
        필수동의 항목 및 개인정보수집 및 이용 동의(선택), 광고성 정보 수신
        동의(선택)에 전체 동의합니다.
      </Checkbox>
      <Divider />

      <Checkbox
        name="Agree5"
        checked={checkList["Agree5"]}
        handleChange={handleChangeCheckbox}
      >
        <Mark>(필수)</Mark> 만 15세 이상입니다.
      </Checkbox>

      <Checkbox
        name="Agree1"
        checked={checkList["Agree1"]}
        handleChange={handleChangeCheckbox}
      >
        <Mark>(필수)</Mark> 서비스 이용약관 동의
      </Checkbox>

      <Checkbox
        name="Agree2"
        checked={checkList["Agree2"]}
        handleChange={handleChangeCheckbox}
      >
        <Mark>(필수)</Mark> 개인정보수집 및 이용 동의
      </Checkbox>
      <Divider />

      <Checkbox
        name="Agree4"
        checked={checkList["Agree4"]}
        handleChange={handleChangeCheckbox}
      >
        <Mark color="secondary">(선택)</Mark> 개인정보수집 및 이용 동의
      </Checkbox>

      <Checkbox
        name="Agree3"
        checked={checkList["Agree3"]}
        handleChange={handleChangeCheckbox}
      >
        <Mark color="secondary">(선택)</Mark> 광고성 정보 이메일/SMS 수신 동의
      </Checkbox>
    </Inner>
  );
};
export default SignupAgreement;
