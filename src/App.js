import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import MyClass from './Components/MyClass';
import MyFunction from './Components/MyFunction';
import MyEvents from './Components/MyEvents';
import MyForm from './Components/MyForm';
import MyConditional from './Components/MyConditional';
import MyList from './Components/MyList';
import StateShare from './Components/StateShare';
import StateShare1 from './Components/StateShare1';
import Login from './Components/Login';
import Signup from './Components/Signup';
import DynamicRoute from "./Components/DynamicRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello, World!</div>,
  },
  {
    path: "/:value/:id?/:email?",
    element: <DynamicRoute />
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
  },{
    path: "/signup",
    element: <Signup/>
  }
]);

function App() {
  return (
    <div className="App1">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
