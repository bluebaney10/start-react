import React,{Component} from "react"

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