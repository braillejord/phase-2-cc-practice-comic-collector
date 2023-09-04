function ComicForm({addComic}) {
  
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

  )
}

export default ComicForm
