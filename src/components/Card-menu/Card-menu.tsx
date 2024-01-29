/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Card_menu({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button>Order Now</button>
    </div>
  );
}
