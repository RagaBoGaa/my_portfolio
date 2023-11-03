/* eslint-disable react/prop-types */
import { MobileMenu, MobileNavList } from "./Header.style";

// eslint-disable-next-line react/prop-types
const MobilesMenu = ({ isOpen, setOpen, navLinks }) => {
  return (
    <MobileMenu className={isOpen ? `opened` : ""}>
      <MobileNavList onClick={() => setOpen((curr) => !curr)}>
        {navLinks.map((li) => (
          <li key={li}>
            <a href={`#${li}`}>{li}</a>
          </li>
        ))}
      </MobileNavList>
    </MobileMenu>
  );
};
export default MobilesMenu;
