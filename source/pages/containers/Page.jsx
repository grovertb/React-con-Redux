import React from 'react';
import {
  Match,
  Miss,
  Link
} from 'react-router';

import Header from '../../shared/components/Header.jsx';
import Home from './Home.jsx';
import User from './User.jsx';
import Post from './Post.jsx';
import Error404 from './Error404.jsx';

import styles from './Page.css';

function Pages() {
  return (
    <main role="application">
      <Header />
      {/* Lista articulo */}
      <Match
        pattern="/"
        exactly
        component={Home}
      />
      {/* Detalle de articulo */}
      <Match
        pattern="/post/:id"
        exactly
        component={Post}
      />
      {/* Perfil de Usuario */}
      <Match
        pattern="/user/:id"
        exactly
        component={User}
      />
      {/* Error 404 */}
      <Miss component={Error404} />
    </main>
  );
}

export default Pages;
