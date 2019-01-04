import React from "react";
import { connect } from "react-redux";
import Cells from "./Cells";

class App extends React.Component {
  render() {
    return (
      <div>
        <Cells />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//   };
// };

export default connect(null)(App);
