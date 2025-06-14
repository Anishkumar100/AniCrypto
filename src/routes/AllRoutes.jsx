
import {Route,Routes} from "react-router-dom"
import {Home,CryptoCurrencies,CryptoDetails,News,Exchanges, PageNotFound} from "../pages/indexPages"

export const AllRoutes = () => {
  return (
    <div className=" mt-18  bg-slate-200  dark:bg-gray-900 dark:text-white ">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cryptocurrencies" element={<CryptoCurrencies/>}/> 
            <Route path="/cryptodetails/:id" element={<CryptoDetails/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/exchanges" element={<Exchanges/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}
