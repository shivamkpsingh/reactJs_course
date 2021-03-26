// import React from 'react';
// import Heading from './Heading';
// import Para from './Para';
// import List from './List';

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

import React from 'react';


function MyApp(){
    const currentDate=new Date();
const hour=currentDate.getHours();
let greeting;
const greetStyle={};
if(hour>=1 && hour<12)  {
    greeting='Good Morning';
    greetStyle.color='green'
}
else if(hour>=12 && hour<20){
    greeting='Good Evening'
    greetStyle.color='yellow'

}
else{
    greeting='Good Night'
    greetStyle.color='pink'

}

return (
    <h1> Hello Sir, <span style={greetStyle} > {greeting} </span></h1>
)
}


export default MyApp;