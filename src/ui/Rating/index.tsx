const Rating = ({ value }:any) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star">&#9733;&#189;</span>);
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default Rating