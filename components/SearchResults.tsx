import * as React from "react";
import { GIFObject } from "giphy-api";
import { Context } from "../providers/GiphyProvider";
import { LayoutContext, ViewTypes } from "../providers/LayoutProvider";
import ViewSwitcher from "./ViewSwitcher";
import "./SearchResults.module";

const SearchResults: React.FC = () => {
  const { gifs } = React.useContext(Context);
  const { layout, setLayout } = React.useContext(LayoutContext);

  const ListView: React.FC = () => {
    return (
      <ul className="list-view">
        {gifs.map((gif: GIFObject) => (
          <li key={gif.id}>{gif.title}</li>
        ))}
      </ul>
    );
  };

  const ImgView: React.FC = () => {
    return (
      <ul className="img-view">
        {gifs.map((gif: GIFObject) => (
          <li
            style={{
              width: `${gif.images.fixed_height_small.width}px`,
              height: `${gif.images.fixed_height_small.height}px`,
            }}
          >
            <img key={gif.id} src={gif.images.fixed_width_small.webp} />
          </li>
        ))}
      </ul>
    );
  };

  // function handleSwitch(type: ViewTypes) {
  //   setType(type);
  // }

  return <>{layout === ViewTypes.IMG ? <ImgView /> : <ListView />}</>;
};

export default SearchResults;
