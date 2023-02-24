import Head from "next/head";
import Header from "../components/Header";
import PreviewModeMessage from "../components/PreviewModeMessage";
import Content from "../components/Content";
import axios from "axios";

export default function Home({sections}) {
    return (
        <>
            <Head>
                <title>Classroom</title>
            </Head>
            <Header />
            <PreviewModeMessage />
            <Content sections={sections} type='wordlist'/>
        </>
    )
}

export async function getServerSideProps() {
    const result = await axios(`http://localhost:3000/api/sections`);
    const sections = result.data
    return { props: {sections}}
}
