import styled from '@emotion/styled';

const StyledTitle = styled.div`
  margin-bottom: 55px;

  .header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h1 {
      line-height: 70px;
      font-size: 48px;
      color: #272B2F;
      font-weight: 900;
    }
    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      color: #C1C7CF;
    }
  }
`;

const StyledTitleDescription = styled.p`
  margin-top: 28px;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  letter-spacing: -0.02em;
  color: #485059;
`;

const Title = (props: any) => {
  return (
    <>
      <StyledTitle>
        <div className='header'>
          <h1>{props.title}</h1>
          <p>{props.ver} {props.updatedAt}</p>
        </div>
        {props.description && <StyledTitleDescription>{props.description}</StyledTitleDescription>}
      </StyledTitle>
    </>
  );
}

export default Title;