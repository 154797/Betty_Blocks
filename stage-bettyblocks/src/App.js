import Navbar from './Navbar';
import Home from './Home';
import Info from './Info';
import Form from './Form';
import Api from './Api';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Info />
      <Home />
      <Form />
      <Api />
      </div>         
    </div>
  );
}

export default App;
