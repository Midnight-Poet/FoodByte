// useMeta.js
import { useEffect } from "react";

export const useMeta = ({ title, description, ogTitle, ogImage }) => {
	useEffect(() => {
		if (title) document.title = title;

		const setOrUpdateTag = (nameOrProp, content, isProperty = false) => {
			const selector = isProperty
				? `meta[property="${nameOrProp}"]`
				: `meta[name="${nameOrProp}"]`;
			let tag = document.querySelector(selector);

			if (!tag) {
				tag = document.createElement('meta');
				tag.setAttribute(isProperty ? 'property' : 'name', nameOrProp);
				document.head.appendChild(tag);
			}

			tag.setAttribute('content', content);
		};

		if (description) setOrUpdateTag('description', description);
		if (ogTitle) setOrUpdateTag('og:title', ogTitle, true);
		if (ogImage) setOrUpdateTag('og:image', ogImage, true);
	}, [title, description, ogTitle, ogImage]);
};
