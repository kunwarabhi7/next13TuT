

export default async function Home() {
const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  console.log(res.results)

  return (
    <div className="text-4xl">
      {res.results.map((movie)=>(
        <div>{movie.title}</div>
      ))}
    </div>
  )
}
