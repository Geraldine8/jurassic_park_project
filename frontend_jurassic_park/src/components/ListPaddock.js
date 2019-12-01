import React , {Component} from 'react';
import ListDinosaursInPaddock from './ListDinosaursInPaddock'
import Request from '../helpers/request'

class ListPaddock extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dinosaurs: [],
    }
    this.handlePaddockSelected = this.handlePaddockSelected.bind(this);
    this.handleClosePaddock = this.handleClosePaddock.bind(this);
  }

  handlePaddockSelected(paddock) {
    const request = new Request();
    request.get('/api/paddocks/'+paddock.id)
      .then(data => {
          this.setState({dinosaurs: data._embedded.dinosaurs});
      });
  }

  handleClosePaddock() {
    this.setState({dinosaurs: []});
  }

  render() {
    const paddocksList = this.props.paddocks.map((paddock, index) => {
      return <div className="paddock" onClick={() => this.handlePaddockSelected(paddock)} key={index}></div>
    })
    return (
        <div>
          <div className='list-paddocks'>
            {paddocksList}
          </div>
          <ListDinosaursInPaddock dinosaurs={this.state.dinosaurs} handleClosePaddock={this.handleClosePaddock} />

        </div>
    )
  }
}

export default ListPaddock;
