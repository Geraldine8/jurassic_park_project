import React , {Component} from 'react';
import Request from '../helpers/request';
import PaddocksSelect from './PaddocksSelect'
import EnergyLevel from './EnergyLevel'

class ListDinosaursInPaddock extends Component{
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    if (this.props.paddock === null) {
      return ('')
    }
    if (!this.props.paddock._embedded){
      return ("Empty")//TODO
    }

    const dinoList = this.props.paddock._embedded.dinosaurs.map((dinosaur, index) => {
      const imgUrl = '/images/'+dinosaur.genus.genus+'.png';
      const typeImage = '/images/'+dinosaur.genus.type+'.png';
      return <tr key={index}>
        <td>
          <img className='dino-image' src={imgUrl}/>
        </td>
        <td>
          {dinosaur.genus.genus}
        </td>
        <td>
          <img className='dino-type' src={typeImage}/>
        </td>
        <td>
          <PaddocksSelect paddocks={this.props.paddocksList}/>
          <button>-></button>
        </td>
        <td>
          <EnergyLevel level={dinosaur.stomachLevel}/>
        </td>
        <td>
          <button></button>
        </td>

      </tr>
    })

    return (
      <div className="paddock-details">
        <div className='close' onClick={this.props.handleClosePaddock}></div>
        {this.props.paddock.name}
        <div className='dino-list'>
          <form onSubmit={this.handleFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Genus</th>
                  <th>Type</th>
                  <th>Transfer</th>
                  <th>Energy</th>
                  <th>Feed</th>
                </tr>
              </thead>
              <tbody>
                {dinoList}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    )
  }
}

export default ListDinosaursInPaddock;
