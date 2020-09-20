import React from 'react'

function shortenText(text, maxLength) {
  if(text && text.length > maxLength) {
    return text.substr(0, maxLength) + '...';
  }
  return text;
}

function MovieList({ movies }) {
  return (
    <>
     {movies.map(movie => (
      <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top movieImage" src={movie.image} alt={movie.name} /></a>
          <div className="card-body">
            <h5 className="card-title text-info">
             {movie.name}| <small className="text-info movieYear">{movie.releaseYear}</small>
            </h5>
         
            <p className="font-weight-bold">{movie.genre}</p>
            <p className="card-text movieDescription">
              {shortenText(movie.description, 180)}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.rating} &#9733;</small>
          </div>
        </div>
        <style jsx>
          {`
            .movieImage {
              min-height: 200px;
            }

            .movieYear {
              font-size: 10px;
              font-weight: bold;
            }

            .movieDescription {
              text-align: left;
              font-size: 14px;
            }
          `}
        </style>
      </div>
     ))}
    </>
  )
}

export default MovieList
