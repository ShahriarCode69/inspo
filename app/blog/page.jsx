import React from 'react'
import FeaturedStories from '../components/featuredstories'
import BlogHero from '../components/bloghero'
import BlogFilters from '../components/blogfilters'
import BlogPosts from '../components/blogposts'

export default function blogpage() {
	return (
		<main className='mt-32'>
			<BlogHero/>
			<FeaturedStories/>
			<BlogFilters/>
			<BlogPosts/>
		</main>
	)
}
