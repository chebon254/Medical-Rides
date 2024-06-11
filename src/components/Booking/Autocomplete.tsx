"use client";
import { DestinationCoordiContext } from "@/context/DestinationCoordiContext";
import { SourceCoordiContext } from "@/context/SourceCoordiContext";
import React, { useEffect, useState, useContext, useRef } from "react";

const session_token = "0e4d5549-e85f-4591-88f5-11822aa0aaba";
const MAPBOX_RETRIEVE_URL = "https://api.mapbox.com/search/searchbox/v1/retrieve/";

interface Suggestion {
  mapbox_id: string;
  place_name: string;
}

function Autocomplete() {
  const [sourceInput, setSourceInput] = useState<string>('');
  const [addressList, setAddressList] = useState<Suggestion[]>([]);
  const isResultClick = useRef(false);
  const debounceTimeout = useRef<number | null>(null);
  const [destination, setdestination] = useState<any>(null);
  const [destinationAddressList, setDestinationAddressList] = useState<Suggestion[]>([]);

  useEffect(() => {
    if (sourceInput.length === 0) {
      setAddressList([]);
      return;
    }

    if (isResultClick.current) {
      isResultClick.current = false; 
      return;
    }

    const fetchAddressList = async () => {
      try {
        const response = await fetch("api/autofill-address?q=" + sourceInput, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const  result= await response.json();
        setAddressList(result.searchResult.suggestions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    debounceTimeout.current = window.setTimeout(fetchAddressList, 1000);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [sourceInput]);


  const getdestinationAddressList = async () => {
    const destinationres = await fetch("api/autofill-address?q=" + destination, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const destinationresult = await destinationres.json();
    setDestinationAddressList(destinationresult.searchResult.suggestions);
  };

  useEffect(() => {
    if (isResultClick.current) {
      isResultClick.current = false;
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      getdestinationAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [destination]);

  // Longitude and latitude
  const { sourceCoordinates, setSourceCoordinates } =
    useContext(SourceCoordiContext);
  const { destinationCoordinates, setDestinationCoordinates } = useContext(
    DestinationCoordiContext,
  );

  const onSourceAddressClick = async (item: Suggestion) => {
    try {
      isResultClick.current = true;
      setSourceInput(item.place_name);
      setAddressList([]);

      const response = await fetch(`api/search-address?q=${encodeURIComponent(item.place_name)}`);
      const responseResult = await response.json();

      const mapboxId = responseResult.searchResult.suggestions[0].mapbox_id;
      const mapboxUrl = `${MAPBOX_RETRIEVE_URL}${mapboxId}?session_token=${session_token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

      const res = await fetch(mapboxUrl);
      const clickresult = await res.json();

      const { coordinates } = clickresult.features[0].geometry;
      setSourceCoordinates({
        lng: coordinates[0],
        lat: coordinates[1],
      });
    } catch (error) {
      console.error("Error fetching source coordinates:", error);
    }
  };

  const onDestinationAddressClick = async (item: Suggestion) => {
    try {
      isResultClick.current = true;
      setdestination(item.place_name);
      setDestinationAddressList([]);

      const response = await fetch(`api/search-address?q=${encodeURIComponent(item.place_name)}`);
      const responseResult = await response.json();

      const mapboxId = responseResult.searchResult.suggestions[0].mapbox_id;
      const mapboxUrl = `${MAPBOX_RETRIEVE_URL}${mapboxId}?session_token=${session_token}&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`;

      const res = await fetch(mapboxUrl);
      const clickresult = await res.json();

      const { coordinates } = clickresult.features[0].geometry;
      setDestinationCoordinates({
        lng: coordinates[0],
        lat: coordinates[1],
      });
    } catch (error) {
      console.error("Error fetching destination coordinates:", error);
    }
  };

  return (
    <div className="m-1">
      <div className="mt-3 relative">
        <label>Where From?</label>
        <input
          name="address"
          placeholder="Address"
          type="text"
          className="bg-white p-1 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
          value={sourceInput}
          onChange={(e) => setSourceInput(e.target.value)}
        />
        {sourceInput && addressList.length > 0 && (
          <div className=" shadow-md p-1 rounded-md w-full bg-white">
            {addressList.map(
              (address) => (
                <h2
                  key={address.mapbox_id}
                  className="p-3 hover:bg-grey-100 cursor-pointer"
                  onClick={() => {
                    onSourceAddressClick(address);
                  }}
                >
                  {address.place_name}
                </h2>
              ),
            )}
          </div>
        )}
      </div>
      <div className="mt-3 relative">
        <label>Where To?</label>
        <input
          type="text"
          className="bg-white p-1 focus:border-yellow-300 border-[1px] w-full rounded-md outline-none"
          value={destination}
          onChange={(e) => setdestination(e.target.value)}
        />
        {destination &&
          destinationAddressList.length > 0 && (
            <div className="absolute shadow-md p-1 rounded-md w-full bg-white">
              {destinationAddressList.map(
                (address) => (
                  <h2
                    key={address.mapbox_id}
                    className="p-3 hover:bg-grey-100 cursor-pointer"
                    onClick={() => {
                      onDestinationAddressClick(address);
                    }}
                  >
                    {address.place_name}
                  </h2>
                ),
              )}
            </div>
          )
        }
      </div>
    </div>
  );
}
export default Autocomplete;