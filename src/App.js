import Dashboard from "./components/Dashboard";
import Themechanger from "./components/Themechanger";

function App() {
  return (
    <>
      <Themechanger />
      <div className='item input__container'>
        <input type='text' placeholder='Search...' />
      </div>
      <Dashboard />
    </>
  );
}

export default App;
