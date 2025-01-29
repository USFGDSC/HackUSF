"use client"
import Header from "@/components/header/page";
import styles from "./page.module.css";
import Image from "next/image"

import { useState, useEffect } from "react";

export default function Home() {

  return (
    <div>
      <Header />
      
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.overlay}>
            <div className={styles.title}>
              <p>GDSC x Build with AI Proudly Presents</p>
              <h1>HackUSF 2025</h1>
              <div className={styles.info}>
                <div>April 5-6</div>
                <div>Tampa, FL</div>
                <div>24 Hours</div>
              </div>
            </div>
            <div className={styles.herolinks}>
              <button>Apply Now</button>
              <p>
                Join the <a href="https://devpost.com/" target="_blank">Devpost</a> and <a href="https://discordapp.com/" target="_blank">Discord</a>!
              </p>
            </div>
          </div>

          <div className={styles.picture}>
            <Image src="/newspaper.jpg" alt="newspaper" width={800} height={800} />
          </div>
        </div>

        <div id="about" className={styles.about}>
        <p>HackUSF 2025 is a 24-hour virtual hackathon that brings together students from the University of South Florida and the GDSC community. The event will take place on April 5-6, 2025, in Tampa, Florida.</p>
        <p>Register now and join us in celebrating the incredible journey of GDSC!</p>
        </div>

        <div id="schedule" className={styles.schedule}>
          <p>This is the content of the schedule page.</p>
        </div>

        <div id="prizes" className={styles.prizes}>
          <p>This is the content of the prizes page.</p>
        </div>

        <div id="faq" className={styles.faq}>
          <p>This is the content of the faq page.</p>
        </div>

        <div className={styles.sponsors}>
          <p>This is the content of the sponsors page.</p>
        </div>

        <div className={styles.footer}>
          <p>Made with 🖤 By GDSC</p>
        </div>
      </div>

    </div>
  )
}