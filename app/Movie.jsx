import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Movie = ({title, poster_path , release_date , id }) => {
    const imagePath = "https://image.tmdb.org/t/p/original"
    
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={`${id}`} className="block relative h-48 rounded overflow-hidden">
          <Image alt="movie" width={800} height={800} className="object-cover object-center w-full h-full block" src={imagePath + poster_path} />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{title}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{release_date}</h2>
          <p className="mt-1">{release_date}</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Movie
