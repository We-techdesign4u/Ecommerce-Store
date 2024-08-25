import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerTop">
          <div className="footerlogoSect">
            <h2 className="footerLogo">MY STORE</h2>
            <p>
              There are many variations message of Loren Ipsum available, but
              this one is it for me, yes this is more like it because I still
              need more text to fill up this space.
            </p>
          </div>
          <div className="footerQuickLinks">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="./">Home</Link>
              </li>
              <li>
                <Link href="./">About Us</Link>
              </li>
              <li>
                <Link href="/product/allproducts">Products</Link>
              </li>
              <li>
                <Link href="./">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footerContactSect">
            <h3>Contact</h3>
            <p>
              +234 80 340 77 133, kindly reach out for more designs like this
              one, I probably need more text here too since i see it's small.
            </p>
          </div>
          <div className="footerSub">
            <h3>Subscribe to Our Email</h3>
            <p>For Latest News & Update</p>
            <div className="SubEmailCont"></div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
