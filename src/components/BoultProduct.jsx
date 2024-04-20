import React from "react";
import ProductsDetail from "./ProductsDetail";

function BoultProduct() {
  const boultproduct = [
    {
      img: "../Images/boult/boult1.webp",

      description:
        "Boult Audio Z40 True Wireless in Ear Earbuds with 60H Playtime, Zen™ ENC Mic, Low Latency Gaming, Type-C Fast Charging, Made in India, 10mm Rich Bass Drivers, IPX5, Bluetooth 5.3 Ear Buds TWS (Blue)",
      totalbuy: "4k+",
      rate: "1299",
      originalrate: "4999",
      discount: "74%",
      atyourdoor: "Thursday 7 March",
    },
    {
      img: "../Images/boult/boult2.webp",

      description:
        "Boult Audio BassBuds X1 in-Ear Wired Earphones with 10mm Extra Bass Driver and HD Sound with mic(Black)",
      totalbuy: "3k+",
      rate: "349",
      originalrate: "999",
      discount: "65%",
      atyourdoor: "Tomorrow 4 March",
    },
    {
      img: "../Images/boult/boult3.webp",

      description:
        "Boult Audio Ammo True Wireless in Ear Earbuds with 40ms Lowest Latency, 40H Playtime, ENC Mic, 13mm Bass Drivers, Interactive LED, Type-C Fast Charging (10Min=150min) Bluetooth Ear Buds",
      totalbuy: "200+",
      rate: "1299",
      originalrate: "4999",
      discount: "74%",
      atyourdoor: "Wednesday 6 March",
    },
    {
      img: "../Images/boult/boult4.webp",

      description:
        "Boult Audio ZCharge Bluetooth Earphones with 40H Playtime, Dual Pairing Neckband, Zen™ ENC Mic, Type-C Fast Charging (10Mins=15Hrs), Biggest 14.2mm Bass Driver IPX5 Premium Silicone Neck Band (Black)",
      totalbuy: "1k+",
      rate: "899",
      originalrate: "4999",
      discount: "82%",
      atyourdoor: "Wednesday 6 March",
    },
    {
      img: "../Images/boult/boult5.webp",

      description:
        "Boult Audio BassBuds X1 in-Ear Wired Earphones with 10mm Extra Bass Driver and HD Sound with mic(Blue)",
      totalbuy: "2k+",
      rate: "349",
      originalrate: "999",
      discount: "65%",
      atyourdoor: "Thursday 7 March",
    },
    {
      img: "../Images/boult/boult6.webp",

      description:
        "Boult Audio RCharge Wireless in Ear Bluetooth Earphones with ENC Mic, 30H Playtime, 50ms Low Latency Gaming Mode, Dual Pairing, Type-C Fast Charging (10Min=12Hrs), 10mm Bass Drivers Neckband (Green)",
      totalbuy: "5k+",
      rate: "799",
      originalrate: "1799",
      discount: "56%",
      atyourdoor: "Wednesday 6 March",
    },

    {
      img: "../Images/boult/boult7.webp",

      description:
        "Boult Audio Truebuds with 30H Playtime, IPX7 Waterproof, Made in India, Type C Fast Charging (10Min=100Mins), Rich Bass, Pro+ Calling HD Mic, IPX5 Airbass Bluetooth True Wireless Earbuds (Grey)",
      totalbuy: "500+",
      rate: "999",
      originalrate: "7999",
      discount: "88%",
      atyourdoor: "Wednesday 6 March",
    },
    {
      img: "../Images/boult/boult8.webp",

      description:
        "Boult Audio Z60 Truly Wireless in Ear Earbuds with 60H Playtime, 4 Mics ENC Clear Calling, 50ms Low Latency Gaming, 13mm Bass Driver, Type-C Fast Charging, IPX5 ear buds TWS Bluetooth 5.3(Raven Black)",
      totalbuy: "1k+",
      rate: "1299",
      originalrate: "2999",
      discount: "57%",
      atyourdoor: "Wednesday 6 March",
    },
  ];
  return (
    <div>
      <ProductsDetail products={boultproduct} />
    </div>
  );
}

export default BoultProduct;
