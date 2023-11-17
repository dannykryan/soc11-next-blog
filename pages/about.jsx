import Link from "next/link"

export default function AboutPage() {
    return (
        <>
            <h1>THIS IS AN ABOUT PAGE</h1>
            <Link href="/">Home</Link><br/>
            <Link href="./blogs/">Blogs</Link>
        </>
    )
}