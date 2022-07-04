import styled from '@emotion/styled';

export const StyledSidebar = styled.aside`
  position: fixed;
  top: 88px;
  bottom: 0;
  left: 0;
  width: 260px;
  padding: 20px 0;
  border-right: 1px solid #ddd;
  background-color: #fff;

  .sidebar-title {
    padding: 15px 34px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #C1C7CF;
  }

  a {
    display: block;
    padding: 15px 40px;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    color: #AEB6C0;
    opacity: 0.8;

    &.active {
      color: #272B2F;
      opacity: 1;
    }
  }
`;