import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

  const when = 'now';
const reactElements = React.createElement(
  'a',
  {href: 'https://rb.gy/zmiiav' , target: 'blanck'},
  'click here to watch react lectures ',
  when
)

ReactDOM.createRoot(document.getElementById('root')).render(
 reactElements
)
