import styled from "styled-components";

interface MarkProps {
  children: string;
  color?: "primary" | "secondary";
}

export default function Mark({ children, color = "primary" }: MarkProps) {
  return <MarkEl className={color}>{children}</MarkEl>;
}

const MarkEl = styled.span`
  &.primary {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.secondary {
    color: #999;
  }
`;
