import React from "react";
import WarningBanner from "./WarningBanner";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning}/>
        <button onClick={this.handleOnClick}>
          {this.state.showWarning ? 'Спрятать' : 'Показать'}
        </button>
      </div>
    )
  }
}

export default Page