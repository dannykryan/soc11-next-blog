import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return(
        
             <navbar className ="navbar">
        <Link href="/">Home</Link> <br />
        <Link href="/about">About Page</Link> <br />
        <Link href="./blogs/">Blogs</Link>
      </navbar>
       
    )
}