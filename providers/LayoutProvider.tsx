import * as React from "react";

export enum ViewTypes {
  LIST = "list",
  IMG = "img",
}

const LayoutContext = React.createContext(null);
const LayoutProvider: React.FC = (props) => {
  const [layout, setLayout] = React.useState<ViewTypes>(ViewTypes.LIST);

  const changeLayout = (type: ViewTypes) => {
    setLayout(type);
  };

  return (
    <LayoutContext.Provider value={{ layout, changeLayout }}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export { LayoutProvider, LayoutContext };
