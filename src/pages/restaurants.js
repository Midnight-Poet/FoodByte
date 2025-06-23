import { RestaurantComponent, ScrollAnimations3 } from '../components/components';
import { restaurants } from './home';

export let Restaurants = () => {
	return (
		<>
			<section className='vendor-section'>
                <h1>Restaurants</h1>
				{restaurants.map((element) => {
					return <RestaurantComponent cardItems={element}/>;
				})}
			</section>
            <ScrollAnimations3 />
		</>
	);
};
