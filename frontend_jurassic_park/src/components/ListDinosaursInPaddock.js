import React , {Component} from 'react';
import Request from '../helpers/request'

class ListDinosaursInPaddock extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.dinosaurs.length === 0) {
      return ('')
    }

    const dinoList = this.props.dinosaurs.map((dinosaur, index) => {
      const imgUrl = '/images/'+dinosaur.genus.genus+'.png';
      return <div key={index}>
        <img src={imgUrl}/>
        {dinosaur.genus.genus}-{dinosaur.genus.type}
        </div>
    })

    return (
      <div className="paddock-details">
        <button onClick={this.props.handleClosePaddock}>Close</button>
        {dinoList}
      </div>
    )
  }
}

export default ListDinosaursInPaddock;
