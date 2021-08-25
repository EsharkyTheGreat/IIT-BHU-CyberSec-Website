import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import BlogsRoute from './components/BlogsRoute'
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={BlogsRoute} />
      </Switch>
    </div>
  );
}

export default App;
