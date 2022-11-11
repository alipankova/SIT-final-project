import React, { useState } from 'react'
import Media from 'react-media'
import FooterLinks from '../footer-links/FooterLinks'
import { GiHamburgerMenu } from 'react-icons/gi'

function Footer() {

    const [showFooter, setShowFooter] = useState(false);

    const handleFooterClick = () => {
      setShowFooter(!showFooter);
    }

  return (
    <>
        {showFooter && <FooterLinks />}
        <Media queries={{ small: { minWidth: 480 } }}>
            {matches =>
                matches.small ? (
                    <FooterLinks />
                    ) : (
                    <GiHamburgerMenu className='hamburger-footer' onClick={handleFooterClick} />
                )
            }
        </Media>
    </>
  )
}

export default Footer