import React from 'react'

import Logo from '../../assets/Logo-unycos.svg'
import IconFacebook from '../../assets/facebook-outline.png'
import IconInstagram from '../../assets/instagram-icon.png'
import IconTwitter from '../../assets/twitter-icon.png'
import IconYoutube from '../../assets/youtube.png'

import './Footer.css'

export function Footer() {
  return (
    <footer>
      <div className="row center-xs border">
        <div className="col-lg-4 icons">
          <a href="https://www.facebook.com/somosUnycos"><img src={IconFacebook}/></a>
          <a href="https://www.instagram.com/unycos_com"><img src={IconInstagram}/></a>
          <a href="https://twitter.com/unycos_com"><img src={IconTwitter}/></a>
          <a href="https://www.youtube.com/channel/UCVZBWcLu24xdANe9zpPn2FQ"><img src={IconYoutube}/></a>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3"><img src={Logo} alt='logotipo da unycos' /></div>
        <div className="col-sm-6 center-xs terms">
          <a href="/terminos" className="text-terms"><ul>Terminos y condiciones</ul></a>
          <a href="/privacidad" className="text-terms"><ul>Política de privacidad</ul></a>
          <a href="/aviso" className="text-terms"><ul>Aviso legal</ul></a>
        </div>
        <div className="col-lg-3 end-xs">USD ($) / EUR (€)</div>
      </div>
    </footer>
  )
}

