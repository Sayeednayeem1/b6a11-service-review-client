
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
