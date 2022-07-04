import { Outlet } from "react-router-dom";
import Sidebar from '../../layout/sidebar/Sidebar';
import Main from '../../layout/main/Main';

function Guideline() {
  return (
    <>
      <Sidebar currentNav='guideline' />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Guideline;