import { CARD_GIFT_IMAGE, CARD_GIFT_TOOLTIP } from './CardGift'

const giftIconsPath = icon => require(`assets/icons/gifts/${icon}.png`)

const gifts = [
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('affection'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('bauble'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('building'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('carousel'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('crowns'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('cupid'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('donut'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('flower-bouquet'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('friends'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('handbag'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('kitty'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('lips'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('lollipop'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('love-message'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('microphone'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('positive-vote'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('ring'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('rose'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('sunflower'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
	{
		[CARD_GIFT_IMAGE]: giftIconsPath('top-hat'),
		[CARD_GIFT_TOOLTIP]: 'Icon',
	},
]

export { gifts }
