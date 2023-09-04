import Comic from "./Comic"

function ComicsContainer({comics, deleteComic}) {

  return (
    <>
      {comics.map((comic) => (
      <Comic 
      key={comic.id}
      {...comic}
      deleteComic={deleteComic}/>
      ))}
    </>
  )

}

export default ComicsContainer
