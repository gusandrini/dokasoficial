'use client';
import React, { useState } from "react";
import './navbar.css';

const Navbar: React.FC = () => {
  // Para alterar as classes da barra de hambúrguer
  const [burgerClass, setBurgerClass] = useState<string>("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState<string>("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  // Alterar o menu da barra de hambúrguer
  const updateMenu = (): void => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>
      </nav>

      <div className={menuClass}>
        <ul className="menu-items">
          <li></li>
          <li></li>
          <li><a href="/">Início</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/sobre">Sobre Nós</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
