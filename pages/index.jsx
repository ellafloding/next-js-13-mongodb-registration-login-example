import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { userService } from 'services';



export default Home;

function Home() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p>You&apos;re logged in with Next.js & JWT!!</p>
                <p><Link href="/users">Manage Users</Link></p>
                <p><Link href="/pictures">Upload image</Link></p>
            </div>
        </div>
    );
}
