import * as React from "react";
import { debounce } from "lodash";
import { Context } from "../providers/GiphyProvider";
import "./SearchBar.module";

const SearchBar: React.FC = () => {
  const { searchGifs } = React.useContext(Context);
  const [query, setQuery] = React.useState("simpsons");

  function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value);
  }

  const debouncedSearch = React.useRef(debounce(searchGifs, 700));

  React.useEffect(() => {
    debouncedSearch.current(query);
  }, [query]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          handleQuery(e);
        }}
      />
    </>
  );
};

export default SearchBar;
