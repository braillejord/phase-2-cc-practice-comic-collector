import { useState } from "react"

function Comic({id, image_url, issue, title, deleteComic}) {
  const [imageDisplayed, setImageDisplayed] = useState(true) 

  function handleClick() {

  }

  return (
    <div className="comic-item">
      {imageDisplayed 
      ? <img src={image_url} alt={"Comic Issue Image"} onClick={() => setImageDisplayed(!imageDisplayed)} />
      : <div> 
      <h3 onClick={() => setImageDisplayed(!imageDisplayed)}>{title}</h3>
      <h4>{issue}</h4>
      <button onClick={() => deleteComic(id)}>Remove</button>
      </div>
      }

    </div>
  )

}

export default Comic
