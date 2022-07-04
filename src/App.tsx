import { Global, css } from '@emotion/react';
import { Routes, Route, Navigate } from "react-router-dom";
import { ResetCss } from './global.style';
import Header from './layout/header/Header';
import Container from './layout/container/Container';
import Foundation from './pages/foundation/Foundation';
import Guideline from './pages/guideline/Guideline';
import Component from './pages/component/Component';
import ComponentButton from './pages/component/button/Index';
import ComponentAccordion from './pages/component/accordion/Accordion';
import FoundationColor from './pages/foundation/color/Color';
import FoundationTypography from './pages/foundation/typography/Typography';
import FoundationLayout from './pages/foundation/layout/Layout';

function App() {
  return (
    <div className="App">
      <Global styles={css`
        ${ResetCss}
    `} />
      <Header />
      <Container>
        <Routes>
          <Route path="/component" element={<Component />}>
            <Route path="button" element={<ComponentButton />} />
            <Route path="Accordion" element={<ComponentAccordion />} />
            <Route path="" element={<Navigate to="/component/button" replace />} />
          </Route>
          <Route path="/foundation" element={<Foundation />}>
            <Route path="color" element={<FoundationColor />} />
            <Route path="typography" element={<FoundationTypography />} />
            <Route path="layout" element={<FoundationLayout />} />
            <Route path="" element={<Navigate to="/foundation/color" replace />} />
          </Route>
          <Route path="/guideline" element={<Guideline />} />
          <Route path="*" element={<Navigate to="/component" replace />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
