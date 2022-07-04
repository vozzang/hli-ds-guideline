import { useState } from "react";
import Title from "../../../shared/components/title/Title";
import ButtonExamples from "./Examples";
import ButtonGuideline from "./Guideline";
import ButtonSpecs from "./Specs";

function ComponentButton () {
  const [currentTab, setCurrentTab] = useState('1');

  const onCurrentTabChange = (e: any) => {
    e.preventDefault();
    setCurrentTab(e.target.getAttribute('data-target'));
  };

  return (
    <>
      <Title title='Button' updatedAt='21 Dec, 2022' ver='1.0.0' description='Box Button은 Screen 혹은 component내의 주요한 Action을 실행할 때 사용됩니다.' />

      <div className="tabs mb-9">
        <a href="#specs" data-target="1" className={currentTab === '1' ? 'active' : ''} onClick={onCurrentTabChange}>Specs</a>
        <a href="#guideline" data-target="2" className={currentTab === '2' ? 'active' : ''} onClick={onCurrentTabChange}>Guidelines</a>
        <a href="#examples" data-target="3" className={currentTab === '3' ? 'active' : ''} onClick={onCurrentTabChange}>Examples</a>
      </div>

      {currentTab === '1' &&
        <ButtonSpecs />
      }
      {currentTab === '2' &&
        <ButtonGuideline />
      }
      {currentTab === '3' &&
        <ButtonExamples />
      }
    </>
  );
}

export default ComponentButton;