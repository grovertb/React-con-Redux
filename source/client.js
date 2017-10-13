import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'

import Pages from './pages/containers/Page.jsx'

ReactDOM.hydrate(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById('render-target')
)