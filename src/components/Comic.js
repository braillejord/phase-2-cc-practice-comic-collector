import { useState } from "react"

function Comic({id, image_url, issue, title, favorited, deleteComic, favoriteComic, unfavoriteComic}) {
  const [imageDisplayed, setImageDisplayed] = useState(true)
  
  return (
    <div className="comic-item">
      {imageDisplayed 
      ? <img src={image_url} alt={"Comic Issue Image"} onClick={() => setImageDisplayed(!imageDisplayed)} />
      : <div> 
      <h3 onClick={() => setImageDisplayed(!imageDisplayed)}>{title}</h3>
      <h4>{issue}</h4>
      {favorited
      ? <button id="unfavoriteButton" onClick={() => unfavoriteComic(id)}>Unfavorite</button>
      : <button id="favoriteButton" onClick={() => favoriteComic(id)}>Favorite</button>
      }
      <button onClick={() => deleteComic(id)}>Remove</button>
      </div>
      }

    </div>
  )

}

export default Comic
