import * as React from "react";
import { APIProvider } from "./providers/APIProvider";
import SearchResults from "./components/SearchResults";
import "./App.css";

import SearchBar from "./components/SearchBar";

import ViewSwitcher from "./components/ViewSwitcher";
import { LayoutProvider } from "./providers/LayoutProvider";

const App: React.FC = () => {
  return (
    <>
      <main>
        <APIProvider>
          <LayoutProvider>
            <div className="controls">
              <SearchBar />
              <ViewSwitcher />
            </div>
            <SearchResults />
          </LayoutProvider>
        </APIProvider>
      </main>
    </>
  );
};

export default App;
