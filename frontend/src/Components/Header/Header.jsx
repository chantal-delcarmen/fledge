import "./Header.scss";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <section className="header">
      <h2 className="header__logo">Fledge</h2>
      <Menu color="white"/>
    </section>
  );
};

export default Header;
