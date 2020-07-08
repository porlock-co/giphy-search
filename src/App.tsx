import * as React from "react";
import { APIProvider } from "./providers/APIProvider";
import { LayoutProvider } from "./providers/LayoutProvider";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import ViewSwitcher from "./components/ViewSwitcher";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <main>
        <APIProvider>
          <LayoutProvider>
            <div className="controls">
              <SearchBar />
              {/* <ViewSwitcher /> */}
            </div>
            <SearchResults />
          </LayoutProvider>
        </APIProvider>
      </main>
    </>
  );
};

export default App;
