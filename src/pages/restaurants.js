import { RestaurantComponent, ScrollAnimations3 } from '../components/components';
import { restaurants } from './home';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export let Restaurants = () => {
	
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
		return (
			<>
				<section className='vendor-section'>
					<h1>Restaurants</h1>
					{data.map((element) => {
						return <RestaurantComponent cardItems={element} />;
					})}
				</section>
				{/* <ScrollAnimations3 /> */}
			</>
		);
	}
};
