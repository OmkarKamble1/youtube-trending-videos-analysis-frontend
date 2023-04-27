import React from 'react'

function Sidebar() {
	return (
		<navbar className='px-10 py-10 border-r-2 relative'>
			<ul className="nav pt-10 sticky top-0">
				<li><a className='font-bold text-lg underline hover:text-red-600' href="#intro">Project Introduction</a>

				</li>
				<li><a className='font-bold text-lg underline hover:text-red-600' href="#info">Data Information</a>
					<ul className="pl-5">
						<li><a className='hover:text-red-500' href="#info-1">Data Context</a></li>
						<li><a className='hover:text-red-500' href="#info-2">Data Content</a></li>
					</ul>
				</li>
				<li><a className='font-bold text-lg underline hover:text-red-500' href="#analysis">Analysis Topic</a></li>
				<li><a className='font-bold text-lg underline hover:text-red-500' href="#dataanalysis">Data Analysis & Outcomes</a></li>
				<li>
					<ul className="pl-5">
						<li><a className='hover:text-red-500' href="#videos_year">Videos and Year</a></li>
						<li><a className='hover:text-red-500' href="#videos_views">Videos and Views</a></li>
						<li><a className='hover:text-red-500' href="#videos_likes">Videos and Likes</a></li>
						<li><a className='hover:text-red-500' href="#views_likes">Views and Likes</a></li>
						<li><a className='hover:text-red-500' href="#videos_comments">Videos and Comment</a></li>
						<li><a className='hover:text-red-500' href="#title_views">Title Length and Views</a></li>
						<li><a className='hover:text-red-500' href="#capitalized">Title Contains Capitalized Word?</a></li>
						<li><a className='hover:text-red-500' href="#correlation">Correlation of Variables</a></li>
						<li><a className='hover:text-red-500' href="#common_words">Common Words in Title</a></li>
						<li><a className='hover:text-red-500' href="#trending_videos_channel">Channels and Videos</a></li>
						<li><a className='hover:text-red-500' href="#trending_videos_category">Videos and Category</a></li>
						<li><a className='hover:text-red-500' href="#trending_videos_publising_day">Videos by Publishing Day</a></li>
						<li><a className='hover:text-red-500' href="#trending_videos_publising_hour">Videos by Publishing Hour</a></li>
						<li><a className='hover:text-red-500' href="#trending_videos_comment_disabled">Video Comments Disabled?</a></li>
						<li><a className='hover:text-red-500' href="#trending_videos_ratings_disabled">Video Ratings Disabled?</a></li>
					</ul>
				<li><a className='font-bold text-lg underline hover:text-red-500' href="#conclusion">Conclusion</a></li>
				
				</li>
				
				{/* <li><a className='font-bold text-lg underline hover:text-red-500' href="">Videos and Preference</a>
					<ul className="pl-5">
						<li><a className='hover:text-red-500' href="#videos_year">Videos and Year</a></li>
						<li><a className='hover:text-red-500' href="#videos_views">Videos and Views</a></li>
						<li><a className='hover:text-red-500' href="#videos_likes">Videos and Likes</a></li>
						<li><a className='hover:text-red-500' href="#views_likes">Views and Likes</a></li>
						<li><a className='hover:text-red-500' href="#videos_comments">Videos and Comment</a></li>
						<li><a className='hover:text-red-500' href="#title_views">Title Length and Views</a></li>
					</ul>
				</li>
				<li><a className='font-bold text-lg underline hover:text-red-600' href="#pie_chart">Pie Chart</a></li>
				<li><a className='font-bold text-lg underline hover:text-red-600' href="#correlation">Correlation</a></li>
				<li><a className='font-bold text-lg underline hover:text-red-600' href="#common_words">Common Words in Title</a></li>
				<li><a className='font-bold text-lg underline hover:text-red-500' href="">Trending Videos</a>
					<ul className="pl-5">
						<li><a className=' hover:text-red-600' href="#trending_videos_channel">Trending Videos Channel</a></li>
						<li><a className=' hover:text-red-600' href="#trending_videos_category">Trending Videos Category</a></li>
						<li><a className=' hover:text-red-600' href="#trending_videos_publising_day">Publishing Day</a></li>
						<li><a className=' hover:text-red-600' href="#trending_videos_publising_hour">Publishing Hour</a></li>
						<li><a className=' hover:text-red-600' href="#trending_videos_comment_disabled">Comments Disabled</a></li>
						<li><a className=' hover:text-red-600' href="#trending_videos_ratings_disabled">Ratings Disabled</a></li>
						<li><a className=' hover:text-red-600' href="#trending_videos_both_disabled">Both Disabled</a></li>
					</ul>
				</li> */}
			</ul>
		</navbar>
	)
}

export default Sidebar