import * as React from "react";
import { LayoutContext, ViewTypes } from "../providers/LayoutProvider";

import "./ViewSwitcher.module";

const ViewSwitcher: React.FC = () => {
  const { layout, changeLayout } = React.useContext(LayoutContext);
  const [type, setType] = React.useState(layout);

  return (
    <div className="switcher-container">
      <label>
        Img
        <input
          type="radio"
          value={ViewTypes.IMG}
          checked={type === ViewTypes.IMG}
          onChange={() => {
            changeLayout(ViewTypes.IMG);
            setType(ViewTypes.IMG);
          }}
        />
      </label>
      <label>
        List
        <input
          type="radio"
          value={ViewTypes.LIST}
          checked={type === ViewTypes.LIST}
          onChange={() => {
            changeLayout(ViewTypes.LIST);
            setType(ViewTypes.LIST);
          }}
        />
      </label>
    </div>
  );
};

export default ViewSwitcher;
