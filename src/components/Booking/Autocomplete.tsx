"use client"
import { DestinationCoordiContext } from '@/context/DestinationCoordiContext';
import { SourceCoordiContext } from '@/context/SourceCoordiContext';
import { useAddressContext } from '@/context/AddressContext';
import React, { useEffect, useState, useContext } from 'react';

const session_token = '0e4d5549-e85f-4591-88f5-11822aa0aaba';
const MAPBOX_RETRIEVE_URL = 'https://api.mapbox.com/search/searchbox/v1/retrieve/';

function Autocomplete() {
  // Current/Pick Up Location
  const [source, setSource] = useState<any>();
  const [addressList, setAddressList] = useState<any>([]);
  const { sourceCoordinates, setSourceCoordinates } = useContext(SourceCoordiContext);
  const { sourceAddress, setSourceAddress, destinationAddress, setDestinationAddress } = useAddressContext();

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
  };

  // Destination Location
  const [destination, setDestination] = useState<any>();
  const [destinationAddressList, setDestinationAddressList] = useState<any>([]);
  const { destinationCoordinates, setDestinationCoordinates } = useContext(DestinationCoordiContext);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getDestinationAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [destination]);

  const getDestinationAddressList = async () => {
    const destinationRes = await fetch('api/search-address?q=' + destination, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const destinationResult = await destinationRes.json();
    setDestinationAddressList(destinationResult);
  };

  const onSourceAddressClick = async (item: any) => {
    setSource(item.full_address);
    setSourceAddress(item.full_address);
    setAddressList([]);
    const res = await fetch(MAPBOX_RETRIEVE_URL + item.mapbox_id + "?session_token=" + session_token + "&access_token=" + process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);
    const clickResult = await res.json();
    setSourceCoordinates({
      lng: clickResult.features[0].geometry.coordinates[0],
      lat: clickResult.features[0].geometry.coordinates[1]
    });
  };

  const onDestinationAddressClick = async (item: any) => {
    setDestination(item.full_address);
    setDestinationAddress(item.full_address);
    setDestinationAddressList([]);
    const res = await fetch(MAPBOX_RETRIEVE_URL + item.mapbox_id + "?session_token=" + session_token + "&access_token=" + process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);
    const clickResult = await res.json();
    setDestinationCoordinates({
      lng: clickResult.features[0].geometry.coordinates[0],
      lat: clickResult.features[0].geometry.coordinates[1]
    });
  };

  return (
    <div className='m-1 relative z-0'>
      <div className="mt-3 relative z-0">
        <label className="relative z-0">Where From?</label>
        <input
          type="text"
          className="bg-white p-1 relative z-0 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        {source && addressList?.searchResult?.suggestions?.length > 0 && (
          <div className="absolute z-20 shadow-md p-1 rounded-md w-full bg-white">
            {addressList.searchResult.suggestions.map((item: any, index: number) => (
              <h2 key={index} className="p-3 hover:bg-grey-100 cursor-pointer" onClick={() => onSourceAddressClick(item)}>
                {item.full_address}
              </h2>
            ))}
          </div>
        )}
      </div>
      <div className="mt-3 relative z-0">
        <label className="relative z-0">Where To?</label>
        <input
          type="text"
          className="bg-white p-1 relative z-0 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        {destination && destinationAddressList?.searchResult?.suggestions?.length > 0 && (
          <div className="absolute z-10 shadow-md p-1 rounded-md w-full bg-white">
            {destinationAddressList.searchResult.suggestions.map((item: any, index: number) => (
              <h2 key={index} className="p-3 hover:bg-grey-100 cursor-pointer" onClick={() => onDestinationAddressClick(item)}>
                {item.full_address}
              </h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Autocomplete;
