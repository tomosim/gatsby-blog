import React from "react"
import styles from "./about.module.css"

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.emoji}>⛰</h2>
      <p>
        Ex-Army Officer trying to find excuses to stay outside and seek
        adventure.  Currently working in Outdoor Leadership and climbing and
        hiking around New Zealand.
      </p>
    </section>
  )
}
