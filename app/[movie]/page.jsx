import Image from "next/image"

export default async function MovieDetail({params}){
const {movie} = params
const imagePath = "https://image.tmdb.org/t/p/original"

const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const res = await data.json()

  return (
    <div>
        <div>
       
<div   className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={imagePath + res.backdrop_path} width={1200} height={800} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{res.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{res.release_date}</p>
        <p className="mb-3 font-normal text-green-700 dark:text-white">Runtime <span classNameName="text-green-500"> {res.runtime} minutes</span> </p>
        <p className="mb-3 font-normal text-green-500 dark:green-500">{res.status} </p>
    </div>
</div>
        </div>
    </div>
  )

}