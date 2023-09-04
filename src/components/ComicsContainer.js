import Comic from "./Comic"

function ComicsContainer({comics, deleteComic, favoriteComic, unfavoriteComic}) {

  return (
    <>
      {comics.map((comic) => (
      <Comic 
      key={comic.id}
      {...comic}
      deleteComic={deleteComic}
      favoriteComic={favoriteComic}
      unfavoriteComic={unfavoriteComic}
      />
      ))}
    </>
  )

}

export default ComicsContainer
