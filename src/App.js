import './App.css';
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import TaxDisplay from "./Components/TaxDisplay/TaxDisplay";

function App() {
  return (
    <div className="app-view vh-100 vw-100 d-flex justify-content-center align-items-center">
        <div className="app-container w-75 d-flex flex-column justify-content-center align-items-center">
          <Header />
          <Form />
          <TaxDisplay />
        </div>
    </div>
  );
}

export default App;
