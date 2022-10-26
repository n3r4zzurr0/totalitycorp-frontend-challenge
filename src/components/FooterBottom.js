import './../scss/FooterBottom.scss'

import EACircleLogo from './../images/ea-circle.webp'

function FooterBottom () {
  return (
    <div className='footer-bottom'>
      <div className='footer-bottom_left'>
        <img src={EACircleLogo} />
      </div>
      <div className='footer-bottom_right'>
        <div className='footer-bottom_right_top'>
          <a href='#'>Game Library</a>
          <a href='#'>Subscribe</a>
          <a href='#'>Redeem Code</a>
          <a href='#'>EA app</a>
          <a href='#'>About</a>
          <a href='#'>Accessibility</a>
          <a href='#'>Help</a>
        </div>
        <div className='footer-bottom_right_middle'>
          <a href='#'>Legal & Privacy</a>
          <a href='#'>User Agreement</a>
          <a href='#'>Privacy & Cookie Policy (Your Privacy Rights)</a>
          <a href='#'>Online Service Updates</a>
          <a href='#'>Security</a>
          <a href='#'>YouTube Terms of Service</a>
          <a href='#'>Google Privacy Policy</a>
        </div>
        <div className='footer-bottom_right_bottom'>
          Electronic Arts Home Page Clone - Cloned by <a href='https://n3r4zzurr0.in/'>Utkarsh Verma</a>
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
