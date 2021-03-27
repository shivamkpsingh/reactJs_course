// import React from 'react';
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';

// import React from "react";

// function MyApp() {
//     return (
//         <>
//             <Heading></Heading>
//             <Para></Para>
//             <List></List>
//         </>
//     );
// }

// export default MyApp;


// for lecture 19 

// import React from 'react';


// function MyApp(){
//     const currentDate=new Date();
// const hour=currentDate.getHours();
// let greeting;
// const greetStyle={};
// if(hour>=1 && hour<12)  {
//     greeting='Good Morning';
//     greetStyle.color='green'
// }
// else if(hour>=12 && hour<20){
//     greeting='Good Evening'
//     greetStyle.color='yellow'

// }
// else{
//     greeting='Good Night'
//     greetStyle.color='pink'

// }

// return (
//     <h1> Hello Sir, <span style={greetStyle} > {greeting} </span></h1>
// )
// }


// export default MyApp;


// for lecture 20 import and export 
// import React from 'react'
// const l1 = 'pyhon';
// const l2 = 'javascript';
// function myName() {
//     return 'shivam singh'
// }
// function myNames() {
//     return 'pankaj'
// }
// export default l1;
// export { l2, myName,myNames };

// fro lecture 21 calculator challenge 

function add(a,b){
    let c=a+b;
    return c;
}
function sub(a,b){
    let c=a-b;
    return c;
}
function mul(a,b){
    let c=a*b;
    return c;
}
function div(a,b){
    let c=a/b;
    c=c.toFixed(2)
    return c;
}
export default add;
export {sub,mul,div};