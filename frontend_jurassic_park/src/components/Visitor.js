import React , {Component} from 'react';

class Visitor extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    }
  }
  componentDidMount() {
    const newVisitor = () => {
      if (!this.props.lockdown) {
        this.setState({count: this.state.count + 1})
      }
    }
    const exitVisitor = () => {
      if (!this.props.lockdown && this.state.count > 0) {
        this.setState({count: this.state.count - 1})
      }
    }
    setInterval(newVisitor, 5000);
    setInterval(exitVisitor, 12000);
  }
  render() {
    return (
      <div className="visitor">
        <div>{this.state.count}</div>
      </div>
    )
  }
}

export default Visitor;
