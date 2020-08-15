import * as React from "react";
import "./index.scss";

export type PersonsProps = {
  data: PersonsData;
  highlightText?: string;
  isFocused?: boolean;
  onMouseOver: () => void;
  onMouseDown: () => void;
};

export type PersonsData = {
  id: string;
  name: string;
  items: string[];
  address: string;
  pincode: string;
};

interface State {}

export class PersonsCard extends React.Component<PersonsProps, State> {
  state: State = {};

  constructor(props: PersonsProps) {
    super(props);
  }

  personsCardDivRef = React.createRef() as React.RefObject<HTMLDivElement>;

  render(): React.ReactNode {
    const data = this.props.data;
    return (
      <div
        ref={this.personsCardDivRef}
        onMouseOver={() => {
          this.props.onMouseOver();
        }}
        onMouseDown={(event) => {
          this.props.onMouseDown();
        }}
        className={`persons-card ${this.props.isFocused ? "focused" : ""}`}
      >
        <div className="line id">{this.highLightText(data.id)}</div>
        <div className="line name">{this.highLightText(data.name)}</div>
        {this.getItems()}
        <div className="line address">{this.highLightText(data.address)}</div>
      </div>
    );
  }

  getItems() {
    const highlightText = this.props.highlightText?.toLocaleLowerCase();
    if (highlightText) {
      const found = this.props.data.items.find((item) =>
        item.toLocaleLowerCase().startsWith(highlightText)
      );
      if (found) {
        return (
          <div className="line items">
            found in items: <span className={"high-light-text"}>{found}</span>
          </div>
        );
      }
    }
  }

  highLightText(text: string) {
    const highlightText = this.props.highlightText?.toLocaleLowerCase();
    if (!highlightText) {
      return text;
    } else {
      const index = text.toLocaleLowerCase().startsWith(highlightText);
      if (!index) {
        return text;
      }
      const FoundText = text.substr(0, highlightText.length);
      return [
        <span className={"high-light-text"}>{FoundText}</span>,
        text.substr(FoundText.length, text.length - FoundText.length),
      ];
    }
  }
}
