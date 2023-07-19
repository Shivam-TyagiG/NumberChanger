import React from 'react';
import ReactDom from 'react-dom' ;
import './index.css';
import App from './App';

ReactDom.render(<h1>Hello World</h1>,
              document.getElementById("root"));

// ReactDom.render(
//     <React.Fragment>
//         <h1>
//             Hello My Shivam Tyagi
//         </h1>
//         <p>
//             I will be graduate in 2024 with a degree in Electronics and Communication engineering 
//         </p>
//     </React.Fragment>,
//     document.getElementById("root")
// );


ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
