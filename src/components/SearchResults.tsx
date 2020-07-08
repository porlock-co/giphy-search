import * as React from "react";
import { GIFObject } from "giphy-api";
import { useTransition, animated, config } from "react-spring";
import { Context } from "../providers/APIProvider";
import { LayoutContext, ViewTypes } from "../providers/LayoutProvider";
import HoverElem from "./HoverElem";
import ImgPreview from "./ImgPreview";

import "./SearchResults.module";

type ImgViewProps = {
  gifs: GIFObject[];
  currentGif: GIFObject;
  copyToClipboard(gif: GIFObject): void;
};

const ImgView: React.FC<ImgViewProps> = ({
  gifs,
  currentGif,
  copyToClipboard,
}) => {
  return (
    <>
      <ul className="img-view">
        {gifs.map((gif: GIFObject) => (
          <li
            key={gif.id}
            className={currentGif && gif.id === currentGif.id ? "active" : null}
            onClick={() => {
              copyToClipboard(gif);
            }}
            style={{
              width: `${gif.images.fixed_height_small.width}px`,
              height: `${gif.images.fixed_height_small.height}px`,
            }}
          >
            <ImgPreview gif={gif} />
          </li>
        ))}
      </ul>
    </>
  );
};

const SearchResults: React.FC = () => {
  const { gifs, loading } = React.useContext(Context);
  const { layout } = React.useContext(LayoutContext);
  const [currentGif, setCurrentGif] = React.useState(null);
  const [link, setLink] = React.useState(null);
  const transitions = useTransition(link, null, {
    config: config.gentle,
    from: { transform: "translateY(300px)" },
    enter: { transform: "translateY(0px)" },
    leave: { transform: "translateY(300px)" },
  });

  React.useEffect(() => {
    navigator.clipboard.writeText(link);
  }, [link]);

  const selectGif = (gif: GIFObject) => {
    if (!currentGif || currentGif.id !== gif.id) {
      setCurrentGif(gif);
    }
  };

  const copyToClipboard = (gif: GIFObject) => {
    setLink(gif.images.original.url);
    setTimeout(() => {
      setLink(null);
    }, 3000);
  };

  if (loading) {
    return <h2 className="loading-content">loding gifs</h2>;
  }

  const ListView: React.FC = () => {
    return (
      <>
        <HoverElem>
          {currentGif && <img src={currentGif.images.fixed_width.url} />}
        </HoverElem>
        <ul className="list-view">
          {gifs.map((gif: GIFObject) => (
            <li
              key={gif.id}
              onMouseMove={() => {
                selectGif(gif);
              }}
              onClick={() => {
                copyToClipboard(gif);
              }}
            >
              {gif.title}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      {transitions.map(({ item, props, key }) => {
        return (
          item && (
            <animated.h3 key={key} style={props} className="link-copy-status">
              GIF Copied
            </animated.h3>
          )
        );
      })}

      {layout === ViewTypes.IMG ? (
        <ImgView
          gifs={gifs}
          currentGif={currentGif}
          copyToClipboard={copyToClipboard}
        />
      ) : (
        <ListView />
      )}
    </>
  );
};

export default SearchResults;
