import Image from "next/image";
import styles from "../styles/Header.module.scss"
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navigation}>
                <button>Back</button>
                <div id={styles.pin}>
                    <Image src='/pin_icon.svg' width={13.97} height={13.97} alt='pin'></Image>
                    <span>Pin the unit</span></div>
            </div>
            <div className={styles.members}>
                <button id={styles.addMember}><Image src='/add_member_icon.png' width={18.33} height={13.33} alt='add member'></Image></button>
                <Image className={styles.member} src='/member1.png' width={32} height={32} alt='member'></Image>
                <Image className={styles.member} src='/member2.png' width={32} height={32} alt='member'></Image>
                <button id={styles.signOut}><Image src='/sign_out_icon.png' width={16.66} height={16.67} alt='sign out'></Image></button>
            </div>
        </header>
    )
}