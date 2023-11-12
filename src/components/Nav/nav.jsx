'use client'
import React from 'react'
import Link from 'next/link'
import { styles } from './styles';
import { links } from '@/constants';

const nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className="mt-16 w-max">
        {links.map(link => {
          return (
            <li key={link.url} >
              <Link href={link.url} className={styles.navLink}>
                <span className={styles.navLine}></span>
                <span className={styles.navText}>{link.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default nav