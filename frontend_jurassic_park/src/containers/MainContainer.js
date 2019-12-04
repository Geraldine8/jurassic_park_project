import React,{Component} from 'react';
import DinoCreateForm from '../components/DinoCreateForm';
import PaddockCreateForm from '../components/PaddockCreateForm';
import ListPaddock from '../components/ListPaddock'
import Visitor from '../components/Visitor'
import Rampage from '../components/Rampage'
import Request from '../helpers/request';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paddocks: [],
      dinosaurs: [],
      dinosaursRampage: [],
      lockdown: false,
    }
    this.handlePostPaddock = this.handlePostPaddock.bind(this);
    this.handlePostDinosaur = this.handlePostDinosaur.bind(this);
    this.addDinoToRampageList = this.addDinoToRampageList.bind(this);
    this.catchDino = this.catchDino.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/paddocks')
      .then(data => {
        this.setState({
          paddocks: data._embedded.paddocks
        })
      })
    this.updateDinoList();
  }

  addDinoToRampageList(dino) {
    this.setState(prevState => ({
        dinosaursRampage: [dino, ...prevState.dinosaursRampage]
    }))
    document.getElementsByClassName('dino-alert')[0].classList.add("show");

    setTimeout(() => {
      document.getElementsByClassName('dino-alert')[0].classList.remove("show");
    }, 1000);
    this.setState({lockdown: true});
  }

  updateDinoList() {
    const request = new Request();
    request.get('/api/dinosaurs')
      .then(data => {
        this.setState({
          dinosaurs: data._embedded.dinosaurs
        })
      })
  }

  handlePostDinosaur(dinosaur){
    const request= new Request();
    request.post('/api/dinosaurs', dinosaur)
    .then(() => {
        this.updateDinoList()
    })
  }

  handlePostPaddock(paddock){
    const request= new Request();
    request.post('/api/paddocks', paddock)
    .then(() =>{
      this.setState(prevState => ({
          paddocks: [paddock, ...prevState.paddocks]
      }))
    })
  }

  catchDino(dinoId) {
    let rampageDinos = this.state.dinosaursRampage
    rampageDinos.splice(dinoId, 1);
    this.setState({
        dinosaursRampage : rampageDinos
    })
    if (this.state.dinosaursRampage.length == 0) {
      this.setState({
          lockdown : false
      })
    }
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu">
          <DinoCreateForm onFormSubmit={this.handlePostDinosaur} paddocks={this.state.paddocks}/>
          <PaddockCreateForm onFormSubmit={this.handlePostPaddock}/>
        </div>
        <div className="park">
          <Visitor lockdown = {this.state.lockdown}/>
          <ListPaddock paddocks={this.state.paddocks} />
          <Rampage
            dinosaurs={this.state.dinosaurs}
            addDinoToRampageList={this.addDinoToRampageList}
            lockdown = {this.state.lockdown}
            dinosaursRampage = {this.state.dinosaursRampage}
            catchDino = {this.catchDino}
          />
          <div className="dino-alert hide"></div>
        </div>
      </div>
    )
  }
}

export default MainContainer;

// <Router>
//   <Fragment>
//     <Switch>
//       <Route exact path ='/dinosaurs/new' render={()=>{
//         return <PirateCreateForm onFormSubmit={this.handlePost}/>
//       }}/>
//       <Route exact path="/pirates/:id" render={(props) => {
//         const id = props.match.params.id;
//         const pirate = this.findPirateById(id);
//         return <PirateDetail pirate={pirate} onDelete={this.handleDelete}/>
//       }}/>
//       <Route render={(props) => {
//         return <PirateList pirates={this.state.pirates}/>
//       }}/>
//     </Switch>
//   </Fragment>
// </Router>
