import logo from './logo.svg';
import MediaControlCard from './Components/MediaControlCard';
import Results from './Components/Result';
import './App.css';
import { Result } from 'postcss';
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableContainer } from '@mui/material';
import NameField from './Components/NameField'
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <br/>
        <Route path='/about' />
        <div className = "events-list-page">
        <NameField></NameField>
        <TableContainer sx={{width: "60%", maxWidth: 500, maxHeight: 400}}>
          <TableBody>
            <Results></Results>
          </TableBody>
        </TableContainer>
        </div>
    </div>
    </Router>
  );
}

export default App;
