import Title from "../../../shared/components/title/Title";

function FoundationColor() {
  return (
    <>
      <Title title='Color' updatedAt='21 Dec, 2022' ver='1.0.0' description='색은 한화생명 서비스의 브랜드 정체성을 표현하는 그래픽 요소이자, 사용자 인터페이스에서 중요한 시각적이고 기능적인 역할을 수행합니다.' />
      <div className="img-box">
        <img src={process.env.PUBLIC_URL + '/images/pages/foundation/color/color1.png'} width='996' alt='' />
      </div>
    </>
  );
}

export default FoundationColor;