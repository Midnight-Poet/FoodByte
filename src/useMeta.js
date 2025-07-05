import { useEffect } from 'react';

export let useMeta = ({
	title,
	description,
	keywords = [],
	ogTitle,
	ogDescription,
	ogImage,
	ogUrl,
}) => {
	useEffect(() => {
		document.title = title;
        setMetaTags('name', 'description', description)
        setMetaTags('name', 'keywords', keywords);
        setMetaTags('property', 'og:title', ogTitle || title);
		setMetaTags('property', 'og:description', ogDescription || description);
		setMetaTags('property', 'og:image', ogImage);
		setMetaTags('property', 'og:url', ogUrl || window.location.href);

        
	}, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl]);

    // Functions to automatically set or create meta tags
    let setMetaTags = (attribute, key, content) => {
        if (content) {
            let element = document.querySelector(`meta[${attribute}="${key}"]`)
            if (!element) {
                element = document.createElement('meta')
                element.setAttribute(attribute, key)
                document.head.appendChild(element)
            }
            element.setAttribute('content', content)
        }
    }
};


export default useMeta
