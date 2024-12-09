'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./composant/Header";
import init from "./common/init";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import GetItems from "./get-items/page";


export default function PagePrincipale() {
  const {auth, db} = init();
  const user = auth.currentUser;
  const route = useRouter();


   
  if(user == null)
  {
    route.push("/login")
  }
  else{
    return (
      <>
      <Header/>
      <div className="row"> 
        <div className="card col-lg-4 col-12" >
            <img src="https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080" className="card-img-top" alt="Avatar" />
            <div className="card-body">
              <h5 className="card-title">Avatar</h5>
              <p className="card-text">A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.</p>
              <a href="/" className="btn btn-primary">📖</a> <a href="/" className="btn btn-dark">🗑️</a>
            </div>
        </div>
        <div className="card col-lg-4 col-12" >
            <img src="https://images.ladepeche.fr/api/v1/images/view/5c34d2f53e454659430d33a5/large/image.jpg" className="card-img-top" alt="The Dark Knight" />
            <div className="card-body">
              <h5 className="card-title">The Dark Knight</h5>
              <p className="card-text">When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</p>
              <a href="/" className="btn btn-primary">📖</a> <a href="/" className="btn btn-dark">🗑️</a>
            </div>
        </div>
        <div className="card col-lg-4 col-12" >
            <img src="https://cdn.vox-cdn.com/thumbor/Ud01bY7Cq96hTiS6CPRjc2rngXw=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15969338/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.jpg" className="card-img-top" alt="Avengers Endgame" />
            <div className="card-body">
              <h5 className="card-title">Avengers Endgame</h5>
              <p className="card-text">After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</p>
              <a href="/" className="btn btn-primary">📖</a> <a href="/" className="btn btn-dark">🗑️</a>
            </div>
        </div>
        <div className="card col-lg-4 col-12" >
            <img src="https://m.media-amazon.com/images/M/MV5BMTk4NTQ1Mzc1NV5BMl5BanBnXkFtZTgwODQ2NzA0NDE@._V1_.jpg" className="card-img-top" alt="Skyfall" />
            <div className="card-body">
              <h5 className="card-title">Skyfall</h5>
              <p className="card-text">James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.</p>
              <a href="/" className="btn btn-primary">📖</a> <a href="/" className="btn btn-dark">🗑️</a>
            </div>
        </div>
      </div>
      <GetItems/>
      </>
    );
  }
}
