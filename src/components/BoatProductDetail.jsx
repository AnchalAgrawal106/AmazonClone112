import React from 'react'
import ProductsDetail from './ProductsDetail'

function BoatProductDetail() {
    const boatproduct = [
        {img: "../Images/boat/boat1.webp",
     
         description: "boAt BassHeads 100 in-Ear Wired Headphones with Mic (Black)",
         totalbuy: "5k+",
         rate: "349",
         originalrate: "999",
         discount: "65%",
         atyourdoor: "Thursday, 25 February"
        },
        {img: "../Images/boat/boat2.webp",

        description: "boAt Airdopes 141 ANC TWS in Ear Earbuds with 32 Db ANC, 42 Hrs Playback, 50Ms Low Latency Beast Mode, Iwp Tech,Quad Mics with Enx,ASAP Charge,USB Type-C Port & Ipx5(Gunmetal Black)",
        totalbuy: "5k+",
        rate: "1599",
        originalrate: "5990",
        discount: "73%",
        atyourdoor: "Monday 4 March"
       },
        {img: "../Images/boat/boat3.webp",
       
        description: "boAt Immortal 121 TWS Earbuds with Beast™ Mode(40ms Low Latency) for Gaming, 40H Playtime, Blazing LEDs, Quad Mics ENx Signature Sound, ASAP™ Charge(10 Mins= 180 Mins)(Black Sabre)",
        totalbuy: "2k+",
        rate: "1499",
        originalrate: "3499",
        discount: "57%",
        atyourdoor: "Monday 4 March"
       },
        {img: "../Images/boat/boat4.webp",
     
        description: "boAt Rockerz 255 Pro+ Bluetooth in Ear Neckband with Upto 60 Hours Playback, ASAP Charge, IPX7, Dual Pairing and Bluetooth v5.2(Active Black)",
        totalbuy: "5k+",
        rate: "1099",
        originalrate: "3990",
        discount: "72%",
        atyourdoor: "Monday 4 March"
       },
        {img: "../Images/boat/boat5.webp",
    
        description: "boAt Airdopes Atom 81 TWS Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)",
        totalbuy: "5k+",
        rate: "799",
        originalrate: "4490",
        discount: "82%",
        atyourdoor: "Monday 4 March"
       },
        {img: "../Images/boat/boat6.webp",
   
        description: "boAt Airdopes 141 ANC TWS in Ear Earbuds with 32 Db ANC, 42 Hrs Playback, 50Ms Low Latency Beast Mode, Iwp Tech,Quad Mics with Enx,ASAP Charge,USB Type-C Port & Ipx5(Gunmetal Black)",
        totalbuy: "5k+",
        rate: "999",
        originalrate: "2990",
        discount: "67%",
        atyourdoor: "Monday 4 March"
       },
        
        {img: "../Images/boat/boat7.webp",
       
        description: "boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)",
        totalbuy: "5k+",
        rate: "999",
        originalrate: "4490",
        discount: "78%",
        atyourdoor: "Tomorrow 3 March"
       },
        {img: "../Images/boat/boat8.webp",
    
        description: "boAt Rockerz 245 v2 Pro Wireless in Ear Neckband with Up to 30 hrs Playtime, ENx Tech, ASAP Charge, Beast Mode, Dual Pairing, Magnetic Buds,USB Type-C Interface&IPX5(Active Black)",
        totalbuy: "5k+",
        rate: "999",
        originalrate: "3490",
        discount: "71%",
        atyourdoor: "Tomorrow 3 March"
       }

    ];
  return (
    <div>
        <ProductsDetail products = {boatproduct}/>
    </div>
  );
}

export default BoatProductDetail
