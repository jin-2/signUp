import styled from "styled-components";

interface ButtonProps {
  children: string;
  disabled?: boolean;
}

export default function Button({ children, disabled = false }: ButtonProps) {
  return <ButtonEl disabled={disabled}>{children}</ButtonEl>;
}

const ButtonEl = styled.button`
  width: 100%;
  height: 46px;
  line-height: 46px;
  border: 1px solid #e55c2e;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  border-radius: 0;

  &:disabled {
    pointer-events: none;
    color: #999;
    border-color: #ced3d7;
    background-color: #e5e7ea;
    border-radius: 1px;
  }
`;
