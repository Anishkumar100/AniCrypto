import { assets } from "../assets/assets";

export const IndividualCoinInfo = ({ data }) => {
  const md = data.market_data;

  return (
    <div className="p-4 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img
          src={data?.image?.large || assets.websiteLogo}
          alt={data.name}
          className="w-16 h-16"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold">
            {data.name} ({data.symbol?.toUpperCase()})
          </h1>
          <p className="text-gray-500">Rank #{data.market_cap_rank}</p>
        </div>
      </div>

      {/* Market Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <p>💰 <strong>Price:</strong> ${md?.current_price?.usd?.toLocaleString()}</p>
          <p>🟢 <strong>24h:</strong> {md?.price_change_percentage_24h?.toFixed(2)}%</p>
          <p><strong>High / Low:</strong> ${md?.high_24h?.usd} / ${md?.low_24h?.usd}</p>
          <p><strong>Market Cap:</strong> ${md?.market_cap?.usd?.toLocaleString()}</p>
        </div>
        <div className="space-y-1">
          <p><strong>Supply:</strong> {md?.circulating_supply?.toLocaleString()} / {md?.max_supply?.toLocaleString() || "N/A"}</p>
          <p><strong>ATH:</strong> ${md?.ath?.usd} on {new Date(md?.ath_date?.usd).toLocaleDateString()}</p>
          <p><strong>ATL:</strong> ${md?.atl?.usd} on {new Date(md?.atl_date?.usd).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold">Description</h2>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html:
              data.description?.en?.slice(0, 400) + "..." ||
              "No description available.",
          }}
        />
      </div>

      {/* Links */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Links</h2>
        <div className="flex flex-wrap gap-3">
          {data.links?.homepage?.[0] && (
            <a
              href={data.links.homepage[0]}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              🌐 Website
            </a>
          )}
          {(data.links?.blockchain_site || []).slice(0, 2).map(
            (url, idx) =>
              url && (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  🔗 Explorer {idx + 1}
                </a>
              )
          )}
        </div>
      </div>

       {/* Markets */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Top Markets</h2>
        <ul className="space-y-1">
          {(data.tickers || []).slice(0, 3).map((t, idx) => (
            <li key={idx}>
              <strong>{t.market?.name}</strong>: {t.base}/{t.target} @ ${t.last}
            </li>
          ))}
        </ul>
      </div>

</div>
  );
};
