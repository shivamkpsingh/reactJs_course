// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';


// lecture 1
// ReactDOM.render(
//     <React.Fragment>

//         <h1> Hello ReactJs how are you</h1>
//         <p>given below the name of 5 netflix movie</p>
//         <ol>
//             <li>harry potter</li>
//             <li>the stranger thing</li>
//             <li>vikings</li>
//             <li>the pirrots of caribean akka captain jacksparrow</li>
//             <li>barmuda triangle</li>
//         </ol>

//     </React.Fragment>
//     ,
//     document.getElementById("root"));


// lecture 2 javaScript jsx
// const flname = "shivam singh"
// ReactDOM.render(
//     <React.Fragment>
//         <h1>My name is {flname}</h1>
//         <p>the sum is {2 + 3}</p>
//     </React.Fragment>,
//     document.getElementById('root')
// );


// lecture 3: tempalte literal in reactjs
//  const fname="shivam"
//  const mname="kumar"
//  const lname="singh"
// ReactDOM.render(
//     <React.Fragment>
//      <h2>My name is {fname} {lname}</h2> 
//      <h2>my name is {`${fname} ${mname}`}</h2>
//     </React.Fragment>,
//     document.getElementById("root")
// );


// lecure 4: challenge
// const fname = "shivam singh"
// const d = new Date()
// const date = d.getDate()
// const month = d.getMonth()
// console.log(month);
// const hour = d.getHours()
// const minute = d.getMinutes()
// const second = d.getSeconds()
// const year = d.getFullYear()
// let offset;
// if (hour > 12) {
//     offset = "PM"
// }
// else {
//     offset = "AM"
// }


// ReactDOM.render(
//     <React.Fragment>
//         <h1> My name is, {fname}</h1>
//         <p>{`${d}`}</p>
//         <p> current date is {`${date}/${month + 1}/${year}`}</p>
//         <p> current time is {`${hour}:${minute}:${second}  ${offset} `}</p>
//     </React.Fragment>,
//     document.getElementById('root')
// );

// lecture 13: jsx Attribute
// const name ="shivam singh"
// ReactDOM.render(
//     <React.Fragment>
//     <h1 contentEditable="true">My name is {name}</h1>,
//     <img src="https://picsum.photos/200/300" alt="photos" />
//     </React.Fragment>,
//     document.getElementById('root')
// );

// lecture 14: css styling

// const heading={
//     color:'#e71b69',
//     textTransform: 'capitalize',
//     textAlign:'center',
//     // textDecoration:'underline',
//     fontFamily: '"Josefin Sans", sans-serif'
// };
// ReactDOM.render(
//  <React.Fragment>
//      <h1 style={heading}> my name is shivam singh</h1>

//  </React.Fragment>,
//  document.getElementById("root")
// );

// lecture 15: challenge 3
// const heading={
//     backgroundColor:'green',
//     display:'flex',
//     justifyContent:'center',
//     alignItem:'center',
//     // width:'100vw',
//     // height:'100vh'
// };
// const currentDate=new Date();
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
// ReactDOM.render(
//     <React.Fragment>
//      <h1> Hello Sir, <span style={greetStyle} > {greeting} </span></h1>
//     </React.Fragment>,
// document.getElementById('root')
// );


// lecture 18: react component 

// import React from 'react';
// import ReactDOM from 'react-dom';
// import MyApp from './MyApp'
// ReactDOM.render(
//     <React.Fragment>
//        <MyApp></MyApp> 
//     </React.Fragment>,
//     document.getElementById('root')
// );


// lecture 19: react component challenge for exercise number 17 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  MyApp from './MyApp';
ReactDOM.render(
    <React.Fragment>
    <MyApp></MyApp>
    </React.Fragment>,
document.getElementById('root')
);