// import {
//   dataBase,
//   dataBase_1W_1D,
// } from "../../Synchronous [Backend]/Synchronous [Backend]/db_test";

import { temp } from "./db2";

// const temp = {
//   price: `$${25000}`,
// };

const logo = document.querySelector("h1");
logo.style.backgroundColor = "red";

const coinPairTicker = document.createElement("h2");
coinPairTicker.innerText = "BTC/USDT Price: " + temp.price;

document.body.appendChild(coinPairTicker);

console.log(dataBase);
