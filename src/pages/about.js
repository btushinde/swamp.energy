import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Section, Span, Box, Strong, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";




export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				You choose are great vacation
			</title>
			<meta name={"description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:title"} content={"swamp.energy"} />
			<meta property={"og:description"} content={"Help me gather resources and survive outside in Chapel Hill, NC"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/OGimage.png?v=2021-09-23T20:32:10.363Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6ad7a98e0ef5e5001f250a10/images/icons8-swamp-100.png?v=2026-10-21T19:19:48.372Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6ad7a98e0ef5e5001f250a10/images/icons8-swamp-100.png?v=2026-10-21T19:19:48.372Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6ad7a98e0ef5e5001f250a10/images/icons8-swamp-100.png?v=2026-10-21T19:19:48.372Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6ad7a98e0ef5e5001f250a10/images/icons8-swamp-100.png?v=2026-10-21T19:19:48.372Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6ad7a98e0ef5e5001f250a10/images/icons8-swamp-100.png?v=2026-10-21T19:19:48.372Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6ad7a98e0ef5e5001f250a10/images/icons8-swamp-100.png?v=2026-10-21T19:19:48.372Z"} />
			<meta name={"msapplication-TileColor"} content={"#ffffff"} />
		</Helmet>
		<Section padding="60px 0 20px 0" quarkly-title="HeroBlock">
			<Text
				color="--dark"
				lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
				margin="0px 0px 0px 0px"
				font="--headline1"
				order="-1"
				align-self="flex-start"
				width="50% content-box"
				sm-font="normal 800 45px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				swamp.energy
			</Text>
			<Image
				max-height="600px"
				object-position="0% 80%"
				lg-max-height="300px"
				md-max-height="200px"
				sm-max-height="150px"
				src="https://images.unsplash.com/photo-1614572864963-045021567dc9?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
				width="100%"
				object-fit="cover"
				margin="32px 0px 0px 0px"
				srcSet="https://images.unsplash.com/photo-1614572864963-045021567dc9?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1614572864963-045021567dc9?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1614572864963-045021567dc9?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1614572864963-045021567dc9?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1614572864963-045021567dc9?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1614572864963-045021567dc9?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1614572864963-045021567dc9?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>

		<Section padding="60px 0 60px 0" quarkly-title="ContentBlock">
			<Image src="./images/under_construction.gif" />
			<Text>swamp witch</Text>
			<RawHtml>
				<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
					{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
				</style>
			</RawHtml>
		</Section>
	</Theme>;
});