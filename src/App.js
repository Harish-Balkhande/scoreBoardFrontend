import './App.css';
import Layout from './Components/Layout';
import {Routes, Route} from "react-router-dom";
import Home from "./Components/User/Home";
import Admin from './Components/Admin/Admin';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Layout >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
