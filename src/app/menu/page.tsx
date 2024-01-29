import React from "react";
import Card_menu from "@/components/Card-menu/Card-menu";

const menuItems = [
  {
    title: "Sushis Salmon and Avocado",
    image: "/images/assets/sushi-2.jpg",
  },
  {
    title: "Sushis Plates",
    image: "/images/assets/sushi.jpg",
  },
  {
    title: "Ramen Shrimp",
    image: "/images/assets/ramen-2.jpg",
  },
  {
    title: "Ramen Ghibli",
    image: "/images/assets/ramen.jpg",
  },
];

export default function menu() {
  return (
    <div className="menu">
      <h1>Our Specialties</h1>
      <div className="menu-card">
        {menuItems.map((item) => (
          <Card_menu key={item.title} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
}
