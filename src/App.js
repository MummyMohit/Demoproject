import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider
} from "react-router-dom";
import Context from './ContextApi/Context';
import router from './router';
import { Provider } from 'react-redux';
// import store from './reduxstoolkit/CreateStore';
import store  from './reduxstoolkit/CreateStore'

function App() {
  return (
   <>
   <Provider store={store}>
   <Context>
    <RouterProvider router={router} />
    </Context>
    </Provider>
   </>
  );
}

export default App;
