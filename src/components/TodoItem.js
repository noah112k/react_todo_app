import React, { Component } from "react";
import PropTypes from "prop-types";
import { NONAME } from "dns";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: this.props.todo.completed ? "#e1e1e1" : "#f4f4f4",
      padding: "20px",
      borderBottom: "1px #000 solid",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
