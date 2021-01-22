import React from 'react'
import Card from './Card'

// function CardList (props) {
//     return (
//         <div>
//             {props.profiles.map((profile, id) => <Card key={profile.id} {...profile} />)}
//         </div>
//     )
// }

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

export default CardList
