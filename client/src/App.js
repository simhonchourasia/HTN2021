import logo from './logo.svg';
import MediaControlCard from './Components/MediaControlCard';
import Results from './Components/Result';
import './App.css';
import { Result } from 'postcss';
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableContainer } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TableContainer sx={{width: "60%", maxWidth: 500, maxHeight: 400}}>
          <TableBody>
            <Results></Results>
          </TableBody>
        </TableContainer>
      </header>
    </div>
  );
}

export default App;
