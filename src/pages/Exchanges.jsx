import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch"; // Adjust this path as needed
import { DynamicTab } from "../hooks/DynamicTab";

export const Exchanges = ({url,title}) => {
  const { result: exchanges, loading, error } = useFetch(url);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  DynamicTab(title)
  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const filteredExchanges = exchanges.filter((exchange) =>
    exchange.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  

  return (
    <main>
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Crypto Exchanges</h1>

      <input
        type="text"
        placeholder="Search exchanges..."
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md shadow focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading?<div></div>:<div></div>}

      <ul className="space-y-4">
        {filteredExchanges.map((exchange, index) => (
          <li
            key={exchange.id}
            className="bg-white dark:bg-gray-900 rounded-md border shadow-md transition-all"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left"
            >
              <div className="flex items-center gap-4">
                <img
                  src={exchange.image}
                  alt={exchange.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-lg">{exchange.name}</span>
              </div>
              <span className="text-sm text-gray-500">
                {expandedIndex === index ? "▲ Hide" : "▼ Details"}
              </span>
            </button>

            {expandedIndex === index && (
              <div className="px-6 pb-4 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Trust Score:</strong> {exchange.trust_score}</p>
                <p><strong>Country:</strong> {exchange.country || "Unknown"}</p>
                <p><strong>Year Established:</strong> {exchange.year_established || "N/A"}</p>
                <p><strong>24h Trade Volume (BTC):</strong> {exchange.trade_volume_24h_btc.toLocaleString()}</p>
                <p><strong>Centralized:</strong> {exchange.centralized ? "Yes" : "No"}</p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={exchange.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {exchange.url}
                  </a>
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </main>
  );
};

