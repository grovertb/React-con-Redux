import React from 'react'
import {
	Route,
	Switch,
} from 'react-router-dom';

import Home from './Home.jsx'
import About from './About.jsx'
import Error404 from './Error404.jsx'

function Pages() {
  return (
    <main role="application">
      <Switch>
        {/* List de artículos */}
        <Route
        	path="/"
        	exact
        	component={Home}
        />
        <Route
        	path="/"
        	exact
        	component={About}
        />
        {/* Detalle de artículo */}
        {/* <Route
        	path="/post/:id"
        	exact
        	component={Post}
        /> */}
        {/* Perfil de usuario */}
        {/* <Route
        	path="/user/:id"
        	exact
        	component={Profile}
        /> */}
        {/* Galería de fotos */}
        {/* <Route
        	path="/gallery"
        	exact
        	component={Gallery}
        /> */}
        {/* Error 404 */}
        <Route component={Error404} />
      </Switch>
    </main>
  )
}
