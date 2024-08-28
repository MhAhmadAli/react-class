import './App.css';
import MyClass from './Components/MyClass';
import MyFunction from './Components/MyFunction';
import MyEvents from './Components/MyEvents';
import MyForm from './Components/MyForm';
import MyConditional from './Components/MyConditional';
import MyList from './Components/MyList';
import StateShare from './Components/StateShare';
import StateShare1 from './Components/StateShare1';

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello, World!</div>,
  },
  {
    path: "/myclass",
    element: <MyClass />,
  },{
    path: "/myfunction",
    element: <MyFunction />,
  },{
    path: "/myevents",
    element: <MyEvents />,
  },{
    path: "/myform",
    element: <MyForm />,
  },{
    path: "/myconditional",
    element: <MyConditional />,
  },{
    path: "/mylist",
    element: <MyList />,
  },{
    path: "/stateshare",
    element: <StateShare />,
  },{
    path: "/stateshare1",
    element: <StateShare1 />,
  },{
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App1">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
