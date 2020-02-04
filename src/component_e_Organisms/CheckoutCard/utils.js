import {
	PRODUCT_IMAGE,
	PRODUCT_NAME,
	PRODUCT_SIZE,
	PRODUCT_PRICE,
} from './CheckoutCard'

const products = [
	{
		[PRODUCT_NAME]: 'Shorts',
		[PRODUCT_IMAGE]: require('0_assets/img/gucci.png'),
		[PRODUCT_SIZE]: 'Small',
		[PRODUCT_PRICE]: '$29',
	},
	{
		[PRODUCT_NAME]: 'Jacket',
		[PRODUCT_IMAGE]: require('0_assets/img/jacket.png'),
		[PRODUCT_SIZE]: '-',
		[PRODUCT_PRICE]: '$999',
	},
]

export { products }
