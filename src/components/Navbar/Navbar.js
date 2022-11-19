import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <section>
        <h1 className="navbar__title">Оставь свой отзыв!</h1>

        <div className="navbar__content">
          <div className="navbar__links">
            <Link to="/">Отзывы</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
