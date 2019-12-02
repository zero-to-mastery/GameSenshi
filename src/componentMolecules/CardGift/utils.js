import { IMAGE } from './CardGift'

const giftIconsPath = icon => require(`assets/icons/gifts/${icon}.png`)

const gifts = [
	{
		[IMAGE]: giftIconsPath('affection'),
	},
	{
		[IMAGE]: giftIconsPath('bauble'),
	},
	{
		[IMAGE]: giftIconsPath('building'),
	},
	{
		[IMAGE]: giftIconsPath('carousel'),
	},
	{
		[IMAGE]: giftIconsPath('crowns'),
	},
	{
		[IMAGE]: giftIconsPath('cupid'),
	},
	{
		[IMAGE]: giftIconsPath('donut'),
	},
	{
		[IMAGE]: giftIconsPath('flower-bouquet'),
	},
	{
		[IMAGE]: giftIconsPath('friends'),
	},
	{
		[IMAGE]: giftIconsPath('handbag'),
	},
	{
		[IMAGE]: giftIconsPath('kitty'),
	},
	{
		[IMAGE]: giftIconsPath('lips'),
	},
	{
		[IMAGE]: giftIconsPath('lollipop'),
	},
	{
		[IMAGE]: giftIconsPath('love-message'),
	},
	{
		[IMAGE]: giftIconsPath('microphone'),
	},
	{
		[IMAGE]: giftIconsPath('positive-vote'),
	},
	{
		[IMAGE]: giftIconsPath('ring'),
	},
	{
		[IMAGE]: giftIconsPath('rose'),
	},
	{
		[IMAGE]: giftIconsPath('sunflower'),
	},
	{
		[IMAGE]: giftIconsPath('top-hat'),
	},
]

export { gifts }
