import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> {/* opakowanie komponentu App w specjalny element React.StrictMode, który uruchamia tryb rygorystyczny - React dokładniej pilnuje kodu */}
    <App />
  </React.StrictMode>
);
