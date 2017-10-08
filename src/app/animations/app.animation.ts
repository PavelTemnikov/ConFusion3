import { trigger, state, style, transition, animate } from '@angular/animations';

export function flyInOut() {
	return trigger('flyInOut', [

		state('*', style({ transform: 'translateX(0)', opacity: 1})),

		transition(':enter', [
			style({	transform: 'translateX(-100%)', opacity: 0 }),

			animate('500ms ease-in')
		]),

		transition(':leave', 
			
			animate(
				'500ms ease-out', 
				style({ transform: 'translateX(100%)', opacity: 0 })
			)
		)
	]);
}

export function expand() {
	return trigger('expand', [

		state('*', style({ transform: 'translateX(0)', opacity: 1 })),

		transition(':enter', [
			style({ transform: 'translateY(-50%)', opacity: 0 }),

			animate('500ms ease-in')
		])		
	]);
}

export function visibility() {
	return trigger('visibility', [

		state('shown', style({ transform: 'scale(1.0)', opacity: 1 })),

		state('hidden', style({ transform: 'scale(0.5)', opacity: 0 })),

		transition('* => *', animate('500ms ease-in-out'))
	]);
}
