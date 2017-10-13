import http from 'http'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import StaticRouter from 'react-router-dom/StaticRouter'

import Pages from './pages/containers/Page.jsx'
import Layout from './components/Layout.jsx'


function requestHandler(req, res) {
  const context = {};

  let html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Pages />
    </StaticRouter>
  )

  // const result = context.getResult()
  
  res.setHeader('Content-Type', 'text/html')

  if(context.redirect) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  }

  if(context.missed) {
    res.writeHead(404)
    html = renderToString(
      <StaticRouter location={req.url} context={context}>
        <Pages />
      </StaticRouter>
    )
  }

  res.write(
    renderToStaticMarkup(
      <Layout 
        title="Platzi React" 
        content={html} 
      />
    )
  )

  // res.write(html)
  res.end()
}

http.createServer(requestHandler).listen(3000, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('Server Listening')
  }
})
