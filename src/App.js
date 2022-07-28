import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Components/Home';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
