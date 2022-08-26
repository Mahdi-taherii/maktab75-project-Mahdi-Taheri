import './App.css';
import { CommonContextProvider } from './contexts';
import HandleRoutes from './routes/index.routes';


function App() {
  return (
    <div className="App">
      <CommonContextProvider>
      <HandleRoutes/>
     </CommonContextProvider>
    </div>
  );
}

export default App;
