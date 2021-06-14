import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="app">
      <Header className="app__header" />
      <Main className="app__main" />
      <Footer className="app__footer" />
    </div>
  );
}

export default App;
