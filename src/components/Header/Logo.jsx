import { MyLogo } from "./Header.style";
import LogoIcon from "./LogoIcon";

const Logo = () => {
  return (
    <MyLogo>
      <a href="/" rel="noreferrer">
        <LogoIcon />
        <span>Ragab M.</span>
      </a>
    </MyLogo>
  );
};
export default Logo;
