const CODE = 'code'
const DATA = 'data'
const STATUS = 'status'
const MESSAGE = 'message'
const ENDPOINT = 'endpoint'
const IS_VALID = 'IsValid'
const EXTRA_HEIGHT = 'ExtraHeight'
const SUBMIT_ERRORS = 'SubmitErrors'
const RESET_STATE = 'resetState'
const STATE = 'state'
const SET_STATE = 'setState'

const MONTH_NAMES = [
	'',
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]
const MONTH_ABVS_SELECT = [
	{ value: '', label: 'Month', isDisabled: true },
	{ value: '01', label: 'January' },
	{ value: '02', label: 'February' },
	{ value: '03', label: 'March' },
	{ value: '04', label: 'April' },
	{ value: '05', label: 'May' },
	{ value: '06', label: 'June' },
	{ value: '07', label: 'July' },
	{ value: '08', label: 'August' },
	{ value: '09', label: 'September' },
	{ value: '10', label: 'October' },
	{ value: '11', label: 'November' },
	{ value: '12', label: 'December' },
]

const year = new Date().getFullYear()

const YEARS = Array.from(new Array(30), (e, i) => {
	const yearString = (year + i).toString()
	return { value: yearString, label: yearString }
})

YEARS.unshift({ value: '', label: 'Year', isDisabled: true })

export {
	CODE,
	DATA,
	YEARS,
	STATUS,
	MESSAGE,
	ENDPOINT,
	MONTH_NAMES,
	MONTH_ABVS_SELECT,
	IS_VALID,
	EXTRA_HEIGHT,
	SUBMIT_ERRORS,
	STATE,
	SET_STATE,
	RESET_STATE,
}
