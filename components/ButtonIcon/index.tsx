import styled from "styled-components";

interface ButtonIconProps {
  icon?: "info";
}

const ButtonIcon = ({ icon = "info" }: ButtonIconProps) => {
  const setAlt = () => {
    switch (icon) {
      case "info":
        return "더 알아보기";
      default:
        return "더 알아보기";
    }
  };

  return (
    <ButtonIconEl type="button">
      <img src={`/images/icon-${icon}.svg`} alt={setAlt()} />
    </ButtonIconEl>
  );
};
export default ButtonIcon;

const ButtonIconEl = styled.button`
  padding: 6px;
`;
