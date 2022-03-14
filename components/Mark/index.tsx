import styled from "styled-components";

interface MarkProps {
  children: string;
  color?: "primary" | "secondary";
}

const Mark = ({ children, color = "primary" }: MarkProps) => {
  return <MarkEl className={color}>{children}</MarkEl>;
};
export default Mark;

const MarkEl = styled.span`
  &.primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.secondary {
    color: #999;
  }
`;
