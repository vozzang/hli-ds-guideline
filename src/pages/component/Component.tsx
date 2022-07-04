import { Outlet } from "react-router-dom";
import Sidebar from '../../layout/sidebar/Sidebar';
import Main from '../../layout/main/Main';

function Component() {
  return (
    <>
      <Sidebar currentNav='component' />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default Component;