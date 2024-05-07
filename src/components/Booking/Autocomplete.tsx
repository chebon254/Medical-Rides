"use client"
import React, { useEffect, useState } from 'react'

const session_token = '0e4d5549-e85f-4591-88f5-11822aa0aaba'
const MAPBOX_RETRIEVE_URL = 'https://api.mapbox.com/search/searchbox/v1/retrieve/'

function Autocomplete() {
  // Current/Pick Up Location
  const [source, setSource] = useState<any>();
  const [addressList, setAddressList] = useState<any>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [source]);

  const getAddressList = async () => {
    const res = await fetch('api/search-address?q=' + source, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await res.json();
    setAddressList(result);
  }
  // Destination Location
  const [destination, setdestination] = useState<any>();
  const [destinationAddressList, setDestinationAddressList] = useState<any>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getdestinationAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [destination]);

  const getdestinationAddressList = async () => {
    const destinationres = await fetch('api/search-address?q=' + destination, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const destinationresult = await destinationres.json();
    setDestinationAddressList(destinationresult);
  }

  // Longitude and latitude
  const [sourceCoordinates, setSourceCoordinates] = useState<any>([]);
  const [destinationCoordinates, setDestinationCoordinates] = useState<any>([]);

  const onSourceAddressClick = async (item: any) => {
    setSource(item.full_address);
    setAddressList([])
    const res = await fetch(MAPBOX_RETRIEVE_URL + item.mapbox_id + "?session_token=" + session_token + "&access_token=" + process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
    const clickresult = await res.json();
    setSourceCoordinates({
      lng: clickresult.features[0].geometry.coordinates[0],
      lat: clickresult.features[0].geometry.coordinates[1]
    })
    console.log(clickresult);
    }

    const onDestinationAddressClick = async (item: any) => {
      setdestination(item.full_address);
      setDestinationAddressList([])
      const res = await fetch(MAPBOX_RETRIEVE_URL + item.mapbox_id + "?session_token=" + session_token + "&access_token=" + process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)
      const clickresult = await res.json();
      setDestinationCoordinates({
        lng: clickresult.features[0].geometry.coordinates[0],
        lat: clickresult.features[0].geometry.coordinates[1]
      })
      console.log(clickresult);
      
    }
    return (
      <div className='m-1'>
        <div className="mt-3 relative">
          <label>Where From?</label>
          <input type="text" className="bg-white p-1 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          {addressList?.searchResult?.suggestions?.length > 0 && (
            <div className="absolute shadow-md p-1 rounded-md w-full bg-white">
              {addressList.searchResult.suggestions.map((item: any, index: number) => (
                <h2 key={index} className="p-3 hover:bg-grey-100 cursor-pointer" onClick={() => {
                  onSourceAddressClick(item)
                }}>
                  {item.full_address}
                </h2>
              ))}
            </div>
          )}
        </div>
        <div className="mt-3">
          <label>Where To?</label>
          <input type="text" className="bg-white p-1 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
            value={destination}
            onChange={(e) => setdestination(e.target.value)}
          />
          {destinationAddressList?.searchResult?.suggestions?.length > 0 && (
            <div className="absolute shadow-md p-1 rounded-md w-full bg-white">
              {destinationAddressList.searchResult.suggestions.map((item: any, index: number) => (
                <h2 key={index} className="p-3 hover:bg-grey-100 cursor-pointer" onClick={() => {
                  onDestinationAddressClick(item)
                }}>
                  {item.full_address}
                </h2>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
  export default Autocomplete