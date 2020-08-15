import React = require("react");
import "./index.scss";
import { hot } from "react-hot-loader/root";
import { AutocompleteSearchBox } from "../components/autocomplete-search-box";

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={"App"}>
        <AutocompleteSearchBox />
      </div>
    );
  }
}

export default hot(App);
