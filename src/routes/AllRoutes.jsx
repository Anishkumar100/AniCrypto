
import {Route,Routes} from "react-router-dom"
import {Home,CryptoCurrencies,CryptoDetails,News,Exchanges, PageNotFound} from "../pages/indexPages"

export const AllRoutes = () => {
  return (
    <div className=" mt-18  bg-slate-200  dark:bg-gray-900 dark:text-white ">
        <Routes>
            <Route path="/" element={<Home url={`https://api.coingecko.com/api/v3/search/trending`} title="Home"/>}/>
            <Route path="/cryptocurrencies" element={<CryptoCurrencies url={`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`} title="Cryptocurrencies"/>}/> 
            <Route path="/cryptodetails/:id" element={<CryptoDetails/>}/>
            <Route path="/news" element={<News url={`https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_NEWS_DATA_API_KEY}&q=latest%20crypto%20news`} title="News"/>}/>
            <Route path="/exchanges" element={<Exchanges url={`https://api.coingecko.com/api/v3/exchanges
`} title="Exchanges"/>}/>
            <Route path="*" element={<PageNotFound title="Page Not Found"/>}/>
        </Routes>
    </div>
  )
}
