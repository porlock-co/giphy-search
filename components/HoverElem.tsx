import * as React from "react";

const HoverElem: React.FC = () => {
  const [pos, setPos] = React.useState([0, 0]);

  React.useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPos([e.clientX, e.clientY]);
    });
  }, []);
  return (
    <span
      style={{
        position: "absolute",
        left: pos[0],
        top: pos[1],
        zIndex: 4,
        color: "white",
      }}
    >
      foo
    </span>
  );
};

export default HoverElem;
