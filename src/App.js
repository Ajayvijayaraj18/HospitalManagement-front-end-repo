import './App.css';
import Login from'./components/Login.jsx';
import Update from  './components/Update.jsx';
import DeleteRecord from './components/DeleteRecord';
import ShowData from './components/ShowData.jsx';


function App() {
  return (
    <div>

      <Login/>
      <Update/>
      <DeleteRecord/>
      <ShowData/>

    </div>
  );
}

export default App;
