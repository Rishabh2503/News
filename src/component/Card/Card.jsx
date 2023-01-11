import React, { Component } from 'react'
import New1 from "..//../images/Picture1.png"
import New2 from "..//../images/Picture2.png"
import New3 from "..//../images/Picture3.png"
import New4 from "..//../images/Picture4.png"
import New5 from "..//../images/Picture5.png"
import { Link } from 'react-router-dom'
import "../Card/card.css"
import wave from '../wave'

export default class Card extends Component {
  render() {
    return (
        <>
        <div className="main">
        {/* <h1>Responsive Card Grid Layout</h1> */}
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={New1}  /></div>
              <div className="card_content">
                <h2 className="card_title">PayPal enables transfer of digital currencies to external wallets</h2>
                <p className="card_text">The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.After rolling out the ability to buy and sell crypto on its platform in October 2020.</p>
                <button className="btn card_btn"><Link to="/New" style={{ textDecoration: 'none' , color:"white" }}> Read More</Link></button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={New2} /></div>
              <div className="card_content">
                <h2 className="card_title">Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget</h2>
                <p className="card_text">Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes.
                Crypto traders in Italy will be subject to a 26% capital-gains tax starting in 2023.</p>
                <button className="btn card_btn"><Link to="/News2" style={{ textDecoration: 'none' , color:"white" }}> Read More</Link></button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={New3} /></div>
              <div className="card_content">
                <h2 className="card_title">Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC</h2>
                <p className="card_text">Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases.</p>
                <button className="btn card_btn"><Link to="/News3" style={{ textDecoration: 'none' , color:"white" }}> Read More</Link></button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={New4}  /></div>
              <div className="card_content">
                <h2 className="card_title">Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022</h2>
                <p className="card_text">2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general.</p>
                <button className="btn card_btn"><Link to="/News4" style={{ textDecoration: 'none' , color:"white" }}> Read More</Link></button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={New5}   /></div>
              <div className="card_content">
                <h2 className="card_title">Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</h2>
                <p className="card_text">The investor drained $110 million in cryptocurrencies from the platform.


Avraham Eisenberg, the crypto investor </p>
                <button className="btn card_btn"><Link to="/News5" style={{ textDecoration: 'none' , color:"white" }}> Read More</Link></button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <wave />
      
      
      </>
    )
  }
}
