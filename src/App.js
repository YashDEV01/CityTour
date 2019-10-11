import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Components/Navbar/Navbar";
import Tourlist from "./Components/Tourlist";

import './App.scss';

class App extends Component{
  render(){
      return(
        <React.Fragment>
          <Navbar/>
          <Tourlist />
        </React.Fragment>
      );
}
}
export default App;