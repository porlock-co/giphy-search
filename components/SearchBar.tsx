import * as React from "react";
import { Context } from "../providers/GiphyProvider";
import "./SearchBar.module";

const SearchBar: React.FC = () => {
  const { searchGifs } = React.useContext(Context);
  const [query, setQuery] = React.useState("simpsons");

  function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value);
  }

  React.useEffect(() => {
    searchGifs(query);
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          handleQuery(e);
        }}
      />
    </div>
  );
};

export default SearchBar;
