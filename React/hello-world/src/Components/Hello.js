import React from 'react';

const Hello = () =>{
    // return (
    //     <div>
    //     <h2>Hello World!!!</h2>
    //     </div>
    // )

    return React.createElement('div', {id: 'Hello',className:'dummy'},
     React.createElement( 'h2',null, 'Hello World!!!'));
}

export default Hello;