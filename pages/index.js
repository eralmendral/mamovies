import React from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'
import Footer from '../components/footer'
import { getMovies } from '../actions'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
    </Head>
    <Navbar />
    <div className="homepage">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Sidebar title="Mamovies" />
          </div>
          <div className="col-lg-9">
            <Carousel />
            <div className="row">
              <MovieList movies={getMovies()} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <style jsx>
      {
        `
          .homepage {
            font-family: 'Montserrat', sans-serif;
            padding-top: 80px;
          }
        `
      }
    </style>
  </div>
)

export default Home