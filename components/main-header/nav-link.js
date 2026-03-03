"use client";
// note that this use client can be placed in main header and we don't need to make this nav-link component but we should alsway use client componetn veryless so all compnent stay and render in server side only
// so always try to make seprate compnent in which we have to load some componenet into client side
// so only that component render to the client side

import styles from "./nav-link.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
    // this is next js hook, and it give currunt path after domain
    // so we can highlight the active part of the web page
    // this is client components so we have to write "use client" at top of the file

    const path = usePathname();

    return (
        <Link
            href={href}
            className={
                path.startsWith(href)
                    ? `${styles.link} ${styles.active}`
                    : styles.link
            }
        >
            {children}
        </Link>
    );
}
