import { useState } from "react";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Africa from "./pages/Africa";
import America from "./pages/America";
import Asia from "./pages/Asia";
import Oceania from "./pages/Oceania";
import Europa from "./pages/Europa";

import { Router, Route, IndexRoute, browserHistory } from "react-router-3";

import "./styles.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/africa" component={Africa} />
        <Route path="/america" component={America} />
        <Route path="/asia" component={Asia} />
        <Route path="/oceania" component={Oceania} />
        <Route path="/europa" component={Europa} />
      </Route>
    </Router>
  );
}

export default App;
