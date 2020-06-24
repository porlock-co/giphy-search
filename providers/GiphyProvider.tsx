import * as React from "react";
import axios from "axios";
import { GIFObject } from "giphy-api";

const Context = React.createContext(null);

// FIXME:
// interface IGiphyProviderContext {

// }

const GiphyProvider: React.FC = (props) => {
  const [gifs, setGifs] = React.useState<GIFObject[] | []>([]);
  function searchGifs(query: string) {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=TB7SjvN0wYTk0DU0nJQTgamoMWqjzk5I&q=${query}&limit=50&offset=0`
      )
      .then(({ data }) => {
        setGifs(data.data);
      })
      .catch((error) => console.error);
  }

  return (
    <Context.Provider value={{ gifs, searchGifs }}>
      {props.children}
    </Context.Provider>
  );
};

export { GiphyProvider, Context };
