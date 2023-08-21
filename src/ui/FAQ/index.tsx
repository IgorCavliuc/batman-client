import "./index.scss";
const FAQ = () => {
  const faqItem = [
    {
      id: 1,
      name: "You must have sales in the amount of MDL 50,000.",
      description:
        "Site-ul nostru rapidasig.md are o gamă largă de produse de asigurare: asigurarea locuinței,  asigurare medicală de călătorie, CASCO, RCA, Carte Verde și altele. Datorită asigurării online, puteți vinde asigurări în orice regiune a țării. După încheierea asigurării, primiți automat procentul din vânzare.",
    }
  ];
  return (
    <div className="batman-store__faq--wallpaper">
      {faqItem?.map((item) => {
        return (
          <div key={item?.id} className="batman-store__faq">
            <p>{item?.name}</p>
            <h4>{item?.description}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
