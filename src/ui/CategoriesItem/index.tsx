import "./index.scss";
import { Link } from "react-router-dom";

interface CategoriesItemType {
  data: {
    _id: string;
    name: string;
    description: string;
    code: string;
  };
}
const CategoriesItem = ({ data }: CategoriesItemType) => {
  const { name, description, code } = data;
  return (
    <div className="batman-store--categories-item">
      <div className="batman-store--categories-item_container">
        <h1>{name}</h1>
        <h2 title={description}>{description}</h2>
      </div>
      <div className="batman-store--categories-item_img">
        <svg
          width="12"
          height="32"
          viewBox="0 0 12 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L11 16L1 31"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CategoriesItem;
