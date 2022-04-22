import React from "react";
import styles from "../../styles/NavBar.module.css";
import Link from "next/link";
import { useRouter, Router } from "next/router";

// Pages

const NavBar = () => {
  // To highlight the current page
  const router = useRouter();
  const isActive = (route) => {
    if (route == router.pathname) {
      return "active";
    } else "";
  };

  return (
    <>
      <div className={styles.parentStyleContainer}>
        <div className={styles.betaSection}>
          <Link href="/" passHref>
            <a className={styles.name}>Venskart</a>
          </Link>
        </div>
        <nav className={styles.parentContainer}>
          <div className={styles.desktopBetaSection}>
            <Link href="/" passHref>
              <h3 className={styles.name}>Venskart</h3>
            </Link>
          </div>
          <ul className={styles.desktopNav}>
            <li>
              <Link href="/" passHref className="tabText">
                <a className={isActive("/")}>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/cart" passHref className="tabText">
                <a className={isActive("/cart")}>My Cart</a>
              </Link>
            </li>
            <li>
              <Link href="/myAccount" passHref className="tabText">
                <a
                  className={isActive(
                    "/myAccount" || "/login" || "/createaccount"
                  )}
                >
                  My Account
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
