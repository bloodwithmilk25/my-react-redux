import React from "react";
import { connect } from "react-redux";
import { fetchCells, editCell } from "../actions/index";

import Form from "./Form";
import "./Cells.css";

class Cells extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchCells();
  }

  occupyCell = cell => {
    this.setState({ [cell.id]: !cell.taken });
    console.log(this.state);
  };

  renderCells() {
    return this.props.cells.map((cell, index) => {
      const taken = cell.taken ? "occupied" : "";
      return (
        <div
          onClick={() => this.occupyCell(cell)}
          key={index}
          className={`box ${taken}`}
        >
          {cell.row}/{cell.column}
        </div>
      );
    });
  }

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <div className="cells">{this.renderCells()}</div>
        <Form onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cells: Object.values(state.cells)
  };
};

export default connect(
  mapStateToProps,
  { fetchCells, editCell }
)(Cells);
