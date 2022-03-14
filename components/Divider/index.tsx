import styled from "styled-components";

interface DividerProps {
  marginTop?: string;
  marginBottom?: string;
}

const Divider = ({ marginTop, marginBottom }: DividerProps) => {
  return <DividerEl marginTop={marginTop} marginBottom={marginBottom} />;
};
export default Divider;

const DividerEl = styled.hr<DividerProps>`
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-top: ${(props) => props.marginTop || "16px"};
  margin-bottom: ${(props) => props.marginBottom || "16px"};
  border: 0;
  border-top: 1px solid #e5e7ea;
`;
