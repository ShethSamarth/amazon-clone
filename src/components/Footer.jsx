import React from "react";

function Footer(){
    return(
        <div class="footer">
      <div class="footer_row d-flex">
        <div class="logo">
          <img src="assets/logo.png" alt="" />
        </div>
        <div class="pages">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="contact">
          <ul>
            <li>
              <a href="#"
                ><i class="fas fa-map-marker-alt"></i>
                <span>Surat, Gujarat</span></a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fas fa-envelope-open-text"></i>
                <span>samarth.sheth.29@gmail.com</span></a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="developer">
        <a href="#">Desinged By ~ <span>Samarth Sheth</span></a>
      </div>
    </div>
    )
}

export default Footer;