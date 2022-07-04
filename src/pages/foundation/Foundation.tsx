import { Outlet } from "react-router-dom";
import Sidebar from '../../layout/sidebar/Sidebar';
import Main from '../../layout/main/Main';

function Foundation() {
  return (
    <>
      <Sidebar currentNav='foundation' />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Foundation;