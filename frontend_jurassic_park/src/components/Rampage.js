import React , {Component} from 'react';
import ListRampageDinosaurs from './ListRampageDinosaurs'

class Rampage extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const randomRampage = () => {
      const randomNumber = Math.floor((Math.random() * 20) + 1);
      //rampage
      if (randomNumber === 1) {
        const dinosaurCount = this.props.dinosaurs.length;
        const dinoRandomIndex = Math.floor((Math.random() * dinosaurCount - 1) + 1);
        const rampageDino = this.props.dinosaurs[dinoRandomIndex];
        if (!this.isDinoInRampageList(rampageDino)) {
            this.props.addDinoToRampageList(rampageDino);
        }
      }
    }
    setInterval(randomRampage, 1000);
  }

  isDinoInRampageList(dino) {
     return this.props.dinosaursRampage.find((dinosaur) => {
        return dinosaur.id == dino.id;
     });
  }
  displayRampageList() {
    document.getElementsByClassName('rampage')[0].classList.add("show");
  }

  catchDino(dinoId) {
    this.props.catchDino(dinoId);
  }

  render() {
    if (!this.props.lockdown) {
      return ('');
    }
    return (
      <div>
        <div onClick={() => this.displayRampageList()} className="alert">
        </div>
        <ListRampageDinosaurs dinosaursRampage = {this.props.dinosaursRampage} catchDino={this.props.catchDino}/>
      </div>
    )
  }
}

export default Rampage;
