"use client"
import React, { useEffect, useState } from 'react'

function Autcomplete() {
  const [source, setSource] = useState<any>();
  const [addressList, setAddressList] = useState<any>([]);
  
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [source]);  

  const getAddressList = async() => {
    const res = await fetch('api/search-address?q=' + source, {
        headers: {
          "Content-Type": "application/json"
      }
    });

    const result = await res.json();
    setAddressList(result);
  }
  return (
    <div>
        <div className="mt-3 relative">
          <label>Where From?</label>
          <input type="text" className="bg-white p-1 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none" 
          value={source} 
          onChange={(e)=>setSource(e.target.value)}
          />
          {addressList?.searchResult?.suggestions?.length > 0 && (
            <div className="absolute shadow-md p-1 rounded-md w-full bg-white">
              {addressList.searchResult.suggestions.map((item: any, index: number) => (
                <h2 key={index} className="p-3 hover:bg-grey-100 cursor-pointer" onClick={() => { setSource(item.full_address); setAddressList([]) }}>
                  {item.full_address}
                </h2>
              ))}
            </div>
          )}
        </div>
        <div className="mt-3">
          <label>Where To?</label>
          <input type="text" className="bg-white p-1 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"/>
        </div>
    </div>
  )
}
export default Autcomplete