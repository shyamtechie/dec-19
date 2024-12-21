import React from "react";
import NavBar from "./NavBar";

export default function Photos() {
  const places = [
    {
      name: "TajMahal",
      city: "Agra",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=1024x1024&w=is&k=20&c=1lDmEijlmoTDLmB6gQYfnce55OkD04I9eVuNbUpzCjY=",
    },

    {
      name: "CharMinar",
      city: "Hyd",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://media.istockphoto.com/id/1215274990/photo/high-wide-angle-view-of-charminar-in-the-night.jpg?s=1024x1024&w=is&k=20&c=8VF8tsWn8Iy5Ls8vTAo73rQntfzSYsK5pAAJDcP4oUE=",
    },
    {
      name: "Effel Tower",
      city: "Paris",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://media.gettyimages.com/id/1492597085/photo/paris-skyline-with-eiffel-tower-on-a-sunny-day-wide-angle-view-france.jpg?s=2048x2048&w=gi&k=20&c=4vXmjZiVnLm0PTudRrjXxEmxY3sn0NA5951eMIPoycM=",
    },
    {
      name: "RedFort",
      city: "Delhi",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content",
      url: "https://media.istockphoto.com/id/1169495248/photo/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise.jpg?s=1024x1024&w=is&k=20&c=Y8B93hsz7QBve5gvdG4LuOagH1Zx_2GxO_W8XXBXZks=",
    },
  ];

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {places.map((place) => (
          <div className="col">
            <div className="card">
              <img src={place.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}