import React from 'react';
import { Layer, Source } from 'react-map-gl';

function AdminMapBoxRoute(props: any) {
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
        layout={{ 'line-join': 'round', 'line-cap': 'square' }}
        paint={{ 'line-color': '#0462d4', 'line-width': 4 }}
      />
    </Source>
  )
}

export default AdminMapBoxRoute;
