import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { sum: '',x:'',y:'' };
      
    }
    
    render() {
      return (
        <form>
            X = <input height="300%" type="text" id="txtX" name="txtX" autoComplete="off" value={this.state.x} onChange={this.myChangeHandlerX}></input><br></br>
            Y = <input height="300%" type="text" id="txtY" name="txtY" autoComplete="off" value={this.state.y} onChange={this.myChangeHandlerY}></input><br></br>
            X + Y = {this.state.sum}
        </form>
        
      );
    }
    
    myChangeHandlerX = (event) => {
        this.setState({x: event.target.value}); 
        
        if(isNaN(event.target.value))
        {
            this.setState({sum: 'x is invalid'});
        }
        else
        {
            if(isNaN(this.state.y))
            {
                this.setState({sum: 'y is invalid'});
            }
            else
            {
                var a = parseInt(event.target.value) + parseInt(this.state.y);
                this.setState({sum:a})
            }
            
        }
        
    }
    myChangeHandlerY = (event) => {
        this.setState({y: event.target.value});  
        if(isNaN(event.target.value))
        {
            this.setState({sum: 'y is invalid'});
        }
        else
        {
            if(isNaN(this.state.x))
            {
                this.setState({sum: 'x is invalid'});
            }
            else
            {
                var a = parseInt(event.target.value) + parseInt(this.state.x);
                this.setState({sum:a})
            }
            
        }
    }
    
  }
  
ReactDOM.render(<MyForm />, document.getElementById('formSum'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

