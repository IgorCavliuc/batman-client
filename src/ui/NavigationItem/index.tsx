import "./stytle.scss";
import { INavigationType } from "../../type";
import { NavLink } from "react-router-dom";

interface PropNavigation {
  item: INavigationType;
}

const NavigationItem = ({ item }: PropNavigation) => {
  const { code, img, value } = item;

  return (
    <li>
      {img ? <img src={img} alt="HomeIco" /> : null}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "batman-store__header-container_navigation-list-item--active"
            : "batman-store__header-container_navigation-list-item"
        }
        to={`/${code ?? ""}`}
      >
        {value}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
