import "../styles/global.css";
import Head from 'next/head'
import TitleInfo from "../data/TitleInfo.json";

export default function MySite({ Component, pageProps }) {
	return (
		<>
		<Head>
			<title>{TitleInfo.title}</title>
			<meta
       			name="description"
				content={TitleInfo.subheadding}
				key="desc"
			/>
		</Head>
		<Component {...pageProps} />;
		</>
	)
}
