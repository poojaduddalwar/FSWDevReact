//FUNCTION COMPONENT 

import ListItem from "./ListItem";

import {useState} from 'react'

const Content = () => {

    // let counter = 0
    // let and var will not work because react will not register the CHANGE
    //react only registers a state change when you change it using this mysteryFunction.
    const [counter,setCounter] = useState(1) 
    // console.log(counter)
    // console.log(mysteryFunction)

    return (  
        <div className="container">
            <h1>{counter}</h1>
            <button onClick={()=>{
                // console.log('button clicked')
                // console.log(counter)
                // counter = counter + 1
                setCounter(previousValue => {
                    // console.log(previousValue)
                    return previousValue+1;
                })
                console.log(counter)
            }}>ClickMe</button>
        </div>
    );
}

export default Content; 
// useState HOOK ALLOWS US TO HOOK INTO THE FUNCTIONALITY OF ACTUAL STATE
// IN CLASS COMPONENT WE HAD THE ACCESS TO THE STATE VARIABLE WHILE IN FUNCTION COMPONENT WE DON'T SO WE HAD TO USE THIS useState HOOK
//Hooks don’t work inside classes. But you can use them instead of writing classes.


//CLASS COMPONENT 
// import React from 'react';

// class Content extends React.Component {
//     constructor() {
//         super();
//         //HERE STATE IS AN OBJECT IN WHICH WE CAN CREATE MULTIPLE KEY VALUE PAIR AND CAN UPDATE THEM AND REACT WILL REGISTER EACH CHANGE
//         this.state = {
//             count: 0
//         };
//     }
//     render() {
//         return (
//             <div className="container">
//                 {/* <h1>{counter}</h1>
//                 <button onClick={() => {
//                     console.log('button clicked')
//                     console.log(counter)
//                     counter = counter + 1
//                 }}>ClickMe</button> */}
//                 loremipnsansjcnjcnsdjcndncdjcsnjcndj 
//             </div>
//         )
//     }
// }
// export default Content;
