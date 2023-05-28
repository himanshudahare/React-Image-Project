import './App.css';
import { ImageProvider } from './Components/ImageContext';
import ImageSearch from './Components/ImageSearch';

function App() {
  return (
    <div className="App">
     <ImageProvider>
      <ImageSearch />
     </ImageProvider>
    </div>
  );
}

export default App;
