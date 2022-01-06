import React ,{useRef,useEffect} from 'react';
import {TweenMax,Power3} from 'gsap';
//import {useSpring,animated} from 'react-spring';
export default function BackG(){
    let h=window.outerHeight*0.52;

    let coming =useRef(null);
    let days =useRef(null);
    let bg =useRef(null);

    useEffect(()=>{
        let hi=window.outerHeight*0.5;       
      TweenMax.to(
         bg,
         1,
         {
            opacity:1,
            ease:Power3.easeOut,
         }
      )
      TweenMax.to(
         coming,
         0.8,
         {
            opacity:1,
            y:hi,
            ease:Power3.easeOut,
            delay:0.2
         }
      )
      TweenMax.to(
        days,
        0.8,
        {
           opacity:1,
           y:-10,
           ease:Power3.easeInOut,
           delay:0.5
        }
     )

    })
    
    const BackG={
        backgroundImage: 'url(./img/forestbridge.jpg)',
        backgroundPosition: 'center',
        backgroundPepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow:'hidden',
        height:'100vh',
        color:'white',
        position:'reletive'
    }
    const Powered={
        position:'absolute',
        left:'15px',
        bottom:'15px',

    }

    return(
        <div ref={(el)=>bg=el} className="backG pt-3 pl-4" style={BackG}>
             <h4>Logo</h4>
             <div style={Powered} >
                 <p>Power By Salama Nief</p>
             </div>
           <div ref={(el)=>days=el}  className='text-center p' style={{top:h,left:window.outerWidth*0.5}}>
             <hr className="border border-white" />
              <h5  className="d-inline">35 day left </h5>
           </div>
           <h1 ref={(el)=>coming=el}  className='position-absolite display-3 font-weight-normal pb-4 ph text-uppercase'>Coming Soon</h1>
        </div>
    );
}
