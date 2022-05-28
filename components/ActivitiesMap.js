import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet.tilelayer.nogap'
// import L from 'leaflet';
// import markerIcon from '../node_modules/leaflet/dist/images/marker-icon.png'

// delete L.Icon.Default.prototype._getIconUrl;
//
// L.Icon.Default.mergeOptions({
//     // iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: markerIcon
//     // shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });


export default function ActivitiesMap ({data}) {
    const position = [51.505, -0.09]

    return(
        <div className={'h-full'}>
            <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={true}>
               <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
                />

                {/*<Marker position={[51.505, -0.09]}>*/}
                {/*    <Popup>*/}
                {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
                {/*    </Popup>*/}
                {/*</Marker>*/}
            </MapContainer>
            </div>
    )

}