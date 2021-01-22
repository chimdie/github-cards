// import React, { useState } from 'react'
import React from 'react'

// function Form (props) {
//     const [userName, setUSer] = useState('')

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const response = await fetch(`https://api.github.com/users/${userName}`)
//         // const data = await response.json()
//         props.onSubmit(response.data)
//         // console.log(data)
//         setUSer('')
//     }
    
//     const handleChange = e => {
//         setUSer( e.target.value)
//     }

//     return (
//         <form className='form' onSubmit={handleSubmit} >
//             {/* <h6>Search Github Profiles</h6> */}
//             <input 
//                 type='text'  
//                 placeholder='Github Profile'
//                 required
//                 value={userName}
//                 name='userName'
//                 onChange={handleChange}
//             />
//             <button>Add Profile</button>
//         </form>
//     )
// }

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    // const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    const resp = await fetch(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card</button>
    	</form>
    );
  }
}



export default Form
