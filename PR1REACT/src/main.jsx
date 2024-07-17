import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/Navbar.jsx'
import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

ReactDOM.createRoot(document.getElementById('seg')).render(
    <Navbar />
)
