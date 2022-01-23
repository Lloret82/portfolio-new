import React, { useEffect, useState } from "react";

import sanityClient from "../client.js";


export default function Cv() {

      const [cv, setCv] = useState(null);
      useEffect(() => {
            sanityClient
                  .fetch(

                        `*[_type == 'curriculum'] {
  title,
  name,
  description,
  curriculum,
  cv,
  _ref,
  "cvURL": cv.asset->url
}`)
                  .then((data) => setCv(data[0]))
                  .catch(console.error);
      }, []);


      console.log(cv.cvURL)
      return (
            <div>
                  <a href={cv.cvURL} target='_blank' className="text-5xl text-black font-bold cursive leading-none lg:leading-snug home-name">Click here for my CV</a>
                  {/* <pre>{JSON.stringify({ cv })}</pre> */}
            </div>

      )
}