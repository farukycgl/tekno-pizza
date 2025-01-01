import React from "react"
import  "./Header.css";


export default function Header() {

    return <header>
        <div className="header">
        <img src=".\images\iteration-1-images\logo.svg" alt="" />
        <ul className="links">
                <li><a href="/home">Anasayfa</a></li>
                <span>-</span>
                <li><a href="/orderpizza">Sipariş Oluştur</a></li>
            </ul>
        </div>
        </header>

}