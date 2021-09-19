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
import background1 from './Assets/Capture1.PNG';
import background2 from './Assets/Capture2.PNG';
import background3 from './Assets/Capture3.PNG';
import zIndex from '@mui/material/styles/zIndex';
import ArtistField from './Components/ArtistField';

function App() {
  var background = background1;
  const x = Math.floor(Math.random()*3);
  if (x == 1) {
    background = background2;
  }
  else if (x == 2) {
    background = background3;
  }
  return (
    <Router>
      <div style={{
        backgroundImage: 'url('+background+')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        filter: 'blur(2px)'
      }}>
        
      </div>
    <div className="App" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 2,
      height: '100%',
      width: '100%'
      }}>
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
