import { useState } from "react"

function ComicForm({addComic}) {
  const [showForm, setShowForm] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const newComic = {
      title: e.target.title.value,
      issue: e.target.issue.value,
      image_url: e.target.image_url.value
    }
    addComic(newComic)
    e.target.reset()
  }
  
  return (
    <>
    {showForm
    ? <>
    <form className="comic-form" onSubmit={(e) => handleSubmit(e)}>
      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" />

      <label htmlFor="title">Title: </label>
      <input name="title" />

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" />

      {/* <label htmlFor="description">Description: </label>
      <input name="description" /> */}

      <input type="submit" value="Add Issue" />
    </form>
    <button onClick={() => setShowForm(!showForm)}>Hide Form</button>
    </>
    : <button onClick={() => setShowForm(!showForm)}>Add New Issue</button>
    }
    </>
  )
}

export default ComicForm
