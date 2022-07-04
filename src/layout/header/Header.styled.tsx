import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  position: sticky;
  z-index: 11;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 88px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  padding: 0 0 0 40px;

  a {
    margin-left: 70px;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    color: #AEB6C0;
    text-decoration: none;

    &.active {
      color: #272B2F;
    }
  }
`;