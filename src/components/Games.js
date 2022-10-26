import './../scss/Games.scss'

import { Thumbs, Logos } from './GamesImages.js'

function Games () {
  return (
    <>
      <h3 className='section-title'>Featured Games</h3>
      <div className='games'>
        {
        Object.keys(Thumbs).map((g, i) => {
          return (
            <a href='#' className='games_card' key={i}>
              <img className='games_card_thumb' src={Thumbs[g]} />
              <div className='games_card_content'>
                <img className='games_card_content_logo' src={Logos[g]} />
                <div className='games_card_content_title'>Official Site</div>
              </div>
            </a>
          )
        })
      }
      </div>
      <a href='#' className='btn-outline-black'>Latest Games</a>
    </>
  )
}

export default Games
