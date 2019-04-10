import React from "react";
import { Link } from "../../routes";

class Persons extends React.Component {
  render() {
    return (
      <div>
        <h1>People</h1>
        <Link route="people/csss">Chris Coyier</Link>
      </div>
    );
  }
}

export default Persons;
