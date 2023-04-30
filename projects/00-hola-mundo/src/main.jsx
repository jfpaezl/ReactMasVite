import React from 'react'
import ReactDOM from 'react-dom/client'
import { Twittercard } from './components/Twittercard'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  /*toca poner los fragment <> </> para poder renderizar varios botones */
  <div className='App'>
    <Twittercard/>
  </div>
  
)
