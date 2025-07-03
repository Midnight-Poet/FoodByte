import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../resources/logo-removebg-preview.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dish, Vendors } from '../pages/vendor';
import { services, dish, restaurants } from '../pages/home';

export let Navbar = () => {
	let navbar = useRef();

	let location = useLocation();

	let open = () => {
		gsap.fromTo(
			navbar.current,
			{
				display: 'none',
				x: 800,
				duration: 1.3,
			},
			{
				x: 0,
				display: 'flex',
			}
		);
	};
	let close = () => {
		gsap.to(navbar.current, {
			x: 800,
			duration: 1,
		});
		gsap.to(navbar.current, {
			display: 'none',
			delay: 0.5,
		});
	};
	window.addEventListener('resize', () => {
		let length = window.innerWidth;
		if (length > 800) {
			gsap.to(navbar.current, {
				display: 'none',
			});
		}
	});

	return (
		<div class='navbar'>
			<a
				href='../App.js'
				class='logo'>
				<img
					src={logo}
					alt=''
				/>
			</a>
			<nav>
				<ul>
					<a
						href='/'
						className={location.pathname == '/' ? 'active' : ''}>
						<li>home</li>
					</a>
					<a
						href='/#services'
						onClick={() =>
							location.pathname == '/'
								? services.current.scrollIntoView({ behavior: 'smooth' })
								: null
						}>
						<li>services</li>
					</a>
					<a
						href='/client/vendor'
						className={location.pathname.includes('/vendor') ? 'active' : ''}>
						<li>restaurants</li>
					</a>
					<a
						href='/#dishes'
						className={location.pathname.includes('/dish') ? 'active' : ''}
						onClick={() =>
							location.pathname == '/' ? dish.current.scrollIntoView() : null
						}>
						<li>dishes</li>
					</a>
				</ul>
			</nav>
			<div>
				<i
					onClick={open}
					class='menu-btn fa-regular regular fa-grid-2-plus'></i>
			</div>
			<nav
				class='responsive'
				ref={navbar}>
				<ul>
					<i
						onClick={close}
						class='fa-regular fa-square-xmark closebtn'></i>
					<a
						href='/'
						className={location.pathname == '/' ? 'active' : ''}>
						<li>home</li>
					</a>
					<a
						href='/#services'
						onClick={() =>
							location.pathname == '/'
								? services.current.scrollIntoView({ behavior: 'smooth' })
								: null
						}>
						<li>services</li>
					</a>
					<a
						href='/vendor'
						className={location.pathname.includes('/vendor') ? 'active' : ''}>
						<li>restaurants</li>
					</a>
					<a
						href='/#dishes'
						className={location.pathname.includes('/dish') ? 'active' : ''}
						onClick={() =>
							location.pathname == '/' ? dish.current.scrollIntoView() : null
						}>
						<li>dishes</li>
					</a>
				</ul>
			</nav>
		</div>
	);
};

