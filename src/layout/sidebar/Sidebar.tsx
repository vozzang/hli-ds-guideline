import { NavLink } from "react-router-dom";
import { StyledSidebar } from "./Sidebar.styled";

function Sidebar ({ currentNav }: any) {
  return (
    <StyledSidebar>
      {currentNav === 'component' &&
        <>
          <div className="sidebar-title">
            Component
          </div>
          <NavLink to='/component/button'>Button</NavLink>
          <NavLink to='/component/accordion'>Accordion</NavLink>
          <NavLink to='/component/'>Checkbox</NavLink>
          <NavLink to='/component/'>Radio</NavLink>
          <NavLink to='/component/'>Switch</NavLink>
          <NavLink to='/component/'>Badge</NavLink>
          <NavLink to='/component/'>Divider</NavLink>
          <NavLink to='/component/'>List</NavLink>
          <NavLink to='/component/'>Table</NavLink>
          <NavLink to='/component/'>Filter</NavLink>
          <NavLink to='/component/'>Dialog</NavLink>
          <NavLink to='/component/'>Bottom sheet</NavLink>
        </>
      }
      {currentNav === 'foundation' &&
        <>
          <div className="sidebar-title">
            Foundation
          </div>
          <NavLink to='/foundation/color'>Color</NavLink>
          <NavLink to='/foundation/typography'>Typography</NavLink>
          <NavLink to='/foundation/layout'>Layout</NavLink>
        </>
      }
      {currentNav === 'guideline' &&
        <>
          <div className="sidebar-title">
            UX Guideline
          </div>
          <NavLink to='/guideline/guideline'>guideline</NavLink>
        </>
      }
    </StyledSidebar>
  );
}

export default Sidebar;