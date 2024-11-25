import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider
} from "react-router-dom";
import Context from './ContextApi/Context';
import router from './router';
function App() {
  return (
   <>
   <Context>
    <RouterProvider router={router} />
    </Context>
   </>
  );
}

export default App;
