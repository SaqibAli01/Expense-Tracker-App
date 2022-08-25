import './App.css';
import Apps from './component/Apps';
import {GlobalProvider} from './context/GlobalState'




function App() {
  return (
    <>
    <GlobalProvider>
<Apps/>

    </GlobalProvider>

    </>
  );
}

export default App;
