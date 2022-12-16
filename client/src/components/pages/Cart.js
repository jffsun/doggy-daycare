import React from 'react';
import meme from '../../assets/74ic7c.jpeg'

export default function Cart() {
  return (
    <div className="container">
      <h1>Cart</h1>
      <br />
      <img src={meme} alt='cart' height="400px"></img>
    </div>
  );
}

