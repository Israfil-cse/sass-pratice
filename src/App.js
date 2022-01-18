import './App.css';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import Navber from './Components/Navber/Navber';



function App() {
  return (
    <div className="App">
      <Navber></Navber>
      <MainPage></MainPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
