import Header from "./Header";
import Menu from "./Menu";

import "./style/index.css";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <section className="rapidmd_cabinet__content">{children}</section>
    </>
  );
};

export default Layout;
