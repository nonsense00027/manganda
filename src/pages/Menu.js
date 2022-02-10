import React from "react";
import animation from "../assets/animation.mp4";
import arrozcaldo from "../assets/arrozcaldo.jpg";
import chickenhumba from "../assets/chickenhumba.jpg";
import chickeninasal from "../assets/chickeninasal.jpg";
import HaloHalo from "../assets/HaloHalo.jpg";
import sisig from "../assets/sisig.jpg";
import tortangtalong from "../assets/tortangtalong.jpg";

function Menu() {
  return (
    <div className="vid">
      <video
        src={animation}
        width={1280}
        height={720}
        autoPlay
        loop={true}
        muted={true}
      />

      <div className="menuItems">
        <img src={arrozcaldo} width={400} height={250} />
        <br />
        <h2>Arroz Caldo</h2>

        <br />
        <br />

        <img src={chickenhumba} width={400} height={250} />
        <br />
        <h2>Chicken Humba</h2>

        <br />
        <br />

        <img src={chickeninasal} width={400} height={250} />
        <br />
        <h2>Chicken Inasal</h2>

        <br />
        <br />

        <img src={sisig} width={400} height={250} />
        <br />
        <h2>Sisig</h2>

        <br />
        <br />

        <img src={tortangtalong} width={400} height={250} />
        <br />
        <h2>Tortang Talong</h2>

        <br />
        <br />

        <img src={HaloHalo} width={400} height={250} />
        <br />
        <h2>Halo-Halo</h2>

        <br />
        <br />
      </div>
    </div>
  );
}

export default Menu;
