import './App.css';
import Navbar from './components/navbar';
import TaskController from './components/TaskController';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <TaskController/>
    </div>
  );
}

export default App;
