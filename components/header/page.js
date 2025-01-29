"use client"
import styles from "./page.module.css"
import Image from "next/image"
import { Button } from "@mui/material"
import { Poppins } from "next/font/google"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Header() {
    const router = useRouter()

    return (
        <header className={styles.header}>
            <Image src="/gdsclogo.webp" alt="logo" width={40} height={40} />
            <nav className={styles.navbar}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#prizes">Prizes</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <Button onClick={() => router.push("/sign-in")} variant="contained" sx={{ borderRadius: "2rem", fontFamily: poppins.style.fontFamily, textTransform: 'none', fontWeight: '500', fontSize: 'large' }}>Login</Button>
                </ul>
            </nav>
        </header>
    )
}