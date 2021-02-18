import './App.css';
import AppContainer from "./containers/AppContainer";
import HomePage from './components/homepage/HomePage';
import Header from './components/headers/Header';
import Search from './components/search/Search';

function App() {
  return (
    <>
      <HomePage />
      <Header />
      <Search />

      {/* <AppContainer /> */}
    </>
  );
}

export default App;
