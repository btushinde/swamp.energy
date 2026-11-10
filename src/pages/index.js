import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Section, Span, Box, Strong, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";



let WishlistData = {
	"wishlist": [
		{
			"name": "Jackery Explorer 300 Portable Power Station,292Wh",
			"price":"$289.00",
			"description":"A solar charger I can use to charge all my devices without walking to town and charge my laptop.",
			"link": "https://www.amazon.com/Jackery-Portable-Explorer-Generator-Optional/dp/B082TMBYR6/ref=dp_prsubs_d_sccl_1/132-4675579-6612120?pd_rd_w=eKdoZ&content-id=amzn1.sym.93a570fe-ddb4-4850-9939-42d76f1878cc&pf_rd_p=93a570fe-ddb4-4850-9939-42d76f1878cc&pf_rd_r=KH2N1MNCW6HVWJT46Z5J&pd_rd_wg=so7xb&pd_rd_r=98db0032-6dba-4bba-b8f7-87447bdd4149&pd_rd_i=B082TMBYR6&th=1",
			"image": "https://m.media-amazon.com/images/I/61k1MDuVEIL._AC_SX679_.jpg"
		}
		,
		{
			"name": "100W Portable Solar Panel for Power Station, for Outdoor, RV, Emergency",
			"price":"$109.99",
			"description":"A solar panel to go with the Jackery power station. It would allow me to work on my laptop at my camp rather than walking to Chapel Hill.",
			"link": "https://www.amazon.com/Portable-Efficiency-Foldable-Waterproof-Emergency/dp/B0DK6HRDPR/ref=sr_1_4?crid=Z5IF3AG71FK5&dib=eyJ2IjoiMSJ9.60mvhdbA5FRm-jlvbng60_5K600A7OblIw8tmAlYxb1xQ-yHCu10Gc0dEOufK_0qCdaXfTTMwebeo2-McPc5DlsyHnW0A_5iWwdfwNgmbprEvaTDnF-HEeetF9uJ7crMKCsK5mn6C5nCBKJuZNvj4Edugd2qAn-HBhrHC-gDKLVr2eAPUAG3gIbeJDbuwj6ca7xQw1PpdCO-2bkYWDCTo5E3v3r0tdw7Ra0PFMG0X_m0FnXW3qoMgb0z2qiC63zfkRSZRgcy09ZTjpK1qKTGw7rMiMcAWba4zWG--2jSgRg.mdBcVtAUoLxC5W_umoKD-Gp1lkG3PNQ7ndR1On5cmKA&dib_tag=se&keywords=jackery%2Bsolar%2Bpanel&qid=1794327039&s=lawn-garden&sprefix=jacke%2Clawngarden%2C99&sr=1-4&th=1",
			"image": "https://m.media-amazon.com/images/I/818vHE4EV7L._AC_SX679_.jpg"
		},
		{
			"name": "Pocket Juice 20,000mAh Slim Pro Portable Power Bank, USB-C Input/Output, Dual USB-A Ports 4.5 out of 5 stars (4.5)",
			"price":"$19.88",
			"description":"A rechargable battery bank to keep my devices charged.",
			"link": "https://www.walmart.com/ip/seort/825843107",
			"image": "https://i5.walmartimages.com/seo/Pocket-Juice-Slim-Pro-20-000mAh-Portable-Power-Bank-and-Charger-with-Dual-USB-Ports-Black_552b3c59-5a94-4970-9672-0b042dba467f.9fdb5816d5ea090339e119d9484b7965.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
		},
		{
			"name": "onn 20,000 mAh Portable Power Bank, 20 W Output, Two USB-C and One USB-A Ports, Black",
			"price":"$19.88",
			"description":"A rechargable battery bank to keep my devices charged.",
			"link": "https://www.walmart.com/ip/seort/14816903566",
			"image": "https://i5.walmartimages.com/asr/d0d1f267-e0f8-4b07-9fb5-96be61ef38f5.400902e630de0233034a6dccbff16055.png?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
		},


		{
			"name": "Red Turbine Torch Lighter, Windproof Blue Flame, Refillable for Baking and Grilling",
			"price":"Now $4.56",
			"description":"A windproof lighter I can use to start camp fires and my stove.",
			"link": "https://www.walmart.com/ip/Red-Turbine-Torch-Lighter-Windproof-Blue-Flame-Refillable-for-Baking-and-Grilling/18201710300?classType=VARIANT&from=/search",
			"image": "https://i5.walmartimages.com/seo/Red-Turbine-Torch-Lighter-Windproof-Blue-Flame-Refillable-for-Baking-and-Grilling_471f6d4b-0d32-4332-927e-50ea8b201832.553c6e12acb259d2d263a28cd634b7e6.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
		},
		{
			"name": "SAFAVIEH Braided Daphne Geometric Cotton Reversible Area Rug, Red/Multi, 3'x5'",
			"price":"$49.32",
			"description":"A large area rug I can use to cover the ground in my camp.",
			"link": "https://www.walmart.com/ip/SAFAVIEH-Braided-Daphne-Confetti-Striped-Area-Rug-Red-Multi-2-x-3/393287473",
			"image": "https://i5.walmartimages.com/seo/SAFAVIEH-Braided-Daphne-Geometric-Cotton-Reversible-Area-Rug-Red-Multi-3-x-5_8cf302dc-e034-419a-a1ef-acf4b216efd7.436dde41725b7007ec6b7b1bec685041.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
		},
		{
			"name": "Lepro 6-Pack LED Camping Lanterns, Camping Accessories, 3 Lighting Modes, Batteries Included Hanging Tent Light Bulbs with Clip Hook for Camping, Hiking, Hurricane, Outages, Collapsible",
			"price":"$18.88",
			"description":"Camping lights I can hang around my tent and on my pack while walking at night.",
			"link": "https://www.walmart.com/ip/Lepro-4-Pack-LED-Camping-Lanterns-Camping-Accessories-3-Lighting-Modes-Batteries-Included-Hanging-Tent-Light-Bulbs-Clip-Hook-Camping-Hiking-Hurricane/20033972643",
			"image": "https://i5.walmartimages.com/seo/Lepro-6-Pack-LED-Camping-Lanterns-Camping-Accessories-3-Lighting-Modes-Batteries-Included-Hanging-Tent-Light-Bulbs-Clip-Hook-Camping-Hiking-Hurricane_484d8cd0-dcaa-49b7-90a2-c3466e0c68d5.3d9cc4f1f87fc697d399a77756b5d70d.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
		},
		{
			"name": "Duracell Coppertop AAA Alkaline Batteries 16/Pack",
			"price":"$18.88",
			"description":"Camping lights I can hang around my tent and on my pack while walking at night.",
			"link": "https://www.walmart.com/ip/Duracell-Coppertop-AAA-Alkaline-Batteries-16-Pack/20403855425?classType=REGULAR&athbdg=L1300&from=/search",
			"image": "https://i5.walmartimages.com/seo/Duracell-Coppertop-AAA-Alkaline-Batteries-16-Pack_f9cac43d-22bc-42f9-9513-b36b9be50ddd.a722fafd9a6fd059f7cdda0f5f77f3a4.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF9cc4f1f87fc697d399a77756b5d70d.jpeg?odnHeight=573&odnWidth=573&odnBg=FFFFFF"
		}
		
	]

};

let Wishlist = WishlistData.wishlist.map((item, index) => {
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
					{item.name} - <strong>{item.price}</strong>
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					font="--lead"
					color="--dark"
					lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					position="static"
				>
					{item.description}
				</Text>
				<Link
					href={item.link}
					target="_blank"
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

let WishlistDescription = `This is the wishlist of items I need to survive and get back on my feet. If you can help me out, please click the link to purchase the item and have it shipped to me. Thank you for seeing me! `

let WishlistDescription2 = `
Please mail all packages containing wishlist items to the following address:`;



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
						<br />

					</Text>
					<br/>
					<Text
						margin="0px 0px 0px 0px"
						font="--lead"
						color="--dark"
						lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
						sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
						md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					>
						<h3><Link href="http://www.paypal.me/swampenergy" target="_blank">Donate to PayPal Here</Link>
						</h3>
						
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
						<br />
						<br />
						{WishlistDescription2}
						<p>
						<strong>Biko Tushinde</strong>
						<br />
						<strong>5014 Tanglewood Drive</strong>
						<br />
						<strong>Raleigh, NC 27612</strong>
						</p>
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