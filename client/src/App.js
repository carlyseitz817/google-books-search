import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Footer from "./components/Footer"
import "./app.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/saved/:id" component={Saved} />
          <Route component={NoMatch} /> 
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Nav from "./components/Nav";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch"

// const App = () =>
//     <Router>
//         <div>
//             <Nav />
//             <Switch>
//                 <Route exact path="/" component={Books} />
//                 <Route exact path="/books" component={Books} />
//                 <Route exact path="/books:id" component={Detail} />
//                 <Route component={NoMatch} />
//             </Switch>
//         </div>
//     </Router>;


// export default App;
