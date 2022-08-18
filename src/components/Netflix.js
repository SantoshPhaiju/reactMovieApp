import React from "react";
import Movie from "./Movie";

const Netflix = () => {
  const data = [
    {
      id: 1,
      movieName: "Bahubali",
      title: "Bahubali: The Beginning",
      image: "https://www.firstpost.com/wp-content/uploads/2017/04/696434.jpg",
      video: "https://www.youtube.com/watch?v=maOB-E4D9BY",
    },
    {
      id: 2,
      movieName: "Bahubali 2",
      title: "Bahubali 2: The Conclusion",
      image: "https://www.adgully.com/img/800/201710/bahubali.jpg",
      video: "https://www.youtube.com/watch?v=gYoPkmjAK9U",
    },
    {
      id: 3,
      movieName: "Krrish 3",
      title: "Krrish 3",
      image:
        "https://www.filmibeat.com/ph-big/2013/10/hrithik-roshan-amp;-kangana-ranaut-s-super-hero-film-krrish-3_138318810030.jpg",
      video: "https://www.youtube.com/watch?v=vK2aDyIMHNM&t=8158s",
    },
    {
      id: 4,
      movieName: "3 Idiots",
      title: "3 Idiots",
      image:
        "https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/5/1/original/3_Idiots.PNG",
      video: "https://www.youtube.com/watch?v=AR8vnS31HxI",
    },
    {
      id: 5,
      movieName: "MS Dhoni: The Untold Story",
      title: "MS Dhoni: The Untold Story",
      image:
        "https://images.indianexpress.com/2016/09/ms-dhoni-review-759.jpg?w=389",
      video: "https://www.youtube.com/watch?v=yi2oGeVQLRc",
    },
  ];

  console.log(data);

  return (
    <>
      <div className="movieSection">
        <h1 className="heading">Welcome to the netflix here</h1>
        <div className="movContainer">
          {data.map((movie) => {
            return <Movie movie={movie} key={movie.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Netflix;
