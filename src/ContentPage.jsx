import React from 'react'
import ContentWrapper from './ContentWrapper'
import Sidebar from './Sidebar'

function ContentPage() {
  return (
	<div className='min-h-[100vh] grid grid-cols-4'>
		<Sidebar />
		<ContentWrapper />
	</div>
  )
}

export default ContentPage
