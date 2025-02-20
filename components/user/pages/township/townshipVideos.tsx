import { useState } from "react";

const videos = [
  {
    id: 1,
    title: "Welcome to Uptown Bonifacio!",
    url: "https://www.youtube.com/embed/example1",
    thumbnail: "/images/video-thumbnail-1.jpg",
    location: "Taguig City",
    date: "June 26, 2017",
    views: "209,023",
  },
  {
    id: 2,
    title: "See You at Twin Lakes!",
    url: "https://www.youtube.com/embed/example2",
    thumbnail: "/images/video-thumbnail-2.jpg",
    location: "Batangas",
    date: "February 20, 2017",
    views: "72,887",
  },
  {
    id: 3,
    title: "Southwoods City: A Township and a Destination",
    url: "https://www.youtube.com/embed/example3",
    thumbnail: "/images/video-thumbnail-3.jpg",
    location: "Cavite",
    date: "April 07, 2018",
    views: "77,174",
  },
  // Add more video data here...
];

export default function TownshipVideos() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]?.url || "");

  return (
    <div className="container mx-auto px-6 py-12">

      <nav className="text-gray-600 text-sm mb-6">
        <a href="/user" className="hover:underline">Home</a> &gt; <span className="text-gray-900 font-semibold">Videos</span>
      </nav>

      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Township Videos</h1>

      <div className="text-center text-gray-700 mb-10">
        <p className="text-lg w-1/2 mx-auto">
          In the past 3 decades, Megaworld has evolved from just building residences. It has been building sustainable and future-ready communities 
          with offices, schools, malls, hotels, and transportation facilities.
        </p>

      </div>

      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search videos..."
          className="w-full max-w-lg px-4 py-2 border rounded-lg focus:ring focus:ring-gray-300"
        />
      </div>

      {selectedVideo && (
        <div className="mb-8 flex justify-center">
          <iframe 
            className="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
            src={selectedVideo}
            title="Selected Video"
            allowFullScreen
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            onClick={() => setSelectedVideo(video.url)}
          >
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-900">{video.title}</h2>
              <p className="text-sm text-gray-600">{video.location} • {video.date}</p>
              <p className="text-sm text-gray-500">{video.views} views</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Show More
        </button>
      </div>
    </div>
  );
}
