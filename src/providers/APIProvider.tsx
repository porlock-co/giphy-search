import * as React from "react";
import axios from "axios";
import { GIFObject } from "giphy-api";

const Context = React.createContext(null);

export enum APIOpTypes {
  SEARCH_GIFS = "searchGifs",
}

const APIProvider: React.FC = (props) => {
  const [gifs, setGifs] = React.useState<GIFObject[] | []>([]);

  function performOperation(type: APIOpTypes, payload: any) {
    switch (type) {
      case APIOpTypes.SEARCH_GIFS:
        searchGifs(payload as string);
    }
  }

  function searchGifs(query: string) {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=TB7SjvN0wYTk0DU0nJQTgamoMWqjzk5I&q=${query}&limit=100&offset=0`
      )
      .then(({ data }) => {
        setGifs(data.data);
      })
      .catch((error) => console.error);
  }

  return (
    <Context.Provider value={{ gifs, performOperation }}>
      {props.children}
    </Context.Provider>
  );
};

export { APIProvider, Context };
