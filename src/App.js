import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

//create component
class App extends Component{
  constructor(){
    super()
    this.state={
      data:[],
      message:"UnLike",
      type:""
    }
    this.changeMessage=this.changeMessage.bind(this);
    this.insertData=this.insertData.bind(this);
  }

changeMessage(){
 this.setState({message:"Like"});
}

insertData(){
  var item="React";
  var myArray=this.state.data;
  myArray.push(item)

  this.setState({data:myArray});

}
onChange(event){
  this.setState({type:event.target.value})

}

  render(){
    return(
      <div>
        <h1>Bluebaney</h1>
        <h1><a href="/header">Header</a></h1>
        <h1><a href="/content">Content</a></h1>
        <h1><a href="/footer">Footer</a></h1>


        <Footer/>
        <Header/>
        <Content title="Course React" name="Blue Baney" price="Free"/>
        <Footer/>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>{this.state.message}</button>
        <br/>
        <h1>{this.state.data}</h1>
        <button onClick={this.insertData}>Insert</button>
        <br/> <br/>
        <input type="text" onChange={this.onChange.bind(this)}/>
        <h1>{this.state.type}</h1>


     </div>
    )
  }


}

export default App;




/*
example 1

import Header from './Header'
import Footer from './Footer'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      currentTime:0
    }
    this.handleFooterClicked=this.handleFooterClicked.bind(this)

  }

  handleFooterClicked(time){
    this.setState({currentTime:time})
  }

  render() {
    let{currentTime}=this.state
    return (
      <div>
      <Header currentUser="Buncha" isLoggedIn={true}/>
      
      <div>currentTime = {currentTime}</div>
     <Footer onTimerClick={this.handleFooterClicked} />
     </div>
    );
  }
}

export default App;
*/
