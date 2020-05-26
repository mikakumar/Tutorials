const slides = [
	{
		title: 'Slide 1',
		bullets:[
			'bullet 1',
			'bullet 2',
			'bullet 3'
		],
	},
	{
		title: 'Slide 2',
		bullets: [
			'bullet 1',
			'bullet 2'
		],
	}
]


//implement FULL slideshow here 

const Slideshow = (
		<div>
			{slides.map(slide => <Slide slide={slide} />)}
		</div>
	)

//implement slides here 

const Slide = slide=>(
		<div>
			<h1>{slide.title}</h1>
			<ul>
			 {slide.bullets.map(bullet=><li>{bullet}</li>)}
			</ul>
		</div>
	)