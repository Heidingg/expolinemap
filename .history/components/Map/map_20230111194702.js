import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {
    const position = [49.28524524981317, -123.11434751643503];
    const polyline = [
        //Expo Line (Waterfront to King George)
    //Waterfront 
    [49.28524524981317, -123.11434751643503],
    //Burrard 
    [49.285581150633966, -123.12012245876285],
    //Granville 
    [49.28276795358473, -123.1164699145821],
    //Stadium-Chinatown 
    [49.28010484687972, -123.11012142014103],
    //Main Street–Science World 
    [49.273374980784865, -123.10037145876296],
    //Commercial-Broadway 
    [49.262721001091556, -123.06927941643552],
    //Nanaimo 
    [49.24844626535717, -123.05598167410812],
    //29th Avenue 
    [49.24436337925635, -123.04537402992739],
    //Joyce-Collingwood 
    [49.23855530902799, -123.0317256145831],
    //Patterson 
    [49.22991271599505, -123.01265107225555],
    //Metrotown 
    [49.22593989446889, -123.00385127225569],
    //Royal Oak 
    [49.220193228996386, -122.98845204229738],
    //Edmonds 
    [49.21254265709066, -122.95914504342],
    //22nd Street 
    [49.200068725477024, -122.94922489130668],
    //New Westminster 
    [49.20159918383558, -122.91263972992837],
    //Columbia 
    [49.204943945073374, -122.90607708574763],
    //Scott Road 
    [49.204575904842045, -122.87402738018886],
    //Gateway 
    [49.1991136014707, -122.85066387225632],
    //Surrey Central 
    [49.18971392944762, -122.84792071458409],
    //King George 
    [49.1829310367517, -122.84473292807587]

    ]

    const polyline2 = [
        //Waterfront to Production Way
    //Waterfront
    //Burrard
    //Granville
    //Stadium-Chinatown
    //Main Street–Science World
    //Commercial-Broadway
    //Nanaimo
    //29th Avenue
    //Joyce-Collingwood
    //Patterson
    //Metrotown
    //Royal Oak
    //Edmonds
    //22nd Street
    //New Westminster
    //Columbia
    [49.204943945073374, -122.90607708574763],
    //Sapperton 
    [49.224860238697396, -122.88949270294468],
    //Braid 
    [49.23268213068468, -122.88456287225554],
    //Lougheed Town Centre 
    [49.24875892482227, -122.89717730665],
    //Production Way-University 
    [49.25367827613695, -122.91868207173422]

    ]

    const blueOption = { color: 'blue'};
    const greenOption = { color: 'green'};

    return (
        <MapContainer className={style.map} center={position} zoom={14} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
               <Popup>
                <br/> Waterfront Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.285581150633966, -123.12012245876285]}>
               <Popup>
                <br/> Burrard Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.28276795358473, -123.1164699145821]}>
               <Popup>
                <br/> Granville Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.28010484687972, -123.11012142014103]}>
               <Popup>
                <br/> Stadium-Chinatown Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.273374980784865, -123.10037145876296]}>
               <Popup>
                <br/> Main Street–Science World Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.262721001091556, -123.06927941643552]}>
               <Popup>
                <br/> Commercial-Broadway Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.24844626535717, -123.05598167410812]}>
               <Popup>
                <br/> Nanaimo Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.24436337925635, -123.04537402992739]}>
               <Popup>
                <br/> 29th Avenue Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.23855530902799, -123.0317256145831]}>
               <Popup>
                <br/> Joyce-Collingwood Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.22991271599505, -123.01265107225555]}>
               <Popup>
                <br/> Patterson Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.22593989446889, -123.00385127225569]}>
               <Popup>
                <br/> Metrotown Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.220193228996386, -122.98845204229738]}>
               <Popup>
                <br/> Royal Oak Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.21254265709066, -122.95914504342]}>
               <Popup>
                <br/> Edmonds Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.200068725477024, -122.94922489130668]}>
               <Popup>
                <br/> 22nd Street Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.20159918383558, -122.91263972992837]}>
               <Popup>
                <br/> New Westminster Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.20159918383558, -122.91263972992837]}>
               <Popup>
                <br/> New Westminster Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.204943945073374, -122.90607708574763]}>
               <Popup>
                <br/> Columbia Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.204575904842045, -122.87402738018886]}>
               <Popup>
                <br/> Scott Road Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.1991136014707, -122.85066387225632]}>
               <Popup>
                <br/> Gateway Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.18971392944762, -122.84792071458409]}>
               <Popup>
                <br/> Surrey Central Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.1829310367517, -122.84473292807587]}>
               <Popup>
                <br/> King George Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.224860238697396, -122.88949270294468]}>
               <Popup>
                <br/> Sapperton Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.1829310367517, -122.84473292807587]}>
               <Popup>
                <br/> King George Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.23268213068468, -122.88456287225554]}>
               <Popup>
                <br/> Braid Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[49.24875892482227, -122.89717730665]}>
               <Popup>
                <br/> Lougheed Town Central Skytrain Station
               </Popup>
            </Marker>

            <Marker position={[ 49.25367827613695, -122.91868207173422]}>
               <Popup>
                <br/> Production Way Skytrain Station
               </Popup>
            </Marker>

            <CircleMarker center={[49.28524524981317, -123.11434751643503]} pathOptions={greenOption} radius={20}>
                <Popup>You reached your destination</Popup>
            </CircleMarker>

            <Polyline pathOptions={blueOption} positions={polyline}/>
            <Polyline pathOptions={blueOption} positions={polyline2}/>
        </MapContainer>

    )
}