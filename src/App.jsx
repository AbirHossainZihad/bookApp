import './index.css'
import { AppProvider } from './context/Context';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter basename="/bookApp">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;