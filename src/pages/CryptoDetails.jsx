import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { IndividualCoinInfo,CryptoChart } from '../components/indexComponents';
import {DynamicTab} from "../hooks/DynamicTab"


export const CryptoDetails = () => {
  const { id } = useParams();
  const { result, loading, error } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}`);


  DynamicTab(id)

  return (
    <main>
      {loading ? (
        <div className="text-center mt-10 text-blue-500 animate-pulse">Loading...</div>
      ) : error ? (
        <div className="text-center mt-10 text-red-500">Error fetching data.</div>
      ) : result ? (
        <section className="w-full min-h-screen px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6 max-w-[1400px] mx-auto">

            {/* Left half: Coin Info */}
            <div className="w-full lg:w-1/3">
              <IndividualCoinInfo data={result} />
            </div>

            {/* Right half: Chart placeholder */}
            <div className=" h-fit lg:w-2/3 p-4 border rounded shadow-md">
              <h2 className="text-2xl font-semibold mb-4">📊 Chart</h2>
              <CryptoChart coinId={result.id} />
            </div>


          </div>
        </section>) : null}

              {/* Community & Developer Stats */}

     

    </main>
  );
};
