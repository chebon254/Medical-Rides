"use client";
import { useAddressContext } from "@/context/AddressContext";
import { DestinationCoordiContext } from "@/context/DestinationCoordiContext";
import { SourceCoordiContext } from "@/context/SourceCoordiContext";
import React, { useEffect, useState, useContext, useRef, useCallback } from "react";

const session_token = "0e4d5549-e85f-4591-88f5-11822aa0aaba";
const MAPBOX_RETRIEVE_URL = "https://api.mapbox.com/search/searchbox/v1/retrieve/";

interface Suggestion {
  mapbox_id: string;
  place_name: string;
}

function SuggestionList({ items, onSelect }: { items: Suggestion[]; onSelect: (item: Suggestion) => void }) {
  return (
    <div className="absolute z-20 mt-1.5 max-h-60 w-full overflow-auto rounded-xl border border-slate-100 bg-white p-1.5 shadow-xl shadow-slate-900/10">
      {items.map((address) => (
        <button
          type="button"
          key={address.mapbox_id}
          className="flex w-full items-start gap-2.5 rounded-lg p-2.5 text-left text-sm text-slate-700 transition-colors hover:bg-teal-50"
          onClick={() => onSelect(address)}
        >
          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="line-clamp-2">{address.place_name}</span>
        </button>
      ))}
    </div>
  );
}

function Autocomplete() {
  const [sourceInput, setSourceInput] = useState<string>('');
  const [addressList, setAddressList] = useState<Suggestion[]>([]);
  const isResultClick = useRef(false);
  const debounceTimeout = useRef<number | null>(null);
  const [destination, setDestination] = useState<string>('');
  const [destinationAddressList, setDestinationAddressList] = useState<Suggestion[]>([]);
  const { setSourceAddress, setDestinationAddress } = useAddressContext();

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


  const getDestinationAddressList = useCallback(async () => {
    const destinationRes = await fetch("/api/autofill-address?q=" + destination, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const destinationResult = await destinationRes.json();
    setDestinationAddressList(destinationResult.searchResult.suggestions);
  }, [destination]);

  useEffect(() => {
    if (isResultClick.current) {
      isResultClick.current = false;
      return;
    }
    const delayDebounceFn = setTimeout(() => {
      getDestinationAddressList();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [destination, getDestinationAddressList]);

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
      setSourceAddress(item.place_name);
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
      setDestination(item.place_name);
      setDestinationAddress(item.place_name)
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
    <div className="rounded-2xl border border-slate-200 bg-white p-2">
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-teal-500 ring-4 ring-teal-500/15" />
        <input
          name="address"
          placeholder="Pickup address"
          type="text"
          className="form-input border-transparent pl-9 hover:border-slate-200"
          value={sourceInput || ''}
          onChange={(e) => setSourceInput(e.target.value)}
        />
        {sourceInput && addressList.length > 0 && (
          <SuggestionList items={addressList} onSelect={onSourceAddressClick} />
        )}
      </div>

      <div className="ml-[18px] h-4 border-l-2 border-dashed border-slate-300" />

      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-2.5 w-2.5 -translate-y-1/2 rounded-[3px] bg-amber-500 ring-4 ring-amber-500/15" />
        <input
          type="text"
          placeholder="Where to?"
          className="form-input border-transparent pl-9 hover:border-slate-200"
          value={destination || ''}
          onChange={(e) => setDestination(e.target.value)}
        />
        {destination &&
          destinationAddressList.length > 0 && (
            <SuggestionList items={destinationAddressList} onSelect={onDestinationAddressClick} />
          )
        }
      </div>
    </div>
  );
}
export default Autocomplete;
