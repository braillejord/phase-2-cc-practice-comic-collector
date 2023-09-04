import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import { useState, useEffect } from "react"

const baseUrl = "http://localhost:8004"
const comicUrl = baseUrl + "/comics"

function App() {
  const [comics, setComics] = useState([])

  useEffect(() => {
    fetch(comicUrl)
    .then(r => r.json())
    .then(data => setComics(data))
  }, []) 

  function addComic(newComic) {
    fetch(comicUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }, body: JSON.stringify(newComic)
    })
    .then(r => r.json())
    .then(newComic => setComics([...comics, newComic]))
  }

  return (
    <div className="App">
      <h1>Comicbook Collector</h1>
      <div className="grid with-sidebar">
        <div className="flex-container">
          <ComicsContainer 
          comics={comics}/>
        </div>
        <div className="sidebar">
          <ComicForm 
          addComic={addComic}/>
        </div>
      </div>
    </div>
  );
}

export default App;
