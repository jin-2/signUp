import Title from "components/Title";
import ButtonIcon from "components/ButtonIcon";
import Radio from "components/Radio";
import Inner from "components/Inner";
import { SetValueType } from "hooks/useForm";
import { FormDataType } from "types/form";
import { changeEventType } from "types/common";

interface SignupAgreementProps {
  setValue: SetValueType<FormDataType>;
}

export default function SignupStoragePeriod({
  setValue
}: SignupAgreementProps) {
  const handleChange: changeEventType = ({ target: { value } }) => {
    setValue("storagePeriod", Number(value));
  };

  return (
    <Inner>
      <div>
        <Title>개인정보 유효기간</Title>
        <ButtonIcon />
      </div>

      <Radio name="storagePeriod" value={365} handleChange={handleChange}>
        1년
      </Radio>
      <Radio name="storagePeriod" value={1095} handleChange={handleChange}>
        3년
      </Radio>
      <Radio name="storagePeriod" value={0} handleChange={handleChange}>
        회원탈퇴시
      </Radio>
    </Inner>
  );
}
