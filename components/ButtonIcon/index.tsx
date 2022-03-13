import styled from "styled-components";

interface ButtonIconProps {
  icon?: "info";
}

export default function ButtonIcon({ icon = "info" }: ButtonIconProps) {
  const setAlt = () => {
    switch (icon) {
      case "info":
        return "더 알아보기";
      default:
        return "더 알아보기";
    }
  };

  return (
    <ButtonIconEl>
      <img src={`/images/icon-${icon}.svg`} alt={setAlt()} />
    </ButtonIconEl>
  );
}

const ButtonIconEl = styled.button`
  padding: 6px;
`;
