import React,{Component} from "react"

class Header extends Component{
    constructor(){
        super()
        this.state={
            name:"Unlike",
            count:0
        }
    }

    render(){
    /*       
    setTimeout(()=>{
        this.setState({name:"Like"})

    },1000)

    setInterval(()=>{
        this.setState({count:this.state.count+1})

    },100)
    */

      return(
        <div>
          <h1>Bluebaney Studio</h1>
          <h2>{this.state.name}</h2>
          <h2>{this.state.count}</h2>
       </div>
      )
    }
  
  }
  export default Header

/*
class Header extends Component{
    
    constructor(props){
        super(props)
        this.handleHeaderClicked=this.handleHeaderClicked.bind(this)
    }
     
    handleHeaderClicked(){
        alert(this.props.currentUser)
        //alert("blue baney")
    }

   render(){
   
    // let currentUser=this.props.currentUser
    let {currentUser,isLoggedIn}=this.props
    currentUser="Logged in as "+currentUser
  
     return(
         
        <div onClick={this.handleHeaderClicked}>Header { isLoggedIn && currentUser}</div>
     )
    }
}

export default Header
*/