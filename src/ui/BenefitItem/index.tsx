import "./index.scss";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
const FireIco = require("../img/fire.svg").default;
const ArrowSelectIco = require("../img/arrow-select.svg").default;

interface BenefitItemType {
  name?: string;
  value?: string;
  description?: string;
}
const BenefitItem = ({ name, value, description }: BenefitItemType) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = contentRef?.current;

    if (node) {
      const contentHeight = (active ? node?.scrollHeight + 25 : 90) + "px";

      node.style.height = contentHeight;
    }
  }, [active, contentRef]);

  const activeClass = classNames("batman-store__benefits-item", {
    "batman-store__benefits-item--active": active,
  });
  return (
    <div
      ref={contentRef}
      onClick={() => setActive(!active)}
      className={activeClass}
    >
      <div className="batman-store__benefits-item--title">
        <div className="batman-store__benefits-item--header">
          <div className="batman-store__benefits-item--header-img">
            <img src={FireIco} alt="FireIco" />
          </div>
          <div>
            <p>{name}</p>
            <h4>{value}</h4>
          </div>
        </div>
        <div className="batman-store__benefits-item--title-select">
          <img src={ArrowSelectIco} alt="ArrowSelectIco" />
        </div>
      </div>
      <div className="batman-store__benefits-item--container">
        <p>{description ?? null}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
