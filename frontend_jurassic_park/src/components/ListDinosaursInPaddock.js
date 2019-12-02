import React , {Component} from 'react';
import Request from '../helpers/request';
import PaddocksSelect from './PaddocksSelect'
import EnergyLevel from './EnergyLevel'

class ListDinosaursInPaddock extends Component{
  constructor(props) {
    super(props);
  }

  removeElement(elementId) {
    document.getElementById(elementId).remove()
  }

  handleTransfer(event) {
    event.preventDefault();
    const request = new Request();
    const dinoId = event.target.dinoId.value;
    request.putUri('/api/dinosaurs/'+dinoId+'/paddock', event.target.paddock.value)
      .then(data => {
        document.getElementById(dinoId).remove()
      }, dinoId)
  }

  feedDino(dinosaur) {
    const request = new Request();
    const payload = {
      stomachLevel: +dinosaur.stomachLevel + 5
    }
    request.putJson('/api/dinosaurs/'+dinosaur.id, payload)
      .then(data => {
        this.props.refreshComponent()
      })
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
      return <tr id={dinosaur.id} key={index}>
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
          <form onSubmit={this.handleTransfer}>
            <PaddocksSelect paddocks={this.props.paddocksList} selected={this.props.paddock}/>
            <input name='dinoId' type='hidden' value={dinosaur.id}/>
            <button type='submit'>-></button>
          </form>
        </td>
        <td>
          <EnergyLevel level={dinosaur.stomachLevel}/>
        </td>
        <td>
          <button onClick={() => this.feedDino(dinosaur)}></button>
        </td>

      </tr>
    })

    return (
      <div className="paddock-details">
        <div className='close' onClick={this.props.handleClosePaddock}></div>
        {this.props.paddock.name}
          <div className='dino-list'>
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
          </div>
      </div>
    )
  }
}

export default ListDinosaursInPaddock;
