import { useState } from "react"

function Comic({id, image_url, issue, title, deleteComic}) {
  const [imageDisplayed, setImageDisplayed] = useState(true)
  const [favorited, setFavorited] = useState(false)

  return (
    <div className="comic-item">
      {imageDisplayed 
      ? <img src={image_url} alt={"Comic Issue Image"} onClick={() => setImageDisplayed(!imageDisplayed)} />
      : <div> 
      <h3 onClick={() => setImageDisplayed(!imageDisplayed)}>{title}</h3>
      <h4>{issue}</h4>
      {favorited
      ? <button onClick={() => setFavorited(!favorited)}>Unfavorite</button>
      : <button onClick={() => setFavorited(!favorited)}>Favorite</button>
      }
      <button onClick={() => deleteComic(id)}>Remove</button>
      </div>
      }

    </div>
  )

}

export default Comic
