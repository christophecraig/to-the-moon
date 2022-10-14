import React, { useEffect, useState } from 'react'
import './Box.scss'
// import { getPrice } from '../Data/Data'
const axios = require('axios')
const VS_CURRENCY = 'usd'
const COIN_IDS = 'bitcoin,binancecoin,ethereum,cumrocket,crypto-com-chain,fantom,chainlink,voxies,vvs-finance,vechain'

function Box() {
  const [items, setItems] = useState([] as any[])
  // le tableau vide de dépendances [] indique que useEffect ne s’exécutera qu’une fois
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${VS_CURRENCY}&ids=${COIN_IDS}`)
      .then((response) => {
        setItems(response.data)
        console.log(response.data)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <ul className="flex">
      {items.map((item) => (
        <li className="Box" key={item.id}>
          <div className="token-img-container"><img className="token-img" alt={item.name + ' logo'} src={item.image}/></div>
          <h4 className="capitalize bold">${item.symbol}</h4>
          <div className='price'>
            <main>{item.current_price} USD
            <div className={'24h-change ' + (item.price_change_percentage_24h > 0 ? 'positive' : 'negative')}>{item.price_change_percentage_24h > 0 ? '+' + item.price_change_percentage_24h : item.price_change_percentage_24h }%</div></main>
            <div className="all-time-low">{item.atl}
            <time>{new Date(item.atl_date).toLocaleDateString()}</time></div>
            <div className="all-time-high">{item.ath}
            <time>{new Date(item.ath_date).toLocaleDateString()}</time>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Box
