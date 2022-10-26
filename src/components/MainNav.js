import './../scss/MainNav.scss'
import { ReactComponent as EALogo } from './../images/ea-logo.svg'
import { ReactComponent as HamburgerIcon } from './../images/icons/hamburger-icon.svg'

function MainNav () {
  return (
    <div className='main-nav'>
      <div className='hamburger-icon'>
        <HamburgerIcon />
      </div>
      <a className='main-nav_logo' href='#'>
        <EALogo />
      </a>
      <div className='main-nav_cover'>
        <div className='main-nav_item'>
          <div className='main-nav_item_label'>
            Games
            <div className='main-nav_item_label_chevron' />
          </div>
          <div className='main-nav_item_content_cover'>
            <div className='main-nav_item_content'>
              <div className='main-nav_item_content_list'>
                <div className='main-nav_item_content_list_title'>BROWSE GAMES</div>
                <a className='main-nav_item_content_list_item' href='#'>Latest Games</a>
                <a className='main-nav_item_content_list_item' href='#'>Coming Soon</a>
                <a className='main-nav_item_content_list_item' href='#'>Free-To-Play</a>
                <a className='main-nav_item_content_list_item' href='#'>EA SPORTS</a>
                <a className='main-nav_item_content_list_item' href='#'>EA Originals</a>
                <a className='main-nav_item_content_list_item' href='#'>Games Library</a>
              </div>
              <div className='main-nav_item_content_list'>
                <div className='main-nav_item_content_list_title'>PLATFORMS</div>
                <a className='main-nav_item_content_list_item' href='#'>PC</a>
                <a className='main-nav_item_content_list_item' href='#'>PlayStation 5</a>
                <a className='main-nav_item_content_list_item' href='#'>Xbox Series X</a>
                <a className='main-nav_item_content_list_item' href='#'>Nintendo Switch</a>
                <a className='main-nav_item_content_list_item' href='#'>Mobile</a>
              </div>
            </div>
          </div>
        </div>
        <div className='main-nav_item'>
          <div className='main-nav_item_label'>
            More Experiences
            <div className='main-nav_item_label_chevron' />
          </div>
          <div className='main-nav_item_content_cover'>
            <div className='main-nav_item_content'>
              <div className='main-nav_item_content_list'>
                <a className='main-nav_item_content_list_item' href='#'>EA Play</a>
                <a className='main-nav_item_content_list_item' href='#'>The EA App</a>
                <a className='main-nav_item_content_list_item' href='#'>Competitive Gaming</a>
                <a className='main-nav_item_content_list_item' href='#'>EA Play Live</a>
              </div>
            </div>
          </div>
        </div>
        <div className='main-nav_item'>
          <div className='main-nav_item_label'>
            About
            <div className='main-nav_item_label_chevron' />
          </div>
          <div className='main-nav_item_content_cover'>
            <div className='main-nav_item_content'>
              <div className='main-nav_item_content_list'>
                <a className='main-nav_item_content_list_item' href='#'>Company</a>
                <a className='main-nav_item_content_list_item' href='#'>EA Studios</a>
                <a className='main-nav_item_content_list_item' href='#'>Careers</a>
                <a className='main-nav_item_content_list_item' href='#'>Our Technology</a>
                <a className='main-nav_item_content_list_item' href='#'>EA Partners</a>
                <a className='main-nav_item_content_list_item' href='#'>News</a>
                <a className='main-nav_item_content_list_item' href='#'>Inside EA</a>
              </div>
            </div>
          </div>
        </div>
        <div className='main-nav_item'>
          <div className='main-nav_item_label'>
            Commitments
            <div className='main-nav_item_label_chevron' />
          </div>
          <div className='main-nav_item_content_cover'>
            <div className='main-nav_item_content'>
              <div className='main-nav_item_content_list'>
                <a className='main-nav_item_content_list_item' href='#'>Our Commitments</a>
                <a className='main-nav_item_content_list_item' href='#'>Positive Play</a>
                <a className='main-nav_item_content_list_item' href='#'>Inclusion & Diversity</a>
                <a className='main-nav_item_content_list_item' href='#'>Social Impact</a>
                <a className='main-nav_item_content_list_item' href='#'>People & Culture</a>
                <a className='main-nav_item_content_list_item' href='#'>Environment</a>
              </div>
            </div>
          </div>
        </div>
        <div className='main-nav_item'>
          <div className='main-nav_item_label'>
            Resources
            <div className='main-nav_item_label_chevron' />
          </div>
          <div className='main-nav_item_content_cover'>
            <div className='main-nav_item_content'>
              <div className='main-nav_item_content_list'>
                <a className='main-nav_item_content_list_item' href='#'>Help</a>
                <a className='main-nav_item_content_list_item' href='#'>Forums</a>
                <a className='main-nav_item_content_list_item' href='#'>Parental Controls</a>
                <a className='main-nav_item_content_list_item' href='#'>Accessibility</a>
                <a className='main-nav_item_content_list_item' href='#'>Press</a>
                <a className='main-nav_item_content_list_item' href='#'>Investors</a>
                <a className='main-nav_item_content_list_item' href='#'>Playtesting</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav
