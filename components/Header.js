import Link from 'next/link'

const styles = {
    header: {
        height: 60,
    },
    divider: {
        margin: '0 8px',
    },
}

const Header = () => {
    return (
        <header style={styles.header}>
            <Link href="/"><a>Home</a></Link>
            <span style={styles.divider}>|</span>
            <Link href="/post"><a>Post</a></Link>
            <span style={styles.divider}>|</span>
            <Link href="/about"><a>About</a></Link>
        </header>
    )
}
export default Header;