import React from 'react'

function Sidebar() {
  return (
	<navbar className='px-10 py-10 border-r-2 relative'>
		<ul className="nav pt-10 sticky top-0">
			<li><a className='font-bold text-lg underline hover:text-red-600' href="#info">Data Information</a>
				<ul className="pl-5">
					<li><a className='hover:text-red-500' href="#info-1">Data Context</a></li>
					<li><a className='hover:text-red-500' href="#info-2">Data Content</a></li>
				</ul>
			</li><li><a className='font-bold text-lg underline hover:text-red-500' href="#analysis">Analysis Topic</a></li>
			<li><a className='font-bold text-lg underline hover:text-red-500' href="">Videos and Preference</a>
				<ul className="pl-5">
					<li><a className='hover:text-red-500' href="">Videos and Year</a></li>
					<li><a className='hover:text-red-500' href="">Videos and Views</a></li>
					<li><a className='hover:text-red-500' href="">Videos and Likes</a></li>
					<li><a className='hover:text-red-500' href="">Videos and Comment</a></li>
					<li><a className='hover:text-red-500' href="">Title Length and Views</a></li>
				</ul>
			</li>
		</ul>
	</navbar>
  )
}

export default Sidebar