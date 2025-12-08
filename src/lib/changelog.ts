let changelog = {
	'1.0.3':{
		date: '2025-12-08',
		changes: [
			'Updated frontend to include session type (Lecture/Tutorial/Workshop) in the schedule display.',
		]
	},
	'1.0.2': {
		date: '2025-11-25',
		changes: [
			'Added message for saturdays indicating no classes are scheduled.',
		]
	},
	'1.0.1': {
		date: '2025-11-26',
		changes: [
			'Enhance UI with dark mode support.',
			'Minor bug fixes and UI improvements.',
			'Removed unwanted labels from schedule component.',
			'Added icon for navigation to changelog page.',
			'Fixed theme toggle button position and styling.'
		]
	},
	'1.0.0': {
		date: '2025-11-24',
		changes: [
			'Initial release of Svelte Schedule.',
			'Added group selection feature.',
			'Implemented day tabs for schedule viewing.',
			'Responsive design for mobile and desktop.',
			'Changelogs and upcoming features section added lol',
			'Schedule frontend changed for mobile/desktop'
		]
	},
};
let upcoming = {
	'1.1.0': {
		date: 'Ongoing',
		changes: [
			'Add student/teacher selection'
		]
	}
};

export { changelog, upcoming };
