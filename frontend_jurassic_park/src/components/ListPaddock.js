import React , {Component} from 'react';
import Request from '../helpers/request'

class ListPaddock extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    console.log('PUPU');
    const paddocksList = this.props.paddocks.map((paddock, index) => {
      return <div className="paddock" key={index}></div>
    })
    return (
      <div className='list-paddocks'>
        {paddocksList}
      </div>
    )
  }
}

export default ListPaddock;
