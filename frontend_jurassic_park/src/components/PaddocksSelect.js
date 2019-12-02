import React , {Component} from 'react';

class PaddocksSelect extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.selected) {
      return('');
    }
    const paddockOptions = this.props.paddocks.map((paddock, index) => {
      if (this.props.selected.name !== paddock.name) {
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
