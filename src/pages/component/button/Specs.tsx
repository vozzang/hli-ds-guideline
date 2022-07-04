function ButtonSpecs() {
  return (
    <>
      <h2>Anatomy</h2>
      <div className="img-box">
        <img src={process.env.PUBLIC_URL + '/images/pages/component/button/button1.png'} width='996' alt='' />
      </div>
      <p style={{marginTop: '20px', fontSize: '14px', color: '#333'}}>
        <strong>1. Container : </strong>버튼의 형태를 정의하며, 배경에 적용되는 컬러를 통해 버튼의 타입을 구분할 수 있습니다.
      </p>
      <p style={{marginTop: '10px', fontSize: '14px', color: '#333'}}>
        <strong>2. Label area : </strong>버튼의 내용을 나타내며 텍스트, 아이콘, 텍스트+아이콘 형식으로 적용되며 중앙정렬을 기본으로 합니다.
      </p>
      <div style={{height: '100px', borderBottom: '1px solid #eee', marginBottom: '140px'}}></div>
      <h2>Types</h2>
      <div className="img-box">
        <img src={process.env.PUBLIC_URL + '/images/pages/component/button/button2.png'} width='996' alt='' />
      </div>
      <br /><br /><br />
      <div className="img-box">
        <img src={process.env.PUBLIC_URL + '/images/pages/component/button/button3.png'} width='996' alt='' />
      </div>
    </>
  );
}

export default ButtonSpecs;