import femaleImg from '../resources/female-img.jpg';
import maleImg1 from '../resources/man-img1.jpg';
import maleImg2 from '../resources/man-img4.jpg';
import heroimg from '../resources/63771.png';
import img1 from '../resources/Screenshot 2025-04-13 231635.png';
import download from '../resources/download.jpeg';
import screenshot from '../resources/Screenshot_2025-04-03_205909.png';
import {
	RestaurantComponent,
	Form,
	InfoCard,
	DishComponent,
	Slide,
	ScrollAnimations,
} from '../components/components';
import img from '../resources/Screenshot 2025-04-13 231635.png';
import { useRef, createRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

// export let restaurants = [
// 	{
// 		name: 'La Tavola Italiana',
// 		imageSrc: download,
// 		description:
// 			'A cozy Italian bistro offering classic pasta, wood-fired pizzas, and a wide selection of Italian wines.',
// 		address: '123 Via Roma, Naples, FL 34102',

// 		rating: '4.8',
// 		phone: '(239) 555-1234',
// 		email: 'contact@latavolaitaliana.com',
// 	},
// 	{
// 		name: 'Sakura Sushi Bar',
// 		imageSrc: download,
// 		description:
// 			'Traditional Japanese sushi and sashimi served fresh daily in a minimalist, modern setting.',
// 		address: '456 Cherry Blossom Lane, San Diego, CA 92101',

// 		rating: '4.8',
// 		phone: '(619) 555-5678',
// 		email: 'hello@sakurasushi.com',
// 	},
// 	// {
// 	// 	name: 'Big Smoke BBQ',
// 	// 	imageSrc: download,
// 	// 	description:
// 	// 		'Smoky, tender brisket, ribs, and southern-style sides served with a hearty dose of hospitality.',
// 	// 	address: '789 Pitmaster Rd, Austin, TX 73301',

// 	// 	rating: '4.8',
// 	// 	phone: '(512) 555-8765',
// 	// 	email: 'info@bigsmokebbq.com',
// 	// },
// 	// {
// 	// 	name: 'Green Haven Café',
// 	// 	imageSrc: download,
// 	// 	description:
// 	// 		'A vegan-friendly spot with a seasonal plant-based menu, cold-pressed juices, and eco-conscious decor.',
// 	// 	address: '101 Earthway Blvd, Boulder, CO 80301',

// 	// 	rating: '4.8',
// 	// 	phone: '(303) 555-4321',
// 	// 	email: 'support@greenhavencafe.com',
// 	// },
// 	// {
// 	// 	name: 'Maison Douce',
// 	// 	imageSrc: download,
// 	// 	description:
// 	// 		'Authentic French patisserie known for artisanal pastries, croissants, and luxurious desserts.',
// 	// 	address: '202 Rue de Paris, New Orleans, LA 70130',

// 	// 	rating: '4.8',
// 	// 	phone: '(504) 555-1122',
// 	// 	email: 'bonjour@maisondouce.com',
// 	// },
// 	// {
// 	// 	name: 'The Dockyard Catch',
// 	// 	imageSrc: download,
// 	// 	description:
// 	// 		'A rustic seafood shack serving fresh oysters, fish and chips, and coastal favorites right by the water.',
// 	// 	address: '303 Harbor View Dr, Charleston, SC 29401',

// 	// 	rating: '4.8',
// 	// 	phone: '(843) 555-7788',
// 	// 	email: 'fresh@dockyardcatch.com',
// 	// },
// ];

export let restaurantServices = [
	{
		class: 'fa-solid fa-file-signature',
		title: 'Report Generation',
		details:
			'Provides comprehensive insights into daily, weekly, or monthly sales figures, customer activity.',
	},
	{
		class: 'fa-solid fa-hourglass-clock',
		title: 'Real-Time Order Updates',
		details:
			'Alerts you the moment a customer places an order, enabling faster processing and improved customer satisfaction.',
	},
	{
		class: 'fa-solid fa-wallet',
		title: 'Wallet Balance',
		details:
			"Continuously updates your account balance, giving you a clear view of how much you've earned from sales without delay.",
	},
	{
		class: 'fa-solid fa-money-from-bracket',
		title: 'Automatic Wallet Withdrawal',
		details:
			'Seamlessly transfers your wallet earnings to your linked bank account at scheduled intervals without needing manual intervention.',
	},
];

export let customerServices = [
	{
		class: 'fa-solid fa-hand-point-ribbon',
		title: 'Easy-to-Use App',
		details:
			'User-friendly interface that allows customers to easily explore food options, place orders quickly, and follow the status of their deliveries.',
	},
	{
		class: 'fa-solid fa-box-circle-check',
		title: 'Real-Time Order Tracking',
		details:
			'Provides live updates on your order’s location and estimated delivery time for better transparency and convenience.',
	},
	{
		class: 'fa-solid fa-credit-card-front',
		title: 'Multiple Payment Options',
		details:
			'Offers flexibility and convenience by supporting various secure payment methods based on customer preference.',
	},
	{
		class: 'fa-solid fa-gallery-thumbnails',
		title: 'Internal Dashboard',
		details:
			'A centralized platform for managing and overseeing all order and delivery operations.',
	},
	{
		class: 'fa-solid fa-display-chart-up-circle-currency',
		title: 'Track all orders in real-time',
		details:
			'View and monitor all orders as they are placed, processed, and completed with live updates.',
	},
	{
		class: 'fa-solid fa-bars-progress',
		title: 'Monitor delivery progress',
		details:
			'Track the status of deliveries and assign drivers efficiently to optimize delivery times.',
	},
];

// export let dishes = [
// 	{
// 		image: img,
// 		title: 'spicy burger',
// 		details:
// 			'turn up the heat with our spicy burger, juicy patty, fiery jalapenos, melted pepper jack cheese, and a kick sauce.',
// 		price: '#7k',
// 		deliveryFee: '#800 delivery fee',
// 		id: '1012',
// 	},
// 	{
// 		image: img,
// 		title: 'cold burger',
// 		details:
// 			'turn up the heat with our spicy burger, juicy patty, fiery jalapenos, melted pepper jack cheese, and a kick sauce.',
// 		price: '#7k',
// 		deliveryFee: '#800 delivery fee',
// 		id: '1013',
// 	},
// 	{
// 		image: img,
// 		title: 'hot burger',
// 		details:
// 			'turn up the heat with our spicy burger, juicy patty, fiery jalapenos, melted pepper jack cheese, and a kick sauce.',
// 		price: '#7k',
// 		deliveryFee: '#800 delivery fee',
// 		id: '1014',
// 	},
// 	{
// 		image: img,
// 		title: 'chill burger',
// 		details:
// 			'turn up the heat with our spicy burger, juicy patty, fiery jalapenos, melted pepper jack cheese, and a kick sauce.',
// 		price: '#7k',
// 		deliveryFee: '#800 delivery fee',
// 		id: '1015',
// 	},
// ];

export let services = createRef();
export let dish = createRef();

export let Home = () => {
	let slide = useRef();
	let prev = useRef();
	let next = useRef();
	const { data, isLoading, isLoadingError } = useQuery({
		queryKey: ['restaurant'],
		queryFn: () => {
			return Axios.get(
				'https://foodbyt-app-production-53ejks.laravel.cloud/api/v1/client/vendors'
			).then((res) => res.data);
		},
	});

	if (isLoading) {
		console.log('Loading');
	} else if (isLoadingError) {
		console.log('error on load');
	} else {
		let dishes = [];
		data.forEach((element) => {
			dishes.push(...element.dishes);
		});
		console.log(dishes);

		return (
			<>
				<section class='hero-section'>
					<div class='text'>
						<h1>
							Enjoy your delicious{' '}
							<span>
								food <i class='fa-regular fa-atom'></i>
							</span>
						</h1>
						<p>
							Foodbyt is a revolutionary food delivery platform designed to connect
							restaurants with customers seamlessly. Based in Maiduguri, Nigeria,
							Foodbyt charges no commission fees to restaurants!
						</p>
						<div>
							<a href=''>
								<button class='regular-btn'>see menu</button>
							</a>
							<a href=''>
								<button class='light-btn'>order now</button>
							</a>
						</div>

						<div>
							<div>
								<img
									src={femaleImg}
									alt=''
								/>
								<img
									src={maleImg1}
									alt=''
								/>
								<img
									src={maleImg2}
									alt=''
								/>
							</div>
							<div>
								<h6>our happy customer</h6>
								<p>
									<i class='fa-solid fa-star'></i>4.8
								</p>{' '}
								<span>(12, 000 reviews)</span>
							</div>
						</div>
					</div>
					<div class='hero-image'>
						<img
							src={heroimg}
							alt=''
						/>
						<div class='background'></div>
						<div class='sparkles'>
							<div></div>
							<div></div>
							<p class='p1'>😀</p>
							<p class='p2'>🍕</p>
							<p class='p3'>🍔</p>
							<p class='p4'>🍒</p>
						</div>
						<div class='comments first'>
							<i class='fa-solid fa-phone'></i>
							<div>
								<h6>Phone Number</h6>
								<p>+234 913 338 9120</p>
							</div>
						</div>
						<div class='comments second'>
							<div>
								<img
									src={img1}
									alt=''
								/>
							</div>
							<div>
								<h6>our happy customer</h6>
								<p>
									<i class='fa-solid fa-star'></i>4.8
								</p>{' '}
								<span>(12, 000 reviews)</span>
							</div>
						</div>
						<div class='comments third'>
							<h6>"A very efficient response, too good to be true!"</h6>
						</div>
					</div>
				</section>

				<section
					class='services'
					id='services'
					ref={services}>
					<div class='text'>
						<header>our services</header>
						<h2>What we offer</h2>
					</div>
					<div class='sub-sec'>
						<div class='sub-class'>
							<h5>For restaurants</h5>
							{restaurantServices.map((object) => {
								return (
									<>
										<InfoCard infocard={object} />
									</>
								);
							})}
						</div>
						<div class='sub-class'>
							<h5>For Customers</h5>
							{customerServices.map((object) => {
								return (
									<>
										<InfoCard infocard={object} />
									</>
								);
							})}
						</div>
					</div>
				</section>

				<section
					class='restaurants'
					id='restaurants'>
					<div class='text'>
						<header>Our Restaurants</header>
						<h2>the most popular</h2>
					</div>
					<div
						class='sub-sec slide'
						ref={slide}>
						{data?.map((element) => {
							return <RestaurantComponent cardItems={element} />;
						})}
					</div>
					<div class='navigation'>
						<i
							class='prev fa-solid fa-angle-left'
							ref={prev}></i>
						<i
							class='next fa-solid fa-angle-right'
							ref={next}></i>
					</div>
					<a href='/vendor'>
						<button class='light-btn'>see more</button>
					</a>
					{
						// useEffect(() => {
						<Slide
							slide={slide}
							next={next}
							prev={prev}
						/>
						// console.log(slide.current);

						// })
					}
				</section>

				<section class='mission'>
					<div class='text'>
						<h2>our journey</h2>
						<p>
							Our story is one of continuous growth and evolution. We started as a
							small team with big dreams, determined to create a food ordering
							platform that transcended the ordinary.
						</p>
					</div>
					<div class='sub-sec'>
						<div>
							<h5>
								<i class='fa-solid fa-eye-low-vision'></i>Vision
							</h5>
							<p>
								To become the leading food delivery platform in Maiduguri,
								empowering local restaurants and delighting customers with
								exceptional service.
							</p>
						</div>
						<div>
							<h5>
								<i class='fa-solid fa-rectangles-mixed'></i>mission
							</h5>
							<p>
								To revolutionize food delivery by providing a seamless platform for
								restaurants and customers, ensuring convenience, speed, and
								affordability.
							</p>
						</div>
					</div>
				</section>

				<section class='review'>
					<img
						src={screenshot}
						alt=''
					/>
					<div class='text'>
						<div class='txt'>
							<header>our Reviews</header>
							<h2>what customers say</h2>
						</div>
						<div class='sub-sec'>
							<div>
								<div>
									<img
										src={maleImg2}
										alt=''
									/>
									<div>
										<h5>Muhammad sani</h5>
										<span>
											<i class='fa-solid fa-star'></i>4.8
										</span>
									</div>
								</div>
								<p>
									"The service was fantastic! ordering was a breeze delivery was
									prompt, and the food arrived fresh and delicious. highly
									recommend!"
								</p>
							</div>
						</div>
					</div>
				</section>

				<section
					class='pricing'
					id='pricing'
					ref={dish}>
					<div class='text'>
						<header>Our price</header>
						<h2>get our best Offer</h2>
					</div>
					<div class='sub-sec'>
						{dishes.map((obj) => {
							return <DishComponent obj={obj} />;
						})}
					</div>
				</section>

				<section class='contact pop-up'>
					<div class='text'>
						<header>contact us</header>
						<h2>Let's Connect</h2>
						<p>
							We're excited to connect with you. we're here to answer your questions
							and provide the assistance you need.
						</p>
					</div>
					<Form />
				</section>
				{/* <ScrollAnimations /> */}
			</>
		);
	}
};
