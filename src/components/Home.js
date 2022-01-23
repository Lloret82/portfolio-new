import React from "react";
import image from "../bg.png";
import ReactTypingEffect from 'react-typing-effect';


export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Monstera Leaves"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <ReactTypingEffect className="text-2xl text-green-100 font-bold cursive  home-name" text={["Ciao. I'm Andrea. Fullstack MERN dev."]} speed={100} />


      </section>
    </main>
  );
}
