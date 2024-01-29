import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <h1>Taste the tradition of japan</h1>
          <p>
            Experience the best of authentic Japanese cuisine at our fancy
            Japanese restaurant. Our menu features a wide range of traditional
            dishes, expertly prepared by our skilled chefs, using only the
            freshest ingredients.
          </p>
          <button>
            <Link href="/menu">Order Now</Link>
          </button>
        </div>
        <div className="home-hero">
          <img src="/images/assets/ramen-removebg-preview.png" alt="" />
        </div>

        <img className="girl" src="/images/assets/japanese-girl.png" alt="" />

        <img src="/images/assets/girl-2.png" alt="" className="girl-2" />
      </div>
    </>
  );
}
