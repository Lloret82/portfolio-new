import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import logo from "../bg.png";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )

      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative bg-black">
      <img src={logo} alt="logo" className="absolute bg-cover object-cover w-full h-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-red-400 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-100 h-100 lg:w-64 lg:h-64 mr-8" alt="img"

          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-black mb-4">
              Hey there. I'm{" "}
              <span className="text-black">{author.name}</span>
            </h1>
            <p className="text-white text-lg">{author.bio}</p>
          </div>

        </section>
      </div>
    </main>
  );
}
