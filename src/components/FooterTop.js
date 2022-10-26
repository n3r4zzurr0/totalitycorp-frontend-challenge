import './../scss/FooterTop.scss'

import { ReactComponent as FacebookIcon } from './../images/icons/facebook-icon.svg'
import { ReactComponent as TwitterIcon } from './../images/icons/twitter-icon.svg'
import { ReactComponent as YouTubeIcon } from './../images/icons/youtube-icon.svg'
import { ReactComponent as InstagramIcon } from './../images/icons/instagram-icon.svg'
import { ReactComponent as TwitchIcon } from './../images/icons/twitch-icon.svg'

function FooterTop () {
  return (
    <div className='footer-top'>
      <div className='footer-top_left'>
        <a href='#'>Careers</a>
        <a href='#'>Executives</a>
        <a href='#'>Impact Report</a>
        <a href='#'>Our Commitments</a>
        <a href='#'>Partner With Us</a>
      </div>
      <div className='footer-top_right'>
        <div className='footer-top_right_title'>Join The Conversation</div>
        <div className='footer-top_right_icons'>
          <a href='#'>
            <FacebookIcon />
          </a>
          <a href='#'>
            <TwitterIcon />
          </a>
          <a href='#'>
            <YouTubeIcon />
          </a>
          <a href='#'>
            <InstagramIcon />
          </a>
          <a href='#'>
            <TwitchIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
