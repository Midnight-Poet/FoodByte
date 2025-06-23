import { dishes, restaurants } from './home';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { PricingCardDetails, ScrollAnimations2, Slide, DishComponent } from '../components/components';
export let Vendors = () => {
	let check = (element) => {
		if (element.name == linkid) {
			contentArr = element;
		}
	};
	
	let { linkid } = useParams();
	let contentArr;
	restaurants.find(check);

	let slide = useRef();

	let prev = useRef();
	let next = useRef();

	return (
		<>
			<section className='vendor-hero'>
				<div className='herosection'>
					<img
						src={contentArr.imageSrc}
						className='logo'
					/>
					<h1>{contentArr.name}</h1>
					<p>{contentArr.description}</p>
					<p>
						{contentArr.address} <br /> {contentArr.email} {contentArr.phone}
					</p>
				</div>
				<div className='items'>
					<h5>What we offer</h5>
					<div>
						<div
							ref={slide}
							className='sub-sec'>
							{dishes.map((element) => {
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

			<ScrollAnimations2 />
		</>
	);
};

export let Dish = () => {

	let check = (element) => {
		if (element.id == link) {
			contentArr = element;
		}
	};
	let { link } = useParams();
	let contentArr;
	dishes.find(check);	

	return (
		<>
			<section className='dish-section'>
				<h1>{contentArr.title}</h1>
				<div>
					<img src={contentArr.image} />
					<div>
						<p><span>Description:</span>{contentArr.details}</p>
						<p><span>Price:</span>{contentArr.price}</p>

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
