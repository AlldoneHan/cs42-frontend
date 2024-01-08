'use client';

import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar() {
    return (
        <>
            <div className={styles.wrap}>
                <div>
                    <Link href={"/"}>
                        <span>Nav Bar</span>
                    </Link>
                </div>
            </div>
        </>
    )
}