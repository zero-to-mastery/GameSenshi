import { Exports as ExportAtoms } from '5_comp_1'
import { FinalInputText, FinalInputSelect, FinalInputDate } from './FinalInput'
import { TabPaneSettingListStoreUserPropedNotification } from './TabPaneSettingList'
import { ModalImageCropper } from './ModalImageCropper'
import { CardUserHorizontal } from './CardUserHorizontal'
import { CardUserPropedDiscover, CardProfilePropedSearch } from './CardUser'
import { ButtonsImagePropedIndex } from './ButtonsImage'
import { PanelSortBy } from './PanelSortBy'
import { PanelFilterSearch } from './PanelFilterSearch'
import { ChatContactListWithProps } from './ChatContactList'
import { CarouselCardSimplePropedNew } from './CarouselCardSimple'
import { CardGiftPropedProfile } from './CardGift'
import {
	CommentCommonPropedDefault,
	COMMENT_ID,
	COMMENT_NAME,
	COMMENT_POSTED_TIME,
	COMMENT_AVATAR,
	COMMENT_BODY,
	COMMENT_NUM_COMMENTS,
} from './Comment'
import { PaginationCommonPropedDefault } from './PaginationCommon'
import { CarouselLightBoxPropedProfile } from './CarouselLightBox'
import {
	TAB_PRODUCT_DESCRIPTION,
	TAB_PRODUCT_NUM_ORDERS,
	TAB_PRODUCT_PRICE,
	TabPanelService,
} from './TabPanelService'

export const Exports = {
	...ExportAtoms,
	TabPaneSettingListStoreUserPropedNotification,
	FinalInputText,
	FinalInputSelect,
	FinalInputDate,
	ModalImageCropper,
	CardUserHorizontal,
	CardUserPropedDiscover,
	ButtonsImagePropedIndex,
	PanelSortBy,
	PanelFilterSearch,
	CardProfilePropedSearch,
	ChatContactListWithProps,
	CarouselCardSimplePropedNew,
	CardGiftPropedProfile,
	CommentCommonPropedDefault,
	COMMENT_ID,
	COMMENT_NAME,
	COMMENT_POSTED_TIME,
	COMMENT_AVATAR,
	COMMENT_BODY,
	COMMENT_NUM_COMMENTS,
	PaginationCommonPropedDefault,
	CarouselLightBoxPropedProfile,
	TAB_PRODUCT_DESCRIPTION,
	TAB_PRODUCT_NUM_ORDERS,
	TAB_PRODUCT_PRICE,
	TabPanelService,
}
