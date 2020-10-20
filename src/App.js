import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/assets/css/leaflet.css'
import { Map as LeafletMap, TileLayer, withLeaflet } from 'react-leaflet';
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch';

function App() {
    const prov = new OpenStreetMapProvider();
    const GeoSearchControlElement = withLeaflet(SearchControl);
    return (
        <div className="App">
            <LeafletMap center={[51.505, -0.09]} zoom={13} style={{ height: "700px", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <GeoSearchControlElement
                    provider={prov}
                    showMarker= {true}
                    showPopup={false}
                    popupFormat={({ query, result }) => result.label}
                    retainZoomLevel= {false}
                    animateZoom= {true}
                    autoClose= {false}
                    searchLabel={'Enter address, please'}
                    keepResult= {true}
                />
            </LeafletMap>
        </div>
    );
}

export default App;
