import React from 'react'
import { Link } from 'react-router-dom'
import { CoinCard } from '../components/CoinCard'

export const Home = () => {
  return (
    <main>

      <br /><br />

      <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h1 className=' text-4xl p-2 font-bold mb-2 text-center '>Global Crypto Stats</h1>

        <div id="fullWidthTabContent" >
          <div class="  p-4 bg-white md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-2 max-sm:grid-cols-1 xl:grid-cols-3 dark:text-white sm:p-8">
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Total Crypto currencies</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Total Exchanges</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                <dd class="text-gray-500 dark:text-gray-400">Total Market Cap</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Total 24hr Volume</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Top Markets</dd>
              </div>

            </dl>
          </div>


        </div>
      </div>

      <div className=' flex flex-wrap justify-between items-center p-2 mt-10 mb-5 '>
        <h1 className=' text-2xl font-bold mb-2 mt-10 text-start '>Top 10 Cryptos In The World</h1>

        <Link to="/cryptocurrencies">
          <button className=' border dark:border-slate-700 border-slate-400 p-2 rounded-lg cursor-pointer dark:bg-indigo-500 bg-indigo-800 text-white'>Show More</button>
        </Link>
      </div>
      <div className='flex flex-wrap justify-around items-center gap-4 p-2 '>
        <CoinCard/>
       
      </div>


      <div className=' flex flex-wrap justify-between items-center p-2  mt-10 mb-5 '>
        <h1 className=' text-2xl font-bold mb-2 mt-10 text-start '>Newest Crypto Currencies</h1>

        <Link to="/cryptocurrencies">
          <button className=' border dark:border-slate-700 border-slate-400 p-2 rounded-lg cursor-pointer dark:bg-indigo-500 bg-indigo-800 text-white'>Show More</button>
        </Link>
      </div>

       <div className='flex flex-wrap justify-around items-center gap-4 p-2 '>
        <CoinCard/>
      
      </div>



    </main>
  )
}
