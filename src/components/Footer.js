import React from 'react'
import SVGIcon from '../components/SVGIcon'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Suivez-Nous{' '}
      <SVGIcon src="/images/facebook.svg" />
      <a href="https://www.facebook.com/sportetcollection/">@sportetcollection</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Tous droits réservés. Créé avec <SVGIcon src="/images/love.svg" /> par{' '}
          <a href="https://www.altertic.com/">@lterTIC</a>.
        </span>
      </div>
    </footer>
  </div>
)
