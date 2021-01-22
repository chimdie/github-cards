// import React, { useState } from 'react'
import React from 'react'
import CardList from './CardList'
import  Form from './Form'

// function App() {
//   const [profiles, setProfile] = useState([])
  
//   const addNewProfile = profileData => {
//     setProfile(...profiles, profileData)
//   }
//   return (
//     <div className="App">
//       <header className="header">
//         <h3>Github Cards</h3>
//       </header>
//       <main>
//         <Form onSubmit={addNewProfile} />
//         <CardList profiles={profiles} />
//       </main>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

export default App;
