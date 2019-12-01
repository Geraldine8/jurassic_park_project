import React , {Component} from 'react';

class PaddockCreateForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const newPaddock = {
      name: this.state.name,
    }

    this.props.onFormSubmit(newPaddock);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name"
          name="Name"
          onChange={this.handleName}
          value={this.state.name} />

          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
}

export default PaddockCreateForm;
