import React = require("react");
import "./index.scss";
import { hot } from "react-hot-loader/root";

interface State {}

export class App extends React.Component<any, State> {
  state: State = {};

  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className={"App"}></div>;
  }
}

export default hot(App);
