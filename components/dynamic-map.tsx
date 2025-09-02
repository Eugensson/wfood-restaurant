"use client";

import Image from "next/image";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { cn } from "@/lib/utils";
import { MARKERS } from "@/constants";

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

const DynamicMap = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <MapContainer
      center={[34.052235, -118.243683]}
      zoom={isMobile ? 10 : 12}
      zoomControl={false}
      className={cn("z-10", isMobile ? "h-[300px]" : "h-[900px]")}
    >
      <TileLayer
        attribution='&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.basemaps.cartocdn.com//light_all/{z}/{x}/{y}{r}.png"
      />
      {MARKERS.map(({ id, position, title, subtitle, image }) => (
        <Marker key={id} position={position} icon={customIcon}>
          <Popup>
            <div className="flex gap-x-7">
              <div className="flex-1">
                <h3>{title}</h3>
                <p className="leading-snug">{subtitle}</p>
              </div>
              <div className="flex-1">
                <Image src={image} alt={title} width={130} height={160} />
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DynamicMap;
