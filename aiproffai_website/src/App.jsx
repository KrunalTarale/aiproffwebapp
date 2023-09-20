import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import TopLinks from './components/Toplinks/toplinks';
import Trailer from './components/Trailer/Trailer';
import Trending from './components/TrendingNews/Trending';
import Touch from './components/Touch/Touch';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Foot/Foot';
import Article from './components/Article/Article';
import SearchSite from './components/Search/SearchSite';
import Contact from './components/contact/Contact';
import Assessment from './components/Assisment/Assisment';  
import AssessmentStarted from './components/AssessmentStarted/AssessmentStarted';
import UpdateSubscriber from './components/UpdateSubscriber/UpdateSubscriber';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/article" element={<Article />} />
        <Route path="/search" element={<SearchSite />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessmentStarted/:id" element={<AssessmentStarted />} />
        <Route path="/updatesubscriber/:id" element={<UpdateSubscriber />} />
        <Route
          path="/"
          element={
            <>
              <div>
                <div className="App flex flex-col">
                  <div className="h-1/5 flex flex-col z-10">
                    <TopLinks className="h-1/2" />
                    <Navbar className="h-1/2" />
                  </div>
                  
                  <Carousel />
                  <Trending className="h-2/5 z-99" />
                </div>
                <div>
                  <Trailer />
                </div>
                <div>
                  <Touch />
                </div>
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
