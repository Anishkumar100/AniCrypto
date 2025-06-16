import React from 'react'

export const NewsCard = ({ article }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow-md rounded-xl p-5 transition hover:shadow-lg">
      <img src={article.image_url || 'https://via.placeholder.com/400x200?text=No+Image'}
        alt={article.title}
        className="w-full h-48 object-cover rounded-md mb-3" />
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{article.title}</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">{article.description || "No description available."}</p>

      <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400">
        <span>{new Date(article.pubDate).toLocaleDateString()}</span>
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  )
}
