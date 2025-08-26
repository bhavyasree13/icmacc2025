'use client';
import GlassIcons from "@/blocks/Components/GlassIcons/GlassIcons";
import { FaMicrochip, FaRobot, FaWifi, FaImages, FaBrain, FaDatabase, FaBolt, FaIndustry, FaBookOpen } from "react-icons/fa";

const tracks = [
  { label: "Circuits and Systems", color: "blue", icon: <FaMicrochip /> },
  { label: "Robotics, Automation & Internet of Things", color: "purple", icon: <FaRobot /> },
  { label: "Communications, Sensors and Mobile Networking", color: "red", icon: <FaWifi /> },
  { label: "Signal, Image, and Multimedia Processing", color: "indigo", icon: <FaImages /> },
  { label: "Computational Intelligence and Computing", color: "orange", icon: <FaBrain /> },
  { label: "Data Science Engineering", color: "green", icon: <FaDatabase /> },
  { label: "Power, Energy and Power Electronics", color: "blue", icon: <FaBolt /> },
  { label: "Additive Manufacturing", color: "purple", icon: <FaIndustry /> },
  { label: "Emerging Education Technologies", color: "red", icon: <FaBookOpen /> },
];

export default function ConferenceTracks() {
  return (
    <div className="w-full bg-gray-100 py-16 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-gray-800">
        Conference Tracks
      </h2>
      <div className="w-full flex justify-center">
        <GlassIcons 
          items={tracks} 
          className="justify-center gap-10" // add gap between icons
        />
      </div>
    </div>
  );
}
