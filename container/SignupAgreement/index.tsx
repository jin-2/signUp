import Title from "components/Title";
import Checkbox from "components/Checkbox";
import Mark from "components/Mark";
import Divider from "components/Divider";

export default function SignupAgreement() {
  return (
    <>
      <div>
        <Title>약관동의</Title>
      </div>

      <Checkbox name="agreeChkAll">
        필수동의 항목 및 개인정보수집 및 이용 동의(선택), 광고성 정보 수신
        동의(선택)에 전체 동의합니다.
      </Checkbox>
      <Divider />

      <Checkbox name="Agree5">
        <Mark>(필수)</Mark> 만 15세 이상입니다.
      </Checkbox>

      <Checkbox name="Agree1">
        <Mark>(필수)</Mark> 서비스 이용약관 동의
      </Checkbox>

      <Checkbox name="Agree2">
        <Mark>(필수)</Mark> 개인정보수집 및 이용 동의
      </Checkbox>
      <Divider />

      <Checkbox name="Agree4">
        <Mark color="secondary">(선택)</Mark> 개인정보수집 및 이용 동의
      </Checkbox>

      <Checkbox name="Agree3">
        <Mark color="secondary">(선택)</Mark> 광고성 정보 이메일/SMS 수신 동의
      </Checkbox>
    </>
  );
}
