import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {HomePage} from './pages/homepage/homepage.component';
function App() {
  return (
<div>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      </Routes>
    </BrowserRouter>

</div>

  );
}

export default App;
