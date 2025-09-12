import React from 'react'
import {
BrowserRouter as Router,
Route,
Routes,
Navigate,
BrowserRouter
} from 'react-router-dom'
import MainPage from './Pages/MainPage.jsx'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/Portfolio" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
        <Toaster 
      toastOptions={{
        className: '',
        style: {
          border: '1px solid #713200',
          padding: '10px',
          fontSize: '13px',
          color: '#fff',
          backgroundColor: '#713200',
        },
      }}
    />
    </div>
    
  )
}

export default App