// //import logo from './logo.svg';
// import './App.css';
// import Card from './components/Card';
// import Navbar from './components/Navbar';
// import Slider from './components/Slider';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";


// import Product from './components/Product';
// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar title="codebytemart" />
//         <Routes>
//           <Route path="/">
//             <Slider />
//             <Card />
//           </Route>
//           <Route path="/product">
//             <Product />
//           </Route>

//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

//import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Product from './components/Product';

function App() {
  return (
    <>
      <Router>
        <Navbar title="codebytemart" />
        <Routes>
          <Route exact path="/" element={<>
            <Slider />
            <Card />
          </>} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

