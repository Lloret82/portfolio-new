import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import ReactTypingEffect from 'react-typing-effect';



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

            <div class="p-6 flex flex-col justify-center bg-red-400 min-h-screen">
                  <ReactTypingEffect className="text-sm text-green-100 font-bold cursive  home-name" text={["Click the button to download my CV"]} speed={100} />
                  <div class="mx-auto mt-6 ">
                        <button className="bg-gradient-to-r from-black mt-6 hover:bg-red-700 text-white font-bold inline-flex border border-blue-700 rounded ">
                              {cv ? <a href={cv.cvURL} className=" text-white  scale-75  font-bold p-4 leading-none home-name" id="dl" rel="noreferrer">Download</a> : ""}
                              {/* <pre>{JSON.stringify({ cv })}</pre> */}
                        </button>
                  </div>
            </div>

      )
}

export default Cv