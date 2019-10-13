import { Shader, SHADE_STATE_IS_OPEN } from './Shader'
import { StateContainer, storeModal, STORE_MODAL_STATE_IS_OPEN } from 'state'

const mapStoreModalStateToProps = {
	[SHADE_STATE_IS_OPEN]: STORE_MODAL_STATE_IS_OPEN,
}

const ShaderStoreModal = StateContainer(
	Shader,
	[storeModal],
	[mapStoreModalStateToProps],
	[]
)

export { ShaderStoreModal }
