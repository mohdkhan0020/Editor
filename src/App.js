import React from "react";
import Toolbox from "./Components/Toolbox.jsx";
import Topbar from "./Components/Topbar.jsx";
import SettingsPanel from "./Components/SettingsPanel.jsx";
import Button from "./Components/Button.jsx";
import Text from "./Components/Text.jsx";
import { Container } from "reactstrap";

const App = () => {
  return (
    <div className="container-fluid mt-3">
      <Topbar />
      <div className="row">
        <div className="col-md-9 col-lg-9">
          <div className="car shadow bg-body rounded vh-100">
            <div className="card-body">
              {/* <Button text="Click Me" size="sm" /> */}
              {/* <Text size="small" text="It's me again" /> */}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-lg-3">
          <Toolbox />
          <SettingsPanel />
        </div>
      </div>
      <Container />
    </div>
  );
};

export default App;
