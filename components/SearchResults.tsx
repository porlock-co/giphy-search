import * as React from "react";
import { GIFObject } from "giphy-api";
import { Context } from "../providers/GiphyProvider";
import { LayoutContext, ViewTypes } from "../providers/LayoutProvider";

import "./SearchResults.module";
import HoverElem from "./HoverElem";

const SearchResults: React.FC = () => {
  const { gifs } = React.useContext(Context);
  const { layout } = React.useContext(LayoutContext);
  const [currentGif, setCurrentGif] = React.useState(null);

  const selectGif = (gif: GIFObject) => {
    if (!currentGif || currentGif.id !== gif.id) {
      setCurrentGif(gif);
    }
  };

  const copyToClipboard = (gif: GIFObject) => {
    navigator.clipboard.writeText(gif.images.original.url);
  };

  const ListView: React.FC = () => {
    return (
      <>
        <HoverElem>
          {currentGif && <img src={currentGif.images.fixed_width_small.webp} />}
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

  const ImgView: React.FC = () => {
    return (
      <>
        <ul className="img-view">
          {gifs.map((gif: GIFObject) => (
            <li
              className={
                currentGif && gif.id === currentGif.id ? "active" : null
              }
              onClick={() => {
                copyToClipboard(gif);
              }}
              style={{
                width: `${gif.images.fixed_height_small.width}px`,
                height: `${gif.images.fixed_height_small.height}px`,
              }}
            >
              <img key={gif.id} src={gif.images.fixed_width_small.webp} />
            </li>
          ))}
        </ul>
      </>
    );
  };

  return <>{layout === ViewTypes.IMG ? <ImgView /> : <ListView />}</>;
};

export default SearchResults;
