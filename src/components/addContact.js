import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios'


class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handelChange=(event)=>{
        this.setState({ [event.target.name]:event.target.value})
       
    }
    add=()=>{
        this.props.addReducer({...this.state,id:Math.random()*100000+''})
        //(this.state)=> state hia de type objet li hia name ,phone et email.......spread operator  ({...this.state})
    }



    addContact=()=>
    {
      axios.post('/add-contact',{...this.state})
       .then(()=>this.props.addReducer({...this.state}))
       .catch((err)=>alert(err)) 
    }
    render() {
        return (
            <div className='addcontact-container'>
                <h1> Add contact</h1>
                
                <div className='input'>
                <h4>Name:</h4>
                <input type='text'name='name' onChange={this.handelChange}/>
                </div>
                <div className='input' name='phone'onChange={this.handelChange}>
                <h4>Phone:</h4>
                <input type='text'/>
                </div>
                <div className='input'name='mail' onChange={this.handelChange}>
                <h4>Email:</h4>
                <input type='email'/>
                </div>
                <Link to='./contacts'>
                   <button onClick={this.addContact}> Add Contact</button>
                </Link>
                
              
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
return{
    addReducer:newcontact=>{
        dispatch({
             type:'ADD_CONTACT',
             newcontact
        })
    }
}
}
export default connect(null,mapDispatchToProps) (AddContact);