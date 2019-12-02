import React , {Component} from 'react';

class PaddocksSelect extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    const paddockOptions = this.props.paddocks.map((paddock, index) => {
      return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

    return (
      <select name="paddock">
        {paddockOptions}
      </select>
    )
  }
}

export default PaddocksSelect;