export let Footer = () => {
	return (
		<footer>
			<div>
				<a
					href='#'
					class='logo'>
					<img
						src={logo}
						alt=''
					/>
				</a>
				<p>
					2025 FoodByte. <br /> All over Maiduguri
				</p>
			</div>
			<div>
				<div>
					<ul>
						<a href='#'>
							<li>our menu</li>
						</a>
						<a href='#'>
							<li>facilities</li>
						</a>
						<a href='#'>
							<li>offer</li>
						</a>
						<a href='#'>
							<li>contact us</li>
						</a>
					</ul>
				</div>
				<div>
					<ul>
						<a href='#'>
							<li>about</li>
						</a>
						<a href='#'>
							<li>blog</li>
						</a>
						<a href='#'>
							<li>carrier</li>
						</a>
						<a href='#'>
							<li>location</li>
						</a>
					</ul>
				</div>
				<hr />
				<div>
					<ul>
						<a href='#'>
							<li>facebook</li>
						</a>
						<a href='#'>
							<li>twitter</li>
						</a>
						<a href='#'>
							<li>instagram</li>
						</a>
						<a href='#'>
							<li>youtube</li>
						</a>
					</ul>
				</div>
				<div>
					<h5>subscribe our newsletter</h5>
					<div>
						<input
							type='email'
							placeholder='Enter your email'
						/>
						<a href=''>
							<button class='regular-btn'>send</button>
						</a>
					</div>
				</div>
			</div>
			<div>
				<p>@2025 Foodbyte. all rights reserved</p>
				<div>
					<a href='#'>
						<span>Terms & conditions</span>
					</a>
					<a href='#'>
						<span>privacy & policy</span>
					</a>
				</div>

				<div>
					<a href='https://www.instagram.com/foodbytng'>
						<i class='fa-brands fa-instagram'></i>
					</a>
					<a href='mailto:foodbytng@gmail.com '>
						<i class='fa-solid fa-envelope'></i>
					</a>
					<a href='https://x.com/foodbyte'>
						<i class='fa-brands fa-twitter'></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export let RestaurantComponent = (props) => {
	let navigate = useNavigate();

	let update = () => {
		return false;
	};
	useEffect(() => {
		if (update == true) {
			navigate(`/vendor/${props.cardItems.name}`);
		}
	}, [update]);

	return (
		<div style={props.cardItems.length > 2 ? { minWidth: '32.3%' } : { width: '49%' }}>
			<img
				src={props.cardItems.logo_url}
				alt={`${props.cardItems.name}`}
			/>
			<div class='txt'>
				<div>
					<h5>{props.cardItems.name}</h5>
					{/* <span>
						{props.cardItems.rating}
						<i className='fa-solid fa-star'></i>
					</span> */}
				</div>
				<div>
					<p>
						{props.cardItems.description
							? props.cardItems.description
							: 'No Description Available'}
					</p>
					<p>
						<b>Address: </b>
						{props.cardItems.address}
					</p>
					<p>
						<b>phone number: </b>
						{props.cardItems.phone_number}
					</p>
					<p style={{ textTransform: 'lowercase' }}>
						<b>email: </b>
						{props.cardItems.email}
					</p>
				</div>
				<div>
					<a
						href={`/client/vendor/${props.cardItems.name}`}
						element={<Vendors />}>
						<button
							class='regular-btn'
							onClick={update}>
							See more
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export let InfoCard = (props) => {
	return (
		<div className='sub-class'>
			<div class='home'>
				<i className={props.infocard.class}></i>
			</div>
			<h5>{props.infocard.title}</h5>
			<p>{props.infocard.details}</p>
		</div>
	);
};

export let DishComponent = (props) => {
	let navigates = useNavigate();

	let update = () => {
		return false;
	};
	useEffect(() => {
		if (update == true) {
			navigates(`/vendor/${props.obj.id}`);
		}
	}, [update]);
	return (
		<div>
			<div
				className='img'
				style={{ backgroundImage: `url(${props.obj.images[0].url})` }}></div>
			<div class='txt'>
				<h5>{props.obj.name}</h5>
				<p>{props.obj.description}</p>
			</div>
			<div>
				<h6>
					<i className='fa-regular fa-naira-sign'></i>
					{props.obj.price}
				</h6>
				<span>
					<del>{props.obj.discount}</del>
				</span>
				<a
					href={`/dish/${props.obj.id}`}
					element={<Dish />}>
					<button
						class='regular-btn'
						onClick={update}>
						See details
					</button>
				</a>
			</div>
		</div>
	);
};

export let PricingCardDetails = (props) => {
	return (
		<div style={props.obj.length > 2 ? { minWidth: '32.3%' } : { width: '49%' }}>
			<div
				className='img'
				style={{ backgroundImage: `url(${props.obj.images[0].url})` }}></div>
			{/* <img
				src={props.obj.images[0].url}
				alt=''
			/> */}
			<div class='txt'>
				<h5>{props.obj.name}</h5>
				<p>{props.obj.description}</p>
			</div>
			<div className='fee'>
				<h6>
					<b>price: </b>
					<i className='fa-regular fa-naira-sign'></i>
					{props.obj.price}
				</h6>
				<span>
					<b>discount: </b>
					<del>{props.obj.discount}</del>
				</span>
			</div>
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
	);
};

export let Form = () => {
	useEffect(() => {
		let checkBox = document.querySelector('.check');
		let form = document.querySelector('.form');
		let submit = (event) => {
			let information = {
				first_name: document.querySelector('.firstName').value,
				last_name: document.querySelector('.lastName').value,
				email: document.querySelector('.email').value,
				phone: document.querySelector('.phone').value,
				inquiry_type: document.querySelector('.inquiry').value,
				heard_about: document.querySelector('.heard').value,
				message: document.querySelector('.message').value,
			};
			event.preventDefault();
			checkBox.checked
				? console.log(information)
				: alert('Please agree to the terms and condition');
		};
		form.addEventListener('submit', submit);
	});

	return (
		<form
			// onSubmit={submit}
			action=''
			class='form'>
			<div>
				<label for='firstname'>first name</label>
				<input
					type='text'
					placeholder='Enter First Name'
					class='firstName'
				/>
			</div>

			<div>
				<label for='lastname'>last name</label>
				<input
					type='text'
					placeholder='Enter last name'
					class='lastName'
				/>
			</div>

			<div>
				<label for='email'>Email</label>
				<input
					type='email'
					placeholder='Enter Email'
					class='email'
				/>
			</div>

			<div>
				<label for='firstname'>phone</label>
				<input
					type='text'
					placeholder='Enter phone number'
					class='phone'
				/>
			</div>

			<div>
				<label for=''>Inquiry type</label>
				<select
					name=''
					id=''
					class='inquiry'>
					<option value=''>select Inquiry type</option>
					<option value='support'>support</option>
					<option value='services'>services</option>
					<option value='pricing'>pricing</option>
				</select>
			</div>
			<div>
				<label for=''>How did you hear about us</label>
				<select
					name=''
					id=''
					class='heard'>
					<option value=''>select</option>
					<option value='facebook'>facebook</option>
					<option value='instagram'>instagram</option>
					<option value='twitter'>twitter</option>
					<option value='friends'>friends</option>
				</select>
			</div>
			<div>
				<label for='textarea'>message</label>
				<textarea
					name=''
					id=''
					placeholder='enter your message here'
					class='message'></textarea>
			</div>
			<div>
				<div>
					<input
						type='checkbox'
						name=''
						id=''
						class='check'
					/>
					<p>i agree with the terms of use and privacy policy</p>
				</div>
				<button class='regular-btn submitBtn'>send your message</button>
			</div>
		</form>
	);
};

export let Slide = ({ slide, next, prev }) => {
	useEffect(() => {
		let slidelength = slide.current.children[0].clientWidth;
		let maxscroll = slide.current.scrollWidth - slide.current.clientWidth;
		window.addEventListener('resize', () => {
			maxscroll = slide.current.scrollWidth - slide.current.clientWidth;
		});

		next.current.addEventListener('click', () => {
			if (slide.current.scrollLeft + slidelength >= maxscroll) {
				slide.current.scrollBy(-10000, 0);
			} else {
				slide.current.scrollBy(slidelength, 0);
			}
		});

		prev.current.addEventListener('click', () => {
			if (slide.current.scrollLeft == 0) {
				slide.current.scrollBy(10000, 0);
			} else {
				slide.current.scrollBy(-slidelength, 0);
			}
		});
	});
};

export let ScrollAnimations = ({}) => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		let heroSection = document.querySelector('.hero-section').children;
		let sections = document.querySelectorAll('section');
		let sects = document.querySelectorAll('.sub-sec');
		let subSections = document.querySelectorAll('.sub-class');
		let comments = document.querySelectorAll('.comments');
		let header = document.querySelectorAll('header');
		let footer = document.querySelector('footer').children;
		let form = document.querySelector('form');

		header = gsap.utils.toArray(header);
		form = gsap.utils.toArray(form);
		sects = gsap.utils.toArray(sects);
		heroSection = gsap.utils.toArray(heroSection);
		sections = gsap.utils.toArray(sections);
		subSections = gsap.utils.toArray(subSections);
		footer = gsap.utils.toArray(footer);

		// console.log(header, form);

		let group1 = gsap.utils.toArray(heroSection[1].children);
		let group1Offspring = gsap.utils.toArray(group1[2].children);

		gsap.from(heroSection[0].children, {
			scrollTrigger: {
				trigger: heroSection[0],
				start: 'top 30%',
			},
			y: 100,
			opacity: 0,
			filter: 'blur(20px)',
			duration: 1.5,
			stagger: {
				each: 0.4,
			},
		});

		let sequence = gsap.timeline({
			scrollTrigger: {
				trigger: heroSection[1],
				start: 'top center',
			},
		});

		gsap.from(group1[0], {
			scrollTrigger: {
				trigger: group1[0],
				start: 'top center',
			},
			x: 100,
			opacity: 0,
			filter: 'blur(40px)',
			duration: 1,
		});

		sequence
			.from(group1[1], {
				scale: 0,
				duration: 1,
			})
			.from(group1Offspring, {
				y: 100,
				opacity: 0,
				filter: 'blur(40px)',
				duration: 0.6,
				stagger: {
					each: 0.1,
				},
			})
			.from(comments, {
				y: 100,
				opacity: 0,
				filter: 'blur(40px)',
				duration: 1,
				stagger: {
					each: 0.2,
				},
			})
			.from(group1Offspring, {
				scrollTrigger: {
					trigger: group1Offspring,
					start: 'top 40%',
					scrub: 5,
				},
				y: 0,
				duration: 2,
				stagger: {
					each: 0.2,
				},
			});

		sections.forEach((section) => {
			let sequence2 = gsap.timeline({
				scrollTrigger: {
					trigger: section.children,
					start: 'top 80%',
				},
			});
			sequence2.from(section.children, {
				y: 100,
				opacity: 0,
				filter: 'blur(20px)',
				duration: 1,
				stagger: {
					each: 0.3,
				},
			});
		});

		sects.forEach((sect) => {
			let sequence2 = gsap.timeline({
				scrollTrigger: {
					trigger: sect,
					start: 'top 80%',
				},
			});
			sequence2.from(sect.children, {
				y: 100,
				opacity: 0,
				filter: 'blur(20px)',
				duration: 1,
				stagger: {
					each: 0.3,
				},
			});
		});

		form.forEach((sect) => {
			let sequence2 = gsap.timeline({
				scrollTrigger: {
					trigger: sect,
					start: 'top 80%',
				},
			});
			sequence2.from(sect.children, {
				y: 100,
				opacity: 0,
				filter: 'blur(20px)',
				duration: 1,
				stagger: {
					each: 0.1,
				},
			});
		});

		footer.forEach((sect) => {
			let sequence2 = gsap.timeline({
				scrollTrigger: {
					trigger: sect,
					start: 'top bottom',
				},
			});
			sequence2.from(sect.children, {
				y: -50,
				opacity: 0,
				filter: 'blur(20px)',
				duration: 1,
				stagger: {
					each: 0.2,
				},
			});
		});

		subSections.forEach((subsec) => {
			let sequence2 = gsap.timeline({
				scrollTrigger: {
					trigger: subsec,
					start: 'top 80%',
				},
			});
			sequence2.from(subsec.children, {
				y: 100,
				opacity: 0,
				filter: 'blur(20px)',
				duration: 1,
				stagger: {
					each: 0.3,
				},
			});
		});
	});
};

export let ScrollAnimations2 = () => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		let head = document.querySelector('.herosection');
		let items = document.querySelector('.items');
		let subsec = document.querySelector('.sub-sec');

		gsap.from(head.children, {
			scrollTrigger: {
				trigger: head,
				start: 'top center',
			},
			y: 100,
			opacity: 0,
			filter: 'blur(40px)',
			duration: 0.6,
			stagger: {
				each: 0.1,
			},
		});
		gsap.from(items.children, {
			scrollTrigger: {
				trigger: items,
				start: 'top center',
			},
			y: 100,
			opacity: 0,
			filter: 'blur(40px)',
			duration: 0.6,
			stagger: {
				each: 0.1,
			},
		});
		gsap.from(subsec.children, {
			scrollTrigger: {
				trigger: subsec,
				start: 'top center',
			},
			y: 100,
			opacity: 0,
			filter: 'blur(40px)',
			duration: 0.6,
			stagger: {
				each: 0.1,
			},
		});
	});
};

export let ScrollAnimations3 = () => {
	useEffect(() => {
		let sect = document.querySelector('.vendor-section');

		gsap.from(sect.children, {
			scrollTrigger: {
				trigger: sect,
				start: 'top center',
			},
			y: 100,
			opacity: 0,
			filter: 'blur(40px)',
			duration: 1,
			stagger: {
				each: 0.1,
			},
		});
	});
};
