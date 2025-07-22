
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {AuthProvider} from "./context/AuthContext.jsx";


createRoot(document.getElementById('root')).render(
  <div>
          <App />
  </div>,
)
