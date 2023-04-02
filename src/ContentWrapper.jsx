import React from 'react'

function ContentWrapper() {
  return (
	<div className='flex px-14 pt-10 col-span-3 flex-col'>
		<div className='intro min-h-[100vh]'>
			<h1 id='intro' className='title relative w-fit text-[4vw] font-medium mb-5 mt-10'>Project Introduction</h1>
			<p className='pl-5 text-[18px]'>This project is a deep analysis on Trending Youtube Video Statistic. This website will walk you through some data exploration and deeper analysis on Youtube Trending Video Statistic in between countries like US, Canada, United Kingdom, France and Germany. Moreover, the website also identified multiple correlations of several related terms.</p>
		</div>

		<div className='data-info min-h-[100vh]'>
			<h1 id='info' className='title relative w-fit text-[4vw] font-medium mb-5 mt-10'>Data Information</h1>
			<h2 id='info-1' className='text-[2vw] my-2'>Data Context</h2>
			
			<p className='pl-5 text-[18px]'>YouTube, the world-famous video sharing website, maintains a list of the top trending videos on the platform. According to Variety magazine, “To determine the year's top-trending videos, YouTube uses a combination of factors including measuring users interactions (number of views, shares, comments and likes). Note that they're not the most-viewed videos overall for the calendar year”. Top performers on the YouTube trending list are music videos (such as the famously virile “Gangam Style”), celebrity and/or reality TV performances, and the random dude-with-a-camera viral videos that YouTube is well-known for. This dataset is a daily record of the top trending YouTube videos. Note that this dataset is a structurally improved version of this dataset.</p>
			<h2  id='info-2' className='text-[2vw] my-2'>Data Content</h2>
			<div className='pl-5 text-[18px]'>
			<p >This dataset includes several months (and counting) of data on daily trending YouTube videos. Data is included for the US, GB, DE, CA, and FR regions (USA, Great Britain, Germany, Canada, and France, respectively), with up to 200 listed trending videos per day.</p>
			<p >Each region's data is in a separate file. Data includes the video title, channel title, publish time, tags, views, likes and dislikes, description, and comment count.
			</p>
			<p>The data also includes a category_id field, which varies between regions. To retrieve the categories for a specific video, find it in the associated JSON. One such file is included for each of the five regions in the dataset.</p></div>
		</div>

		<div className='analysis min-h-[100vh]'>
			<h1 id='analysis' className='title relative w-fit text-[4vw] font-medium mb-5 mt-10'>Analysis Topic</h1>
			<div className='pl-10'>
				<ul className='list-disc text-[18px]'>
					<li>Correlation between views, likes, and dislikes.</li>
					<li>Correlation between views, likes, and dislikes.</li>
					<li>Correlation between views, likes, and dislikes.</li>
					<li>Correlation between views, likes, and dislikes.</li>
					<li>Correlation between views, likes, and dislikes.</li>
				</ul>
			</div>
		</div>
	</div>
  )
}

export default ContentWrapper

