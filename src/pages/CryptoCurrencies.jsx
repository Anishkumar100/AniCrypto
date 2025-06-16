import React, { useState, useMemo } from 'react'
import { CoinCard } from '../components/CoinCard'
import { useFetch } from '../hooks/useFetch'

export const CryptoCurrencies = ({ url }) => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const coinsPerPage = 10

  const { result: coins, loading, error } = useFetch(url)

  // Filter coins based on search input
  const filteredCoins = useMemo(() => {
    return coins?.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toUpperCase().includes(search.toUpperCase())
    ) ?? []
  }, [coins, search])

  // Get only coins for current page
  const paginatedCoins = useMemo(() => {
    const start = (page - 1) * coinsPerPage
    const end = start + coinsPerPage
    return filteredCoins.slice(start, end)
  }, [filteredCoins, page])

  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage)

  return (
    <main>
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-zinc-900 dark:text-white">
        All Cryptocurrencies
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or symbol..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1) // Reset to page 1 on new search
          }}
          className="w-full max-w-md px-4 py-2 rounded-lg border dark:bg-zinc-800 dark:text-white dark:border-zinc-700 focus:outline-none"
        />
      </div>

      {loading && <p className="text-center text-zinc-600 dark:text-zinc-300">Loading...</p>}
      {error && <p className="text-center text-red-500">Error loading data.</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {paginatedCoins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} id={coin.id} />
        ))}
      </div>

      {filteredCoins.length > 0 && (
        <div className="flex justify-center items-center mt-10 space-x-4">
          <button
            className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 disabled:opacity-50"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1}
          >
            Previous
          </button>

          <span className="text-zinc-800 dark:text-white font-semibold text-lg">
            Page {page} of {totalPages}
          </span>

          <button
            className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 disabled:opacity-50"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
    </main>
  )
}
