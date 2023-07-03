import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/hooks/useUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>


);
