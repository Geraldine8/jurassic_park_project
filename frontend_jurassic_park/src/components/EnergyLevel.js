import React , {Component} from 'react';

class EnergyLevel extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="low-energy">
        <div className="high-energy" style={{width: this.props.level + '%'}}>
          {this.props.level[this.props.dinoId]}
        </div>
      </div>
    )
  }
}

export default EnergyLevel;
