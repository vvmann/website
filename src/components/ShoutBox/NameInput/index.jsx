import React, { Component } from 'react';

const isButtonDisabled = (name) => name === '';

class NameInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.changeName.bind(this);
  }

  changeName(ev) {
    ev.preventDefault();
    if (ev.target.value.length > 20) {
      return;
    }
    this.setState({ name: ev.target.value });
  }

  render() {
    return (
      <form
        action="."
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmitName(this.state.name);
          this.setState({ name: '' });
        }}
        className="sbInputForm">
        <div className="sbTextFieldArea">
          <input
            type="text"
            id="name"
            placeholder="Syötä nimimerkki (max. 20 merkkiä)"
            value={this.state.name}
            onChange={ev => this.changeName(ev)}
            className="sbNameInput"
          />
        </div>
        <div className="sbButtonArea">
          <button
            type="submit"
            value="Send"
            className="sbSubmitButton"
            disabled={isButtonDisabled(this.state.name)}>
            OK
          </button>
        </div>
      </form>
    );
  }
}

export default NameInput;
