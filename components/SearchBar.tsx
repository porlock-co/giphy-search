import * as React from "react";
import { debounce } from "lodash";
import { Context, APIOpTypes } from "../providers/APIProvider";
import "./SearchBar.module";

const SearchBar: React.FC = () => {
  const { performOperation } = React.useContext(Context);
  const [query, setQuery] = React.useState("simpsons");

  function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value);
  }

  const debouncedSearch = React.useRef(debounce(performOperation, 700));

  React.useEffect(() => {
    debouncedSearch.current(APIOpTypes.SEARCH_GIFS, query);
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
