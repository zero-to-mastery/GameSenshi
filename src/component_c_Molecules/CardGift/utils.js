import { CARD_GIFT_IMAGE, CARD_GIFT_NAME, CARD_GIFT_PRICE } from './CardGift'

const giftIconsPath = icon => require(`assets/icons/gifts/${icon}.png`)

const gifts = [
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('bauble'),
		[CARD_GIFT_NAME]: 'Icon1',
		[CARD_GIFT_PRICE]: '$1',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('building'),
		[CARD_GIFT_NAME]: 'Icon2',
		[CARD_GIFT_PRICE]: '$5',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('carousel'),
		[CARD_GIFT_NAME]: 'Icon3',
		[CARD_GIFT_PRICE]: '$10',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('crowns'),
		[CARD_GIFT_NAME]: 'Icon4',
		[CARD_GIFT_PRICE]: '$15',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('cupid'),
		[CARD_GIFT_NAME]: 'Icon5',
		[CARD_GIFT_PRICE]: '$20',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('donut'),
		[CARD_GIFT_NAME]: 'Icon6',
		[CARD_GIFT_PRICE]: '$50',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('flower-bouquet'),
		[CARD_GIFT_NAME]: 'Icon7',
		[CARD_GIFT_PRICE]: '$60',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('friends'),
		[CARD_GIFT_NAME]: 'Icon8',
		[CARD_GIFT_PRICE]: '$70',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('handbag'),
		[CARD_GIFT_NAME]: 'Icon9',
		[CARD_GIFT_PRICE]: '$80',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('kitty'),
		[CARD_GIFT_NAME]: 'Icon10',
		[CARD_GIFT_PRICE]: '$90',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('lips'),
		[CARD_GIFT_NAME]: 'Icon11',
		[CARD_GIFT_PRICE]: '$100',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('lollipop'),
		[CARD_GIFT_NAME]: 'Icon12',
		[CARD_GIFT_PRICE]: '$150',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('love-message'),
		[CARD_GIFT_NAME]: 'Icon13',
		[CARD_GIFT_PRICE]: '$200',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('microphone'),
		[CARD_GIFT_NAME]: 'Icon14',
		[CARD_GIFT_PRICE]: '$250',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('positive-vote'),
		[CARD_GIFT_NAME]: 'Icon15',
		[CARD_GIFT_PRICE]: '$300',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('ring'),
		[CARD_GIFT_NAME]: 'Icon16',
		[CARD_GIFT_PRICE]: '$500',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('rose'),
		[CARD_GIFT_NAME]: 'Icon17',
		[CARD_GIFT_PRICE]: '$600',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('sunflower'),
		[CARD_GIFT_NAME]: 'Icon18',
		[CARD_GIFT_PRICE]: '$700',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('top-hat'),
		[CARD_GIFT_NAME]: 'Icon19',
		[CARD_GIFT_PRICE]: '$800',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('affection'),
		[CARD_GIFT_NAME]: 'Icon20',
		[CARD_GIFT_PRICE]: '$1000',
	},
]

export { gifts }
