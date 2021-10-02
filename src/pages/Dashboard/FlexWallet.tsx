import React from "react";
import ListItem from "../../components/shared/ListItem";
import haggle from "../../assets/svg/haggle.svg";
import bitcoin from "../../assets/svg/bitcoin.svg";
// import usdt from '../../assets/svg/usdt.svg'
import bitcoincash from "../../assets/svg/bitcoincash.svg";
import ethereum from "../../assets/svg/ethereum.svg";
import dash from "../../assets/svg/dash.svg";
import litecoin from "../../assets/svg/litecoin.svg";
import dogecoin from "../../assets/svg/dogecoin.svg";
import usdt from "../../assets/images/usdt.png";

import { IFlexWallet } from "../../types/dashboard";
const FlexWallet = () => {
  const flexWalletItems: IFlexWallet[] = [
    {
      image: haggle,
      name: "Haggle",
      code: "HAG",
      amount: 0.0,
    },
    {
      image: bitcoin,
      name: "Bitcoin",
      code: "BTC",
      amount: 0.0,
    },
    {
      image: usdt,
      name: "USDT",
      code: "USDT",
      amount: 0.0,
    },
    {
      image: bitcoincash,
      name: "BCH",
      code: "BCH",
      amount: 0.0,
    },
    {
      image: ethereum,
      name: "Ethereum",
      code: "ETH",
      amount: 0.0,
    },
    {
      image: dash,
      name: "Dash",
      code: "DASH",
      amount: 0.0,
    },
    {
      image: litecoin,
      name: "Litecoin",
      code: "LITE",
      amount: 0.0,
    },
    {
      image: dogecoin,
      name: "Dogecoin",
      code: "DOGE",
      amount: 0.0,
    },
  ];

  return (
    <div>
      {flexWalletItems.map((item, index) => (
        <ListItem<IFlexWallet> {...item} key={index} />
      ))}
    </div>
  );
};
export default FlexWallet;
