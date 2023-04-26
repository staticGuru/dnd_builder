
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateNewTemplate from './Components/CreateNewTemplate';
import './Components/style.css';
import DndProvider from './context/DndProvider';

function App() {
  return (
    <>
    <DndProvider>
      <CreateNewTemplate />
      </DndProvider>
    </>
  );
}
export default App;
