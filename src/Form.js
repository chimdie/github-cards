import React, { useState } from 'react'

function Form (props) {
    const [userName, setUSer] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data = await response.json()
        props.onSubmit(data)
        setUSer('')
    }
    
    const handleChange = e => {
        setUSer( e.target.value)
    }

    return (
        <form className='form' onSubmit={handleSubmit} >
            {/* <h6>Search Github Profiles</h6> */}
            <input 
                type='text'  
                placeholder='Github Profile'
                required
                value={userName}
                name='userName'
                onChange={handleChange}
            />
            <button>Add Profile</button>
        </form>
    )
}


export default Form
