import React from 'react';

// function Greet(){

//     return <h1>Hello Roy !</h1>
// }

//Rewrite the above function using  ES6 arrow function
const Greet = (props) => {
    console.log(props)
 return  (
    <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1> 
        {props.children}
    </div>
 )
}
export default Greet;