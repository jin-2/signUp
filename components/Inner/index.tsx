import styled from "styled-components";

interface InnerProps {
  children: React.ReactNode;
  paddingTop?: string;
}

export default function Inner({ children, paddingTop }: InnerProps) {
  return <InnerEl paddingTop={paddingTop}>{children}</InnerEl>;
}

interface InnerElProps {
  paddingTop?: string;
}

const InnerEl = styled.div<InnerElProps>`
  padding: 18px;
  padding-top: ${(props) => props.paddingTop || "18px"};
`;
