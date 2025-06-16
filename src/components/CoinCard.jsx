import React from 'react'
import { Link } from 'react-router-dom'
export const CoinCard = ({ coin, id }) => {
  console.log(coin)
  return (
    <div className="max-w-sm w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg dark:hover:shadow-zinc-800 transition duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
           <img
            src={coin.image || coin.thumb || coin.small}
            alt={`${coin.name} Logo`}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-lg font-semibold text-zinc-800 dark:text-white">
              {coin.name}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase">
              {coin.symbol}
            </p>


          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Market Cap Rank</p>
          <p className="text-xl font-bold text-zinc-900 dark:text-white">
            #{coin.market_cap_rank ?? 'N/A'}
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase mt-5">
            Price btc: ${coin.price_btc}
          </p>
        </div>
      </div>

<Link to={`/cryptodetails/${id}`}>
      <button className="mt-6 w-full py-2 px-4 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition">
        View Details
      </button>
</Link>
    </div>
  )
}
