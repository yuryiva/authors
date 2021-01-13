import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";
import Page1 from './components/page1/Page1'
import Page2 from './components/page2/Page2'
import Page3 from './components/page3/Page3'
import Page4 from './components/page4/Page4'

function App() {
  return (
    <div>
      <Header />      

      <Switch>
        <Route exact path="/" render={(props) => <MainSection {...props} />} />
        <Route path="/page1" render={(props) => <Page1 {...props} />} />
        <Route path="/page2" render={(props) => <Page2 {...props} />} />
        <Route path="/page3" render={(props) => <Page3 {...props} />} />
        <Route path="/page4" render={(props) => <Page4 {...props} />} />
        {/* <Route path="/home" render={(props) => <MainSection {...props} />} /> */}
      </Switch>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
