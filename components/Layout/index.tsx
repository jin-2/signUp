import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <HeaderEl>
        <h1>개인회원 가입</h1>
      </HeaderEl>

      <LayoutEl>{children}</LayoutEl>

      <FooterEl>
        <p>© JOBKOREA LLC.</p>
      </FooterEl>
    </div>
  );
}

const LayoutEl = styled.main`
  padding: 18px;
`;

const HeaderEl = styled.header`
  padding: 14px 18px;
  border-bottom: 1px solid #e5e7ea;
  color: #30353a;
  font-size: 16px;
  font-weight: 700;
`;

const FooterEl = styled.footer`
  padding: 20px 5px;
  border-top: 1px solid #d0d0d0;
  background-color: #f2f2f2;
  color: #ababab;
  font-size: 11.2px;
  text-align: center;
`;
