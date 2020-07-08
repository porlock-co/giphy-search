import * as React from "react";
import { animated, useTransition, useSpring, config } from "react-spring";
import { GIFObject } from "giphy-api";

import "./ImgPreview.module";

type ImgPreviewProps = {
  gif: GIFObject;
};

const ImgPreview: React.FC<ImgPreviewProps> = ({ gif }) => {
  const [isLoaded, setLoaded] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  const setOpacity = () => {
    if (isHover) {
      return 1;
    } else return isLoaded ? 0.65 : 0;
  };

  const props = useSpring({
    opacity: setOpacity(),
    transform: isLoaded ? "translateY(0px)" : "translateY(-10px)",
    config: config.gentle,
  });

  return (
    <animated.img
      style={props}
      onLoad={() => {
        setLoaded(true);
      }}
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      key={gif.id}
      src={gif.images.fixed_height.url}
    />
  );
};

export default ImgPreview;
