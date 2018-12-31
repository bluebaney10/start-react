import React, {Component} from "react"

class Footer extends Component{
    render(){
      return(
        <div>
          <h3>copyRight 2018</h3>
       </div>
      )
    }
    
  }
  export default Footer



/*
class Footer extends Component{

    constructor(props){
        super(props)
        this.state={
            time:0
        }
        setInterval(() => {
            this.setState({
                time:this.state.time+1
            })
            
        }, 1000)
    }
    

    render(){
        let{time}=this.state
        return(
            <div>Footer Online Time {time}</div>
        )
    }
}

export default Footer
*/