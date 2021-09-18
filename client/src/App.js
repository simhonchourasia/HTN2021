import logo from './logo.svg';
import MediaControlCard from './Components/MediaControlCard';
import Results from './Components/Result';
import './App.css';
import { Result } from 'postcss';
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableContainer } from '@mui/material';
import NameField from './Components/NameField'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <NameField></NameField>
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
