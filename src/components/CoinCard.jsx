import React from 'react'

export const CoinCard = () => {
  return (

    <div class="max-w-sm w-full bg-white dark:bg-gray-800  rounded-2xl shadow-md p-6 hover:shadow-lg dark:hover:shadow-zinc-800 transition duration-300">

          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-4">
              <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin Logo" class="w-10 h-10 rounded-full" />
              <div>
                <h2 class="text-lg font-semibold text-zinc-800 dark:text-white">Bitcoin</h2>
         
              </div>
            </div>
            
          </div>

    
          <div class="space-y-3">
            <div>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Price</p>
              <p class="text-xl font-bold text-zinc-900 dark:text-white">$67,123.45</p>
            </div>
            <div>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">Market Cap</p>
              <p class="text-lg font-semibold text-zinc-800 dark:text-white">$1.2 Trillion</p>
            </div>
          </div>


          <button class="mt-6 w-full py-2 px-4 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 transition">
            View Details
          </button>
        </div>


  )
}

