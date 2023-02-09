
import React, { Component } from 'react'

 class Formdata extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         FirstName: '',
         LastName:'',
         Email:''

      }
    }
handlername =event =>{
    this.setState({
        FirstName: event.target.value
    })
    }

handlersurname=event=>{
    this.setState({
        LastName: event.target.value
    })
}
handleremail=(event)=>{
    this.setState({
        Email: event.target.value
    })
}
handlersubmit=event=>{
   
    alert('Form submitted')
    event.preventDefault()
   
}

    

  render() {
    return (
      <div>
        <h1>Registeration Form</h1>
        <form onSubmit={this.handlersubmit}>
          <div> 
            <table border={1} bgcolor='white' align='center' width={50} height={20}  className='forms' >
            <input type='text' 
            value={this.state.username} 
            placeholder='FirstName'
            onChange={this.handlername} /><br />
            <input type='text'
             value={this.state.surname} 
             placeholder='LastName' 
             onChange={this.handlersurname} /><br />
            <input 
            value={this.state.Email} 
            placeholder='Email'
            name='Email' 
            onChange={this.handleremail}></input><br />
            <button 
            type='submit' 
            className='submitbutton'>register</button>
            </table>
            </div>
        </form>
      </div>
    )
  }
}

export default Formdata

