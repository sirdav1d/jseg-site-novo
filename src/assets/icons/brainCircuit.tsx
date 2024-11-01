/** @format */
import { SVGVariants } from '@/animations/svgAnimations';
import {
	MotionPath,
	MotionCircle,
	MotionSVG,
} from '@/components/MotionComponents';

export default function BrainCircuit() {
	return (
		<MotionSVG
			animate={{ stroke: '#03A60E' }}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M9 13a4.5 4.5 0 0 0 3-4'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M6.003 5.125A3 3 0 0 0 6.401 6.5'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M3.477 10.896a4 4 0 0 1 .585-.396'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M6 18a4 4 0 0 1-1.967-.516'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M12 13h4'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M12 18h6a2 2 0 0 1 2 2v1'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M12 8h8'
			/>
			<MotionPath
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				d='M16 8V5a2 2 0 0 1 2-2'
			/>
			<MotionCircle
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				cx='16'
				cy='13'
				r='.5'
			/>
			<MotionCircle
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				cx='18'
				cy='3'
				r='.5'
			/>
			<MotionCircle
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				cx='20'
				cy='21'
				r='.5'
			/>
			<MotionCircle
				variants={SVGVariants}
				initial='close'
				animate={'open'}
				cx='20'
				cy='8'
				r='.5'
			/>
		</MotionSVG>
	);
}
