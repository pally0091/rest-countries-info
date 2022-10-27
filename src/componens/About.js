import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Typewriter } from 'react-simple-typewriter'


function About() {
	return (
		<div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">


			<div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">


				<div className="p-4 md:p-12 text-center lg:text-left">

					<div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"></div>

					<h1 className="text-3xl font-bold pt-8 lg:pt-0">Debashis Roy</h1>
					<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
					<p className='text-red-700 font-bold'>
						<Typewriter
							words = {['Web Design', 'Responsive website', 'HTML and CSS', 'JavaScript', 'React with router dom', 'Graphics Editing']}
							loop ={5}
							cursor
							cursorStyle='_'
							typeSpeed={70}
							delaySpeed={80}
							deleteSpeed={1500}
						></Typewriter>
					</p>
					<p className="pt-8 text-sm">👀 I’m interested in Web design and devolopment.<br></br>
						🌱 I’m currently learning React,<br></br>
					💞️ I’m looking to collaborate on anythings related.</p>


					<div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-evenly">

						<a href='https://www.facebook.com/frabbi91' target='_blank' rel="noreferrer"><BsFacebook></BsFacebook></a>
						<a href='https://github.com/pally0091' target='_blank' rel="noreferrer"><BsGithub></BsGithub></a>
						<a href='https://www.linkedin.com/in/debashis-roy-659ba91ba/' target='_blank' rel="noreferrer"><BsLinkedin></BsLinkedin></a>
					</div>



				</div>

			</div>


			<div className="w-full lg:w-2/5">

				<img src="https://i.ibb.co/FbwS6LY/FB-IMG-1515761188990.jpg" alt='Profile' className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
			</div>

		</div>
	);
}

export default About;