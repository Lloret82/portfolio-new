import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";


const Cv = () => {
      const [cv, setCv] = useState(null);
      useEffect(() => {
            sanityClient
                  .fetch(

                        `*[_type == 'curriculum'] {
  title,
  description,
 cv,
 
  "cvURL": cv.asset->url
}`)
                  .then((data) => setCv(data[0]))
                  .catch(console.error);
      }, []);


      // console.log(cv.cvURL)

      return (

            <div>
                  {cv ? <a href={cv.cvURL} className="text-5xl text-black font-bold cursive leading-none lg:leading-snug home-name" rel="noreferrer">Click here for my CV</a> : ""}
                  {/* <pre>{JSON.stringify({ cv })}</pre> */}
            </div>

      )
}

export default Cv