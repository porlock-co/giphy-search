import * as React from "react";

const HoverElem: React.FC = (props) => {
  const [pos, setPos] = React.useState([0, 0]);

  const handleMouseMove = (e: MouseEvent) => {
    setPos([e.clientX, e.clientY]);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <span
      style={{
        position: "absolute",
        left: pos[0] + 50,
        top: pos[1],
        zIndex: 4,
        color: "white",
      }}
    >
      {props.children}
    </span>
  );
};

export default HoverElem;
