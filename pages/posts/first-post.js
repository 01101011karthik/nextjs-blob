import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout'



export default function FirstPost(){
    return(
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
            <h1>First Post</h1>
            <Image 
                src="/images/profile.jpg"
                width={144}
                height={144}
                alt="Just a random Pic"
            />
        </Layout>
    )
}