import "./index.scss";
import { BenefitItem } from "../index";

const Benefits = () => {
  const ben = [
    {
      id: 1,
      name: "Build Your First Application",
      value: "Codeigniter",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. ",
    },
    {
      id: 2,
      name: "Build something beautiful",
      value: "Sketch",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. ",
    },
    {
      id: 3,
      name: "Firebase on Android: Cloud Fire",
      value: "Firebase",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. ",
    },
    {
      id: 4,
      name: "Creating Custom Animations",
      value: "Principle",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. ",
    },
    {
      id: 5,
      name: "Build Your First Application",
      value: "Codeigniter",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. ",
    },
    {
      id: 6,
      name: "Firebase on Android: Cloud Fire",
      value: "Firebase",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. ",
    },
    {
      id: 7,
      name: "Creating Custom Animations",
      value: "Principle",
      description:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. ",
    },
  ];

  return (
    <div className="batman-store__benefits-list">
      {ben?.map((item) => {
        return (
          <BenefitItem
            key={item?.id}
            name={item?.name}
            value={item?.value}
            description={item?.description}
          />
        );
      })}
    </div>
  );
};

export default Benefits;
