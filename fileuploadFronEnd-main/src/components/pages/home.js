import React from "react";
// import Layout from '../layout/layout';
import Img from '../../img/img1.jpg'
const home=()=>{
    const myStyle={
        backgroundImage:  `url(${Img})`,
        height:'100vh',
        // marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return(
 <>
 <header>
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat"
    style={myStyle}
    >
    <div
      className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
      >
      <div class="flex h-full items-center justify-center mt-44">
        <div class="text-center text-white md:px-12">
          <a
            href="/login"
            class="rounded border-2 border-neutral-50 px-10 pb-[6px] pt-2 text-lg
             font-medium uppercase leading-normal transition duration-150 ease-in-out 
              hover:bg-red-100 hover:text-neutral-500 
             focus:border-neutral-700 focus:text-neutral-100 focus:outline-none focus:ring-0 
             active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100
              dark:hover:bg-opacity-10 text-black"
           >
            ግብት
          </a>
        </div>
      </div>
    </div>
  </div>
</header> 
</>
    );
}
export default home;