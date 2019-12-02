import React , {Component} from 'react';
import ListDinosaursInPaddock from './ListDinosaursInPaddock'
import Request from '../helpers/request'

class ListPaddock extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedPaddock: null,
    }
    this.handlePaddockSelected = this.handlePaddockSelected.bind(this);
    this.handleClosePaddock = this.handleClosePaddock.bind(this);
    this.refreshComponent = this.refreshComponent.bind(this);
  }

  handlePaddockSelected(paddock) {
    const request = new Request();
    request.get('/api/paddocks/'+paddock.id)
      .then(data => {
          this.setState({selectedPaddock: data});
      });
  }

  handleClosePaddock() {
    this.setState({selectedPaddock: null});
  }

  refreshComponent() {
    this.setState(this.state)
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
          <ListDinosaursInPaddock
            paddock={this.state.selectedPaddock}
            handleClosePaddock={this.handleClosePaddock}
            paddocksList={this.props.paddocks}
            refreshComponent={this.refreshComponent}
          />
        </div>
    )
  }
}

export default ListPaddock;
