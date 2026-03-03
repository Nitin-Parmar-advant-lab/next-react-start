// "use client"

import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    {/* Next js has build in Image tag for image that automaticlly enable 
                    lazzy loading and optimize image performance in web, so use Image rather then img html tag */}
                    {/* <img src={logoImg.src} alt="A plate with food" /> */}
                    <Image src={logoImg} alt="A plate with food" priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">
                                Foodies Community
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
