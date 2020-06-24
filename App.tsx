import * as React from "react";
import { GiphyProvider } from "./providers/GiphyProvider";
import SearchResults from "./components/SearchResults";
import "./App.css";

import SearchBar from "./components/SearchBar";
import HoverElem from "./components/HoverElem";
import ViewSwitcher from "./components/ViewSwitcher";
import { LayoutProvider } from "./providers/LayoutProvider";

const App: React.FC = () => {
  return (
    <>
      <main>
        <GiphyProvider>
          <LayoutProvider>
            {/* <HoverElem /> */}
            <div className="controls">
              <div>
                <SearchBar />
                <ViewSwitcher />
              </div>
            </div>
            <SearchResults />
          </LayoutProvider>
        </GiphyProvider>
      </main>
    </>
  );
};

export default App;
