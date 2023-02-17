import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import PreviewModeMessage from "@/components/PreviewModeMessage";
import Content from "@/components/Content";
export default function Home() {
  return (
    <>
        <Head>
            <title>Classroom</title>
        </Head>
        <Header />
        <PreviewModeMessage />
        <Content />
    </>
  )
}
