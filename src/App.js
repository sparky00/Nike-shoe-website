import './App.css';
import Navbar from './components/navbar';
import VideoBox from './components/video-box';
import AnimatedComponent from './components/animated-component';
import HeaderComponent from './components/header';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Navbar/>
      <VideoBox/>
      <AnimatedComponent/>
    </div>
  );
}

export default App;
