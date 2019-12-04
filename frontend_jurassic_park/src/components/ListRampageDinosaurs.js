import React , {Component} from 'react';
import Request from '../helpers/request';
import PaddocksSelect from './PaddocksSelect'
import EnergyLevel from './EnergyLevel'

class ListRampageDinosaurs extends Component{
  constructor(props) {
    super(props);
  }

  removeElement(elementId) {
    document.getElementById(elementId).remove()
  }

  hideRampageList() {
    document.getElementsByClassName('rampage')[0].classList.remove("show");
  }

  removeElement(elementId) {
    document.getElementById(elementId).remove()
  }

  handleCatch(dinoId) {
    this.props.catchDino(dinoId);
  }

  render() {
    if (!this.props.dinosaursRampage) {
      return ('')
    }

    const dinoList = this.props.dinosaursRampage.map((dinosaur, index) => {
      const imgUrl = '/images/'+dinosaur.genus.genus+'.png';
      return <tr id={dinosaur.id} key={index}>
        <td>
          <img className='dino-image' src={imgUrl}/>
        </td>
        <td>
          {dinosaur.genus.genus}
        </td>
        <td>
          <button onClick={() => this.handleCatch(index)}>Catch</button>
        </td>

      </tr>
    })

    return (
      <div className="windows rampage hide">
        <div className="paddock-details" >
          <div className='close' onClick={() => this.hideRampageList()}></div>
            <div className='dino-list'>
                <table>
                  <tbody>
                    {dinoList}
                  </tbody>
                </table>
            </div>
        </div>
      </div>
    )
  }
}

export default ListRampageDinosaurs;
