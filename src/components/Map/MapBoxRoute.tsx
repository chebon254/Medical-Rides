import React from 'react'
import { Layer, Source } from 'react-map-gl'

function MapBoxRoute(props:any) {
  return (
    <Source type='geojson' 
    data={{
        type: 'FeatureCollection',
        features: [
        {
            type: 'Feature',
            geometry: {
            type: 'LineString',
            coordinates: props.coordinates
            },
            properties: {}
        }
        ]
    }}>
        <Layer
            type='line'
            layout={{ 'line-join': 'round', 'line-cap': 'round' }}
            paint={{ 'line-color': '#0d9488', 'line-width': 5, 'line-opacity': 0.9 }}
        />
    </Source>
  )
}

export default MapBoxRoute