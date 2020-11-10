import React from "react"
import styles from "./about.module.css"

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.emoji}>⛰</h2>
      <p>
        Queer hiker, climber and biker trying to find excuses to stay outside and seek adventure. Currently trying to recreate responsibly, challenge dominant perceptions in the outdoors industry and enjoy having the Peak District on my doorstep
      </p>
    </section>
  )
}
