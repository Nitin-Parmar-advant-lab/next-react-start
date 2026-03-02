import Link from "next/link";
import Header from "./about/header";

export default function Home() {
    // console.log("5+5");

    return (
        // A route becomes public when a page or route file exists
        <main>
            {/* Componenets can be placed anywhere */}
            <Header/>
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p><Link href="/about">About</Link></p>
            <p><Link href="/blog">Blog</Link></p>
        </main>
    );
}
