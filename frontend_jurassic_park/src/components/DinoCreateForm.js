import React , {Component} from 'react';
import Request from '../helpers/request'
import PaddocksSelect from './PaddocksSelect'

class DinoCreateForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      genera: [],
      stomachLevel: 50,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const request = new Request();
    request.get('/api/genera')
      .then(data => {
        this.setState({
          genera: data._embedded.genera
        })
      })
  }

  handleGenus(event) {
    this.setState({genus: event.target.value})
  }

  handleStomachLEvel(event) {
    this.setState({stomachLevel: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const newDinosaur = {
      genus: event.target.genera.value,
      paddock: event.target.paddock.value,
    }

    this.props.onFormSubmit(newDinosaur);
  }

  render() {
    if(this.state.genera.length === 0) {
      return <p>Loading...</p>
    }
    const generaOptions = this.state.genera.map((genus, index) => {
      return <option key={index} value={genus._links.self.href}>{genus.genus}</option>
    })

    return (
      <div className="create-dino-form">
        <h3>Clone Dinosaur</h3>
        <form clasName="dino-create-form" onSubmit={this.handleSubmit}>
          <select name="genera">
            {generaOptions}
          </select>
          <PaddocksSelect paddocks={this.props.paddocks}/>
          <button type="submit">Clone</button>
        </form>
      </div>
    )
  }
}

export default DinoCreateForm;
