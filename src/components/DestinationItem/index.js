import {Component} from 'react'

import DestinationSearch from '../DestinationSearch'

import './index.css'

class App extends Component {
  state={searchinput:''}
 
 onchangesearchinput=(event)=>{
  this.setstate({searchinput:event.target.value})
 }
  })
  render() {
    const{searchinput}=this.state
    const searchResults=destinationsList.filter((eachitem)=>{
    eachitem.name.includes(searchinput)

    
    return (
      <div className="bg-container">
        <h1>Destination Search</h1>
        <input type="search" onChange={this.onchangesearchinput} />
        <ul>
          <DestinationSearch />
        </ul>
      </div>
    )
  }
}
export default App