import http from 'http'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import { IntlProvider } from 'react-intl'

import Pages from './pages/containers/Page.jsx'
import Layout from './pages/components/Layout.jsx'

import messages from './messages.json'

function requestHandler(req, res) {
  const locale = req.headers['accept-language'].indexOf('es') >= 0 ? 'es' : 'en'
  const context = createServerRenderContext();
  let html = renderToString(
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ServerRouter location={req.url} context={context}>
        <Pages />
      </ServerRouter>
    </IntlProvider>
  )

  const result = context.getResult()
  
  res.setHeader('Content-Type','text/html')

  if(result.redirect) {
    res.writeHead(301,{
      Location: result.redirect.pathname
    })
    res.send()
  }

  if(result.missed) {
    res.writeHead(404)
    html = renderToString(
      <IntlProvider locale={locale} messages={messages[locale]}>
        <ServerRouter location={req.url} context={context}>
          <Pages />
        </ServerRouter>
      </IntlProvider>
    )
  }

  res.write(
    renderToStaticMarkup(
      <Layout
        title="Applicación"
        content={html}
      />
    )
  )
  res.end()
}

const server = http.createServer(requestHandler)

server.listen(3000)
