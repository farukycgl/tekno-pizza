import React from "react"
import "./Header.css";
import { Link } from "react-router-dom";


export default function Header() {

    return <header>
        <div className="header">
            <img src=".\images\iteration-1-images\logo.svg" alt="" />
            <ul className="links">
            <li>
            <Link to="/home">Anasayfa</Link>
          </li>
          <span>-</span>
          <li>
            <Link to="/orderPizza">Sipariş Oluştur</Link>
          </li>
            </ul>
        </div>
    </header>

}