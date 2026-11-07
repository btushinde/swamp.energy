import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Section, Span, Box, Strong, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";



let Data = {
	"wishlist": [
		{
			"name": "Jackery Explorer 500 v2 Power Station, 512Wh/500W, AC Cable Included",
			"link": "https://www.amazon.com/dp/B07SM5HBK1?lv=shuf&hvlocphy=83501&linkCode=df0&hvnetw=o&hvadid=80883033958767&hvbmt=be&hvlocint=&hvdev=c&hvocijid=6927473612843923919-B07SM5HBK1-&hvqmt=e&hvexpln=0&tag=bingshoppinga-20&hvtargid=pla-4584482512651135&channelId=69&ref_=asc_df_B07SM5HBK1&plpRedirect=mhFallback&th=1",
			"image": "https://uploads.quarkly.io/6ad7a98e0ef5e5001f250a10/images/icons8-swamp-100.png?v=2026-10-21T19:19:48.372Z"
		}
		,
		{
			"name": "Second Item",
			"link": "",
			"image": "https://uploads.quarkly.io/6ad7a98e0ef5e5001f250a10/images/icons8-swamp-100.png?v=2026-10-21T19:19:48.372Z"
		}
	]

};

let Wishlist = Data.wishlist.map((item, index) => {
	return <LinkBox
		align-items="flex-start"
		border-width="1px"
		margin="30px 0px 0px 0px"
		md-padding="8px 8px 40px 8px"
		md-flex-wrap="wrap"
		width="100%"
		display="flex"
		padding="32px 32px 32px 32px"
		border-color="--color-light"
		border-style="solid"
		lg-padding="16px 16px 16px 16px"
		md-position="relative"
		flex-direction="row"
		href={item.link}
		key={index}
	>
		<Box
			height="100%"
			display="flex"
			justify-content="space-between"
			md-height="auto"
			md-margin="0px 0px 16px 0px"
			width="65%"
			flex-direction="column"
			align-items="flex-start"
			padding="0px 0px 0px 0px"
			lg-width="50%"
			md-width="100%"
		>
			<Box lg-width="90%" width="75%">
				<Text
					lg-font="600 18px/1.3 &quot;Manrope&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline4"
					color="--dark"
					width="90%"
				>
					Wishlist Item
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					font="--lead"
					color="--dark"
					lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					position="static"
				>
					{item.name}
				</Text>
				<Link
					href={item.link}
					color="#000000"
					font="18px sans-serif"
					text-decoration-line="initial"
					hover-color="rgba(116, 31, 242, 0.62)"
					visited-color="#9e84ff"
					active-color="#da6fc9"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Purchase Here{" "}
						<Strong>
							&gt;
						</Strong>
						{"\n\n"}
					</Strong>
				</Link>
			</Box>
			<Section />
		</Box>
		<Box
			width="35%"
			display="flex"
			lg-width="50%"
			md-width="100%"
			overflow="hidden"
			height="179px"
		>
			<Image
				min-height="336px"
				object-fit="contain"
				transform="translate(0px, -150px)"
				md-max-height="250px"
				md-min-height="16px"
				sm-height="200px"
				src={item.image}
				height="50px"
				order="-1"
				display="block"
				srcSet={item.image}
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Box>
	</LinkBox>;
});

let WishlistDescription = "This is the wishlist of items I need to survive and get back on my feet. If you can help me out, please click the link to purchase the item and have it shipped to me. Thank you for seeing me!";



export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				swamp.energy
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
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				lg-display="flex"
				lg-flex-direction="column"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline3"
					color="--darkL1"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
					height="50% content-box"
				>
					Hello!{" "}
					<br />
					My name is Biko{" "}
					<br />
					<Span
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						color="--grey"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						user-select="auto"
						pointer-events="auto"
					>
						& I am homeless
					</Span>
				</Text>
			</Box>
			<Box
				md-width="100%"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 10%"
				width="60%"
				display="flex"
				md-padding="0px 0px 0px 0px"
				md-margin="32px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Section>
					<Text
						margin="0px 0px 0px 0px"
						font="--lead"
						color="--dark"
						lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
						sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
						md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					>
						My name is Biko. I am a homeless man living on the streets of Chapel Hill, North Carolina. Below are listed some items I need to help me get back on my feet. You may also use the PayPal button to donate directly to me and help me buy food and essential items locally.
						<br />
						<br />
						Every bit helps! Thank you for seeing me!
					</Text>

				</Section>
			</Box>
		</Section>
		<Box
			min-width="100px"
			min-height="100px"
			display="flex"
			flex-direction="row"
			flex-wrap="wrap"
			justify-content="center"
			height="100px"
		/>
		<Section padding="70px 0 30px 0" lg-padding="30px 0 30px 0">
			<Override slot="SectionContent" overflow="visible" margin="-33px 64px 0px 64px" />
			<Text
				margin="0px 0px 18px 0px"
				font="--headline2"
				color="--dark"
				lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				Wishlist
			</Text>
			<Text
				margin="0px 0px 18px 0px"
				font="--headline2"
				color="--dark"
				lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				<Section>
					<Text
						margin="0px 0px 0px 0px"
						font="--lead"
						color="--dark"
						lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
						sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
						md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					>
						{WishlistDescription}
					</Text>

				</Section>

				<Box min-width="100px" min-height="100px" />
			</Text>
			{Wishlist}
		</Section>
		{/* <Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link> */}
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});