import './App.css';
import router from './router/router';
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <RouterProvider
    router={router}
    future={{ v7_startTransition: true }}
  />
  )
}

export default App;
