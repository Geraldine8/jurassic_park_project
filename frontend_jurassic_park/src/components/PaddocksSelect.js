import React , {Component} from 'react';

class PaddocksSelect extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const paddockOptions = this.props.paddocks.map((paddock, index) => {
      if (paddock._links && (!this.props.selected || this.props.selected.name !== paddock.name)) {
        return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
      }
    })

    return (
      <select name="paddock">
        {paddockOptions}
      </select>
    )
  }
}

export default PaddocksSelect;
