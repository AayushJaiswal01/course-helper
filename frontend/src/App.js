import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import initialDetails from './data/courseinfo';
function App() {
  return (
    <div className="App" style={{color:"#F6F1F1"}}>
     <Header/>
  <Search details={initialDetails}/>

 
  


    </div>
  );
}

export default App;
