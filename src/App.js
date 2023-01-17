import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import AppRouter from './routes';
import PageTransitionLoader from './components/PageTransitionLoader';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<PageTransitionLoader />}>
          <Router>
            <AppRouter />
          </Router>
        </Suspense>
    </div>
  );
}

export default App;
