import { dishes, restaurants } from './home';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import {
	PricingCardDetails,
	ScrollAnimations2,
	Slide,
	DishComponent,
} from '../components/components';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import useMeta from '../useMeta';

export let Vendors = () => {
	const { data, isLoading, isLoadingError } = useQuery({
		queryKey: ['restaurant'],
		queryFn: () => {
			return Axios.get(
				'https://foodbyt-app-production-53ejks.laravel.cloud/api/v1/client/vendors'
			).then((res) => res.data);
		},
	});
	let { linkid } = useParams();
	let contentArr;

	let check = (element) => {
		if (element.name == linkid) {
			contentArr = element;
		}
	};

	data?.find(check);

	let slide = useRef();

	let prev = useRef();
	let next = useRef();

	useMeta({
		title: data ? `Foodbyte | ${contentArr.name}` : null,
		description: data ? contentArr.description : null,
		ogImage: data ? contentArr.logo_url : null,
		keywords: ['hey', 'me']
	});

	if (isLoading) {
		console.log('Loading');
	} else if (isLoadingError) {
		console.log('error on load');
	} else {
		// let title = document.title
		// title = contentArr.name
		// console.log(title);
		document.title = contentArr.name
		let data = document.head.onloadedmetadata
		console.log(data);
		

		

		return (
			<>
				<section className='vendor-hero'>
					<div className='herosection'>
						<img
							src={contentArr.logo_url}
							className='logo'
						/>
						<h1>{contentArr.name}</h1>
						<p>
							{contentArr.description
								? contentArr.description
								: 'No Description Available'}
						</p>
						<p>{contentArr.address}</p>
						<p style={{ textTransform: 'lowercase' }}>{contentArr.email}</p>
						<p>{contentArr.phone_number}</p>
					</div>
					<div className='items'>
						<h5>What we offer</h5>
						<div>
							<div
								ref={slide}
								className='sub-sec'>
								{contentArr.dishes.map((element) => {
									return <PricingCardDetails obj={element} />;
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
						</div>
					</div>
				</section>
				<Slide
					slide={slide}
					next={next}
					prev={prev}
				/>
				{/* <ScrollAnimations2 /> */}
			</>
		);
	}
};

export let Dish = () => {
	const { data, isLoading, isLoadingError } = useQuery({
		queryKey: ['restaurant'],
		queryFn: () => {
			return Axios.get(
				'https://foodbyt-app-production-53ejks.laravel.cloud/api/v1/client/vendors'
			).then((res) => res.data);
		},
	});

	let check = (element) => {
		if (element.id == link) {
			contentArr = element;
		}
	};
	let dishes = [];
	let { link } = useParams();
	let contentArr;
	data?.forEach((element) => {
		dishes.push(...element.dishes);
	});

	dishes.find(check);

	if (isLoading) {
		console.log('Loading');
	} else if (isLoadingError) {
		console.log('error on load');
	} else {
		return (
			<>
				<section className='dish-section'>
					<h1>{contentArr.name}</h1>
					<div>
						<div
							className='img'
							style={{ backgroundImage: `url(${contentArr.images[0].url})` }}></div>

						{/* <img src={contentArr.images[0].url} /> */}
						<div>
							<p>
								<span>Description:</span>
								{contentArr.description}
							</p>
							<p>
								<span>Price:</span>
								{contentArr.price}
							</p>

							<div className='btn'>
								<a href='#'>
									<button class='regular-btn'>
										<i className='fab fa-google-play'></i>
										<div>
											<span>get it on</span>
											google play
										</div>
									</button>
								</a>
								<a href='#'>
									<button class='regular-btn'>
										<i className='fab fa-apple'></i>
										<div>
											<span>get it on</span>
											app store
										</div>
									</button>
								</a>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
};
