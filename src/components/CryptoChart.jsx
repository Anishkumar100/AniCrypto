import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const timeOptions = [
  { label: '1D', days: 1 },
  { label: '7D', days: 7 },
  { label: '30D', days: 30 },
  {label:'180D', days:180},
  {label:'365D', days:365},
  {label:'max', days:"max"} 
];

export const CryptoChart = ({ coinId = 'bitcoin' }) => {
  const [chartData, setChartData] = useState(null);
  const [days, setDays] = useState(7); // Default to 7 days
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
        );
        const data = await res.json();

        if (!data?.prices) {
          throw new Error('Prices data not found');
        }

        const labels = data.prices.map((p) =>
          new Date(p[0]).toLocaleDateString('en-US', {
            month: 'short',
            year: days >= 180 ? 'numeric' : undefined,
            day: days < 180 ? 'numeric' : undefined,
          })
        );

        const prices = data.prices.map((p) => p[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: `${coinId.toUpperCase()} Price (USD)`,
              data: prices,
              borderColor: '#FFFF00',
              backgroundColor: 'rgba(255,255,0)',
              fill: true,
              tension: 0.3,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching chart data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [coinId, days]);

  return (
    <div className="w-full">
      {loading ? (
        <p className="text-center text-blue-500 animate-pulse">Loading...</p>
      ) : chartData && chartData.labels ? (
        <Line data={chartData} />
      ) : (
        <p className="text-center text-red-500">Chart data not available.</p>
      )}

      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {timeOptions.map((opt) => (
          <button
            key={opt.days}
            onClick={() => setDays(opt.days)}
            className={`px-4 py-2 rounded ${
              days === opt.days ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};
