import * as React from "react";
import axios from "axios";
import { GIFObject } from "giphy-api";

const Context = React.createContext(null);

export enum APIOpTypes {
  SEARCH_GIFS = "searchGifs",
}

const APIProvider: React.FC = (props) => {
  const [gifs, setGifs] = React.useState<GIFObject[] | []>([]);
  const [loading, setLoading] = React.useState(false);

  function performOperation(type: APIOpTypes, payload: any) {
    switch (type) {
      case APIOpTypes.SEARCH_GIFS:
        searchGifs(payload as string);
    }
  }

  function searchGifs(query: string) {
    setLoading(true);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=100&offset=0`
      )
      .then(({ data }) => {
        setGifs(data.data);
        setLoading(false);
      })
      .catch((error) => console.error);
  }

  return (
    <Context.Provider value={{ loading, gifs, performOperation }}>
      {props.children}
    </Context.Provider>
  );
};

export { APIProvider, Context };
