import React, { useState } from 'react'
import CardList from './CardList'
import  Form from './Form'

function App() {
  const [profiles, setProfile] = useState([])
  
  const addNewProfile = (profileData) => {
    setProfile(() => [...profiles, profileData])
  }
  return (
    <div className="App">
      <header className="header">
        <h3>Github Cards</h3>
      </header>
      <main>
        <Form onSubmit={addNewProfile} />
        <CardList profiles={profiles} />
      </main>
    </div>
  );
}

export default App;
