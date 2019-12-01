import React,{Component} from 'react';
import DinoCreateForm from '../components/DinoCreateForm';
import PaddockCreateForm from '../components/PaddockCreateForm';
import ListPaddock from '../components/ListPaddock'
import Request from '../helpers/request';

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paddocks: [],
    }
    this.handlePostPaddock = this.handlePostPaddock.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/paddocks')
      .then(data => {
        this.setState({
          paddocks: data._embedded.paddocks
        })
      })
  }

  handlePostDinosaur(dinosaur){
    console.log(dinosaur);
    const request= new Request();
    request.post('/api/dinosaurs', dinosaur)
    .then(() =>{
      alert('save');
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

  render() {
    return (
      <div className="menu-container">
        <div className="menu">
          <DinoCreateForm onFormSubmit={this.handlePostDinosaur}/>
          <PaddockCreateForm onFormSubmit={this.handlePostPaddock}/>
        </div>
        <div className="park">
          <ListPaddock paddocks={this.state.paddocks} />
        </div>
      </div>
    )
  }
}

export default MenuContainer;

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
