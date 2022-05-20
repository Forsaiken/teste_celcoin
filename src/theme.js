import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: [
			'Poppins',
			'Open Sans',
			'-apple-system',
			'BlinkMacSystemFont',
			'Poppins',
			'Public Sans',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		p: {
			fontSize: '0.875rem',
			lineHeight: 2,
		},
		body1: {
			fontSize: '0.875rem',
			lineHeight: 2,
		},
		h1: {
			fontFamily: 'Open Sans',
			fontWeight: 700,
			fontSize: 26,
			display: 'block',
			margin: 0
		},
		family2: {
			fontFamily: 'Open Sans',
			lineHeight: 2,
		},
		subtitle1: {
			fontFamily: 'Open Sans',
			fontStyle: 'normal',
			fontSize: 11,
			textTransform: 'uppercase',
			fontSmooth: 'auto',
			color: 'rgba(48, 59, 91, 0.3)',
			fontWeight: 800,
			lineHeight: 2
		},
		subtitle2: {
			fontSize: '16px',
			lineHeight: '24px',
			fontWeight: 400,
			color: '#303B5B'
		},
		highlight: {
			fontWeight: 700,
			fontSize: '36px',
			lineHeight: '54px',
			letterSpacing: '1px',
			color: '#303B5B'
		},
		value: { 
			fontFamily: 'Open Sans',
			fontWeight: 600,
			fontSize: 14,
			lineHeight: '19px',
			display: 'block'
		},
		name: {
			fontFamily: 'Open Sans',
			fontSize: 16,
			fontWeight: 700,
			lineHeight: '20px',
			color: '#303B5B'
		},
		section: {
			fontSize: '18px',
    		color: '#303B5B',
    		fontWeight: 700,
    		margin: '24px 8px',
			display: 'block'
		},
		// spacing: 8
	},
	palette: {
		primary: {
			main: '#000000'
		},
		secondary: {
			main: '#ffffff'
		},
		divider: '#EDF1F8'
	},
	spacing: 8,

	// shadows: [
	// 	'0px 8px 26px rgba(71, 87, 122, 0.08)',
	// 	'0px 8px 26px rgba(71, 87, 122, 0.08)',
	// 	'0px 8px 26px rgba(71, 87, 122, 0.08)',
	// 	'0px 8px 26px rgba(71, 87, 122, 0.08)',
	// 	'0px 8px 26px rgba(71, 87, 122, 0.08)',
	// 	'0px 8px 26px rgba(71, 87, 122, 0.08)',
	// 	'0px 8px 26px rgba(71, 87, 122, 0.08)'
	// ]

});

export default theme