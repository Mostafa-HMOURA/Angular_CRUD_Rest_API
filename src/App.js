import './App.css';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from './components/context';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import About from './components/pages/About';
import PageNotFound from './components/pages/PageNotFound';
import DetContact from './components/contacts/DetContact';


function App() {
  
  return (
    <Provider>
        <div className="App">
          <Navbar title="Contacts list" />
          <Routes>
            <Route path='/' element={<Contacts/>} />
            <Route path='/home' element={<Contacts/>} />
            <Route path='/ContactAdd' element={<AddContact/>} />
            <Route path="/ContactEdit/:id" element={<EditContact/>} />
            <Route path="/ContactDetails/:id" element={<DetContact/>} />
            <Route path='/about/:id' element={<About/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </div>
    </Provider>
    
  );
}

export default App;
