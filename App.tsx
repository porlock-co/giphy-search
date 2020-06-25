import * as React from "react";
import { APIProvider } from "./src/providers/APIProvider";
import { LayoutProvider } from "./src/providers/LayoutProvider";
import SearchBar from "./src/components/SearchBar";
import SearchResults from "./src/components/SearchResults";
import ViewSwitcher from "./src/components/ViewSwitcher";

import "./App.css";

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
