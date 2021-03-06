import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getBase64ImageUrl } from '../utils';

function Home({ exampleImage }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blurred image placeholder with Next.js image and cloudinary</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Blurred image placeholder</h1>
                <h2 className={styles.subtitle}>with Next.js image and cloudinary</h2>
                <div className={styles.imagewrapper}>
                    <Image
                        src={exampleImage.src}
                        alt="Example"
                        width="1920"
                        height="1280"
                        layout="responsive"
                        quality="75"
                        sizes="60vw"
                        placeholder="blur"
                        blurDataURL={exampleImage.blurDataUrl}
                    />
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const imageSrc = process.env.CLOUDINARY_EXAMPLE_IMAGE_SRC;
    if (!imageSrc) {
        throw new Error('Missing CLOUDINARY_EXAMPLE_IMAGE_SRC env variable');
    }

    const blurDataUrl = await getBase64ImageUrl(imageSrc);
    return {
        props: {
            exampleImage: {
                src: imageSrc,
                blurDataUrl: blurDataUrl,
            },
        },
    };
}

export default Home;
