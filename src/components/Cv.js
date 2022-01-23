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
            <div class="p-2 flex flex-col justify-center">
                  <div class="mx-auto mt-6">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold inline-flex border border-blue-700 rounded ">
                              {cv ? <a href={cv.cvURL} className=" text-black font-bold p-4 leading-none home-name" id="dl" rel="noreferrer">Download</a> : ""}
                              {/* <pre>{JSON.stringify({ cv })}</pre> */}
                        </button>
                  </div>
            </div>

      )
}

export default Cv