// ##############################
// // // Chart variables
// #############################

// #########################################
// // // used in src/views/examples/LandingPage.jsx
// #########################################
let chartExample1 = {
	type: 'line',
	responsive: true,
	data: canvas => {
		let ctx = canvas.getContext('2d')

		let gradientFill = ctx.createLinearGradient(0, 230, 0, 50)

		gradientFill.addColorStop(1, 'rgba(29,140,248,0.2)')
		gradientFill.addColorStop(0.4, 'rgba(29,140,248,0.0)')
		gradientFill.addColorStop(0, 'rgba(29,140,248,0)') //blue colors

		return {
			labels: [
				'JUN',
				'FEB',
				'MAR',
				'APR',
				'MAY',
				'JUN',
				'JUL',
				'AUG',
				'SEP',
				'OCT',
				'NOV',
				'DEC',
			],
			datasets: [
				{
					label: 'Data',
					fill: true,
					backgroundColor: gradientFill,
					borderColor: '#1f8ef1',
					borderWidth: 2,
					borderDash: [],
					borderDashOffset: 0.0,
					pointBackgroundColor: '#1f8ef1',
					pointBorderColor: 'rgba(255,255,255,0)',
					pointHoverBackgroundColor: '#1f8ef1',
					pointBorderWidth: 20,
					pointHoverRadius: 4,
					pointHoverBorderWidth: 15,
					pointRadius: 4,
					data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320],
				},
			],
		}
	},
	options: {
		maintainAspectRatio: false,
		legend: {
			display: false,
		},

		tooltips: {
			backgroundColor: '#fff',
			titleFontColor: '#ccc',
			bodyFontColor: '#666',
			bodySpacing: 4,
			xPadding: 12,
			mode: 'nearest',
			intersect: 0,
			position: 'nearest',
		},
		responsive: true,
		scales: {
			yAxes: [
				{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(0,0,0,0.0)',
						zeroLineColor: 'transparent',
					},
					ticks: {
						display: false,
						suggestedMin: 0,
						suggestedMax: 350,
						padding: 20,
						fontColor: '#9a9a9a',
					},
				},
			],

			xAxes: [
				{
					barPercentage: 1.6,
					gridLines: {
						drawBorder: false,
						color: 'rgba(0,0,0,0)',
						zeroLineColor: 'transparent',
					},
					ticks: {
						padding: 20,
						fontColor: '#9a9a9a',
					},
				},
			],
		},
	},
}

module.exports = {
	chartExample1, // used in src/views/examples/LandingPage.jsx
}
