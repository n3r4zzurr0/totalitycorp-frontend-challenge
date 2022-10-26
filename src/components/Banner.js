import './../scss/Banner.scss'

import BannerWide from './../images/sims-banner-wide.webp'
import BannerLarge from './../images/sims-banner-large.webp'
import BannerNarrow from './../images/sims-banner-narrow.webp'
import Logo from './../images/sims-logo.webp'

function Banner () {
  return (
    <div className='banner'>
      <picture className='banner_background'>
        <source srcSet={BannerNarrow} media='(max-width: 768px)' />
        <source srcSet={BannerLarge} media='(max-width: 1024px)' />
        <img src={BannerWide} />
      </picture>
      <div className='banner_content'>
        <img className='banner_content_logo' src={Logo} />
        <div className='banner_content_text'>
          Create a unique world of Sims that’s an expression of you.
        </div>
        <a href='#' className='btn-solid-white'>
          Play For Free Now
        </a>
      </div>
    </div>
  )
}

export default Banner
