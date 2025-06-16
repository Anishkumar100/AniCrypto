import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CoinCard } from '../components/CoinCard'
import { useFetch } from '../hooks/useFetch'

export const Home = ({ url }) => {
  const globalUrl = `https://api.coingecko.com/api/v3/global`
  const { result, loading } = useFetch(url)

  const [globalData, setGlobalData] = useState({})

  console.log(result)
  // Fetch Global Crypto Stats
  const globalStatFetch = async () => {
    const response = await fetch(globalUrl)
    if (response.ok) {
      const finalres = await response.json()
      setGlobalData(finalres.data)
    } else {
      console.log(`Some Error Occurred`)
    }
  }

  console.log(globalData)


  const [news, setNews] = useState([])

  const trendingNewsFetch = (async () => {
    const response = await fetch(`https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWS_DATA_API_KEY}&q=latest%20crypto%20news`)
    if (response.ok) {
      const finalres = await response.json()
      setNews(finalres)
    } else {
      console.log(`Some Error Occurred`)
    }
  })



  useEffect(() => {
    globalStatFetch()
    trendingNewsFetch()

  }, [])

  console.log(news)



  return (
    <main>
      <br />
      <br />

      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-4xl p-2 font-bold mb-2 text-center">Global Crypto Stats</h1>
        <div id="fullWidthTabContent">
          <div
            className="p-4 bg-white md:p-8 dark:bg-gray-800"
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-2 max-sm:grid-cols-1 xl:grid-cols-3 dark:text-white sm:p-8">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">
                  {globalData?.active_cryptocurrencies ?? 'Loading...'}
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">Active Crypto currencies</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">
                  {globalData?.markets ?? 'Loading...'}
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">Total Exchanges</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">
                  {globalData?.total_market_cap?.usd
                    ? `$${(globalData.total_market_cap.usd / 1e9).toFixed(2)}B`
                    : 'Loading...'}
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">Total Market Cap</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">
                  {globalData?.total_volume?.usd
                    ? `$${(globalData.total_volume.usd / 1e9).toFixed(2)}B`
                    : 'Loading...'}
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">Total 24hr Volume</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl font-extrabold">
                  {globalData?.markets ?? 'Loading...'}
                </dt>
                <dd className="text-gray-500 dark:text-gray-400">Top Markets</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Top 10 Coins */}
      <div className="flex flex-wrap justify-between items-center p-2 mt-20 mb-5">
        <h1 className="text-2xl font-bold text-start">Treding Cryptocurrencies</h1>
        <Link to="/cryptocurrencies">
          <button className="border dark:border-slate-700 border-slate-400 p-2 rounded-lg cursor-pointer dark:bg-indigo-500 bg-indigo-800 text-white">
            Show More
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-around items-center gap-4 p-2">
        {result?.coins?.length > 0 ? (
          result.coins.slice(0, 10).map(({ item }) => (
            <CoinCard key={item.id} id={item.id} coin={item} />
          ))
        ) : (
          <p className="text-white">Loading top coins...</p>
        )}

      </div>



      {/* Trending Crypto News */}
      <div className="flex flex-wrap justify-between items-center p-2 mt-20 mb-5">
        <h1 className="text-2xl font-bold mb-2 text-start">Trending Crypto News</h1>
        <Link to="/news">
          <button className="border dark:border-slate-700 border-slate-400 p-2 rounded-lg cursor-pointer dark:bg-indigo-500 bg-indigo-800 text-white">
            Show More
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 lg:grid-cols-3 gap-6 p-4">
        {news?.results?.length > 0 ? (
          news.results.slice(0, 6).map((article) => (
            <div key={article.article_id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              {article.image_url && (
                <img className="rounded-t-lg w-full h-48 object-cover" src={article.image_url} alt={article.title} />
              )}
              <div className="p-5">
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{article.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {article.description || "Click to read more..."}
                </p>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:underline">
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 3.293a1 1 0 011.414 0L19 8.586a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414-1.414L15.586 10H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">Loading trending news...</p>
        )}
      </div>

    </main>
  )
}
