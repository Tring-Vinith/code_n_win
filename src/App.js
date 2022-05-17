import './App.css';
import Sidebar from'./resources/Sidebar'
import Dashboard from './resources/Dashboard';
import CurrentProjects from './resources/CurrentProjects';
import Headerbar from './resources/Headerbar';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='appBody'>
      <Headerbar/>
      <Dashboard/>
      <CurrentProjects/>
      </div>
      
    </div>
  );
}

export default App;
