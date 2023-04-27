import React from 'react'

function ContentWrapper() {
	return (
		<div className='flex px-14 pt-10 col-span-3 flex-col'>
			<div className='intro min-h-[100vh]'>
				<h1 id='intro' className='title relative w-fit text-[4vw] font-medium mb-5 mt-10'>Project Introduction</h1>
				{/* <p className='pl-5 pt-10 text-[18px]'>This project is a deep analysis on Trending Youtube Video Statistic. This website will walk you through some data exploration and deeper analysis on Youtube Trending Video Statistic in between countries like US, Canada, United Kingdom, France and Germany. Moreover, the website also identified multiple correlations of several related terms.</p> */}
				<p className='pl-5 pt-10 text-[18px]'>
				This project analyzed the YouTube trending videos in India dataset to gain insights into the factors that contribute to a video's success on the platform. The dataset included information on trending videos in India, such as video title, channel name, video category, views, likes, dislikes, comment count, and publishing date and time. The analysis was conducted using Python programming language and various data visualization libraries. The main objectives of the project were to explore the relationship between videos and year, videos and views, videos and likes, views and likes, videos and comments, title length and views, as well as to analyze the trends in the trending videos channel, category, publishing day, and hour, and to examine the effects of comments and ratings being disabled on video popularity. </p>
				<p className='pl-5 pt-10 text-[18px]'>The findings of this project can provide valuable information on the types of content that are popular in India, as well as insights into the strategies that creators can use to increase the success of their videos on the platform.
				</p>




			</div>

			<div className='data-info min-h-[100vh]'>
				<h1 id='info' className='title relative w-fit text-[4vw] font-medium mb-5 mt-10'>Data Information</h1>
				<h2 id='info-1' className='text-[2vw] my-2'>Data Context</h2>

				<p className='pl-5 pt-5 text-[18px]'>It is important to understand the context in which the data for this project was collected. The dataset represents a snapshot of the trending videos on YouTube in India during a specific time period and may not be representative of the entire population of YouTube videos in India. Moreover, the dataset only includes videos that were in the trending section during the time period and does not include all videos uploaded to the platform during this time. This means that there may be other videos that were popular but were not captured in the dataset. It is also important to consider that the nature of the trending algorithm on YouTube may have changed since the time period covered by this dataset, which could affect the relevance of the findings. Finally, there may be biases in the dataset, such as certain categories of videos being overrepresented or underrepresented, which should be taken into account when interpreting the results.</p>
				<h2 id='info-2' className='text-[2vw] my-2 pt-10'>Data Content</h2>
				<div className='pl-5 pt-5 text-[18px]'>
					<p >The dataset used in this project contains 182951 entries of videos that were trending on YouTube in India. The dataset includes variables such as video title, channel name, category, views, likes, dislikes, comment count, and publishing date and time. The most common category of videos in the dataset is Entertainment, followed by Music, People & Blogs, Comedy, and News & Politics. The most popular video in the dataset has over 113 million views and was uploaded by T-Series, a popular Indian music label. The dataset also includes information on whether comments and ratings were disabled for each video, as well as the publishing day and hour of each video. The data has been cleaned by removing duplicate entries and filling in missing values where possible.</p></div>
			</div>

			<div className='analysis min-h-[100vh]'>
				<h1 id='analysis' className='title relative w-fit text-[4vw] font-medium mb-5 mt-10'>Analysis Topic</h1>
				<div className='pl-10'>
					<ul className='list-disc text-[18px]'>
					<li>Correlation between video views and likes</li>
					<li>Correlation between video views and comments</li>
					<li>Correlation between video likes and comments</li>
					<li>Impact of title length on video views</li>
					<li>Effects of comments and ratings being disabled on video popularity</li>
					<li>Trends in the trending videos channel</li>
					<li>Trends in the trending videos category</li>
					<li>Trends in the publishing day of trending videos</li>
					<li>Trends in the publishing hour of trending videos</li>
					<li>Common words used in video titles and their frequency</li>
					</ul>
				</div>
			</div>
			<h1 id='dataanalysis' className='title relative w-fit text-[4vw] font-medium mb-5 mt-10'>Data Analysis</h1>

			<div id="videos_year" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-1' className='text-[2vw] my-2'>Videos and Year</h2>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/videos_years_1.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pb-20 pt-10'>
						This graph shows the number of videos that were included in the data set.
						More than 175,000 videos were uploaded in the year 2020.
						The dataset includes data from the year 2020.</p>
				</div>
			</div>

			<div id="videos_views" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-2' className='text-[2vw] my-2'>Videos and Views</h2>
				{/* <div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/views_videos.png?raw=true" />

				</div> */}
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/views_videos_2.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pb-20 pt-10'>The above graph shows the relationship between the number of videos and their total views. As we can see, the majority of videos in the dataset have less than 10 million views, with only a small percentage of videos having more than 50 million views. This suggests that while there are some extremely popular videos on YouTube, the majority of videos receive a relatively small number of views.</p>
				</div>
			</div>

			<div id="videos_likes" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-3' className='text-[2vw] my-2'>Videos and Likes</h2>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/likes_videos_1.png?raw=true" />
				</div>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/likes_videos_2.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pb-20 pt-10'>The above graph shows the relationship between the number of videos and their total likes. As we can see, the majority of videos in the dataset have less than 300,000 likes, with only a small percentage of videos having more than 1 million likes. This suggests that while some videos may go viral and receive a large number of likes, the majority of videos receive a relatively small number of likes.</p>
				</div>
			</div>

			<div id="views_likes" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-4' className='text-[2vw] my-2'>Views and Likes</h2>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/likes_views.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pb-20 pt-10'>The above scatterplot shows the relationship between the total views and likes of each video in the dataset. As we can see, there appears to be a strong positive correlation between views and likes, suggesting that videos with more views tend to receive more likes. However, there are some outliers in the top right corner of the plot, which may represent videos that have gone viral and received an unusually large number of views and likes. Overall, this plot suggests that videos that are more popular in terms of views are also more likely to receive a higher number of likes.</p>
				</div>
			</div>

			<div id="videos_comments" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-5' className='text-[2vw] my-2'>Videos and Comments</h2>
				{/* <div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/comment_videos_1.png?raw=true" />
				</div> */}
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/comment_videos_2.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pb-20'>The above bar graph shows the distribution of the total number of comments received by videos in the dataset. As we can see, the majority of videos have less than 50,000 comments. This suggests that while there may be some videos that generate a large number of comments, the majority of videos receive a relatively small number of comments. It's worth noting that the number of comments may be influenced by whether or not comments are enabled on the video, as well as the topic and content of the video itself.</p>
				</div>

			</div>

			<div id="title_views" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-6' className='text-[2vw] my-2'>Title length and Views</h2>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/title_views_1.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>
						The above scatterplot shows the relationship between the total views and the length of the video title for each video in the dataset. As we can see, there does not appear to be a strong correlation between views and title length. This suggests that the length of the title may not be a strong predictor of a video's popularity on YouTube. However, it's worth noting that other factors, such as the content of the title or the use of keywords, may also influence a video's popularity and should be considered in further analysis.
					</p>
				</div>
			</div>

			<div id="capitalized" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-7' className='text-[2vw] my-2'>Do Trending Video Title contains Capitalized words?</h2>
				<div className='pl-10 flex justify-center'>
					<img className='w-3/4' src="https://github.com/paritaj/testing/blob/main/images/piechart.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>
					The above pie chart shows the proportion of trending videos in the dataset that contain at least one capitalized word in their titles. As we can see, the majority of videos (approximately 40%) have at least one capitalized word in their title, suggesting that capitalization may be a common feature of popular YouTube video titles. However, it's worth noting that this analysis only considers capitalization and does not take into account other factors, such as the content or structure of the title, which may also influence a video's popularity.
					</p>
				</div>
			</div>

			<div id="correlation" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-8' className='text-[2vw] my-2'>Correlation between dataset variables</h2>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/correlation.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>
						The above heat map shows the correlation between the variables in the YouTube trending videos dataset. The correlation coefficient ranges from -1 (indicating a perfect negative correlation) to 1 (indicating a perfect positive correlation), with 0 indicating no correlation. As we can see, there is a strong positive correlation between views and likes, as well as between likes and comment count. There is also a weaker but still significant positive correlation between views and comment count. Conversely, there is a negative correlation between video age and views, suggesting that newer videos tend to receive more views than older videos. This analysis provides valuable insights into the relationships between different variables in the dataset and can be used to inform further analysis
					</p>
				</div>
			</div>

			<div id="common_words" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-9' className='text-[2vw] my-2'>Most Common Words in Video Titles</h2>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/common_words.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>The above word cloud displays the most commonly occurring words in the titles of YouTube trending videos in the dataset. The larger the word, the more frequently it appears in the titles. As we can see, words like "video," "new," "song," "punjabi," "official," and "short" appear frequently in video titles, suggesting that these may be common themes or attributes for popular videos on YouTube. However, it's worth noting that this analysis only considers individual words and does not take into account the context or structure of the titles, which may also be important factors in a video's popularity.
					</p>
				</div>
			</div>
			
			<div id="trending_videos_channel" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-10' className='text-[2vw] my-2'>Which channels have the largest number of trending videos?</h2>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/channel_trending_videos.png?raw=true" />
				</div>

				<div className='pl-10'>
					<p className='pt-10 pb-20'>
					The above horizontal bar graph displays the top five channels with the largest number of trending videos in the dataset. As we can see, Vijay Television has the largest number of trending videos, followed by Sourav Joshi vlogs and Sony SAB. Other channels with a significant number of trending videos include Colors TV and Crazy XYZ. This analysis provides insight into the channels that are consistently producing popular content on YouTube in the Indian market, which may be useful for content creators or marketers looking to understand popular channels and trends.
					</p>
				</div>
			</div>

			<div id="trending_videos_category" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-11' className='text-[2vw] my-2'>Which video category has the largest number of trending videos?</h2>
				<div className='pl-10 flex justify-center'>
					<img className='w-4/5' src="https://github.com/paritaj/testing/blob/main/images/video_category.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>
						The above bar graph displays the number of trending videos by category in the Indian YouTube market. As we can see, the Entertainment category has the largest number of trending videos with over 70,000 videos, followed by People and Blogs with around 30,000 videos and Music with over 25,000 videos. This analysis provides insight into the categories that are most popular among Indian YouTube viewers, which may be useful for content creators or marketers looking to understand popular categories and trends. It's worth noting that this analysis only includes videos that were trending during the time period of the dataset, and may not represent overall viewership patterns across YouTube India.
					</p>
				</div>
			</div>

			<div id="trending_videos_publising_day" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-12' className='text-[2vw] my-2'>Number of videos and publishing day</h2>
				<div className='pl-10 flex justify-center'>
					<img className='w-3/4' src="https://github.com/paritaj/testing/blob/main/images/videos_publishingday.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>
						We can see that the number of trending videos published on Sunday are noticeably less than the number of trending videos published on other days of the week.
					</p>
				</div>
			</div>

			<div id="trending_videos_publising_hour" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-10' className='text-[2vw] my-2'>Number of videos and publishing hour</h2>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/publishing_hour.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>
						We can see that the period between 11AM(4.30 PM in India) and 4PM(9.30 PM in India), peaking between 12PM(5.30 PM in India) and 2PM(7.30 PM in India), had the largest number of trending videos.<br></br> We notice also that the period between 8PM(1.30 AM in India) and 9PM(2.30 AM in India) has the smallest number of trending videos.
					</p>
				</div>
			</div>

			<div id="trending_videos_comment_disabled" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-10' className='text-[2vw] my-2'>Are comments disabled ?</h2>
				<div className='pl-10 justify-center flex'>
					<img className='w-3/4' src="https://github.com/paritaj/testing/blob/main/images/disabled_comments.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>
						We see that only `3%` of trending videos prevented users from commenting.
					</p>
				</div>
			</div>
			<div id="trending_videos_ratings_disabled" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-10' className='text-[2vw] my-2'>Are ratings disabled ?</h2>
				<div className='pl-10 justify-center flex'>
					<img className='w-3/4' src="https://github.com/paritaj/testing/blob/main/images/disabled_ratings.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>
						We see that only `781` trending videos out of `37352` have disabled ratings on their videos.
					</p>
				</div>
			</div>

			{/* <div id="trending_videos_both_disabled" className='graphs-info min-h-[100vh]'>
				<h2 id='graph-10' className='text-[2vw] my-2'></h2>
				<div className='pl-10'>
					<img src="https://github.com/paritaj/testing/blob/main/images/both_disabled.png?raw=true" />
				</div>
				<div className='pl-10'>
					<p className='pt-10 pb-20'>
						So there are just `360` trending videos that have both comments and ratings disabled.
					</p>
				</div>
			</div> */}

			<div className='conclusion min-h-[100vh]'>
				<h1 id='conclusion' className='title relative w-fit text-[4vw] font-medium mb-5 mt-10'>Conclusion</h1>
				{/* <p className='pl-5 pt-10 text-[18px]'>This project is a deep analysis on Trending Youtube Video Statistic. This website will walk you through some data exploration and deeper analysis on Youtube Trending Video Statistic in between countries like US, Canada, United Kingdom, France and Germany. Moreover, the website also identified multiple correlations of several related terms.</p> */}
				<p className='pt-10 pb-20 text-[18px]'>
					Based on the graphs and analysis conducted in this project, we can draw several conclusions about the trends and patterns of YouTube videos in India.
					<br/>
					Firstly, we can see that there is a strong positive correlation between the number of views and likes on a video. This suggests that videos that receive a higher number of views are also likely to receive more likes, indicating that engagement and popularity are closely linked.
					<br/>

					Secondly, we can observe that videos in the Entertainment category have the highest number of trending videos in India, followed by People and Blogs and Music. This may indicate that Indian viewers prefer to watch entertaining and engaging content on YouTube.
					<br/>

					Thirdly, we can see that video titles containing capitalized words are quite common among trending videos in India. This may suggest that using attention-grabbing titles with capitalized words could be a useful strategy for creators looking to increase the visibility of their content.
					<br/>
					<br/>

					Overall, this project provides insights into the trends and patterns of YouTube videos in India, which can be valuable for creators, marketers, and anyone interested in understanding the preferences of Indian YouTube viewers. However, it's important to note that these conclusions are based on the dataset used in this analysis, and may not be representative of the entire YouTube India market.
					</p>




			</div>


		</div>
	)
}

export default ContentWrapper

