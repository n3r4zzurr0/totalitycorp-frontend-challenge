import './../scss/BannerBottom.scss'

import BannerWide from './../images/ea-play-banner-wide.webp'
import BannerNarrow from './../images/ea-play-banner-narrow.webp'
import { ReactComponent as Logo } from './../images/ea-play-logo.svg'

function BannerBottom () {
  return (
    <div className='banner-bottom'>
      <picture className='banner-bottom_background'>
        <source srcSet={BannerNarrow} media='(max-width: 768px)' />
        <img src={BannerWide} />
      </picture>
      <div className='banner-bottom_content'>
        <div className='banner-bottom_content_logo'>
          <Logo />
        </div>
        <div className='banner-bottom_content_text'>
          Don’t just get the game. Get more from your game. Unlock exclusive rewards, members-only content, and a library of top titles.
        </div>
        <a href='#' className='btn-outline-white'>
          Join Now
        </a>
      </div>
    </div>
  )
}

export default BannerBottom
