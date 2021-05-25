import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>test</h1>

                <div className="alert alert-primary" role="alert">
                    This is a primary alert—check it out!
                </div>
                <div className="alert alert-info" role="alert">
                    This is a info alert—check it out!
                </div>
                <div className="alert alert-success" role="alert">
                    This is a success alert—check it out!
                </div>
                <div className="alert alert-danger" role="alert">
                    This is a danger alert—check it out!
                </div>
                <div className="alert alert-warning" role="alert">
                    This is a warning alert—check it out!
                </div>
                <div className="alert alert-default" role="alert">
                    This is a default alert—check it out!
                </div>
            </main>
        </div>
    );
}
