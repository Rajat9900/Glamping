import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import {GoogleOAuthProvider} from '@react-oauth/google'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='631612017155-9g8tab51m7s1u71kkv7ocgjk2hqanvrm.apps.googleusercontent.com'>
    <Router>
    <App />
    </Router>
    </GoogleOAuthProvider>
  
  </StrictMode>,
)
