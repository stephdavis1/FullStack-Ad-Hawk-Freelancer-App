import './App.css';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Jobs from "./components/JobsList/Jobs";

const mockJobs = [
  {title: 'SWE 1 ', company: 'Google'},
  {title: 'SWE 1 ', company: 'Facebook'},
  {title: 'SWE 1 ', company: 'Apple'}
]

function App() {

  return (
    <div className="App">
      <Header />
      <Jobs jobs={mockJobs} />
      <Footer />
    </div>
  );
}

export default App;
