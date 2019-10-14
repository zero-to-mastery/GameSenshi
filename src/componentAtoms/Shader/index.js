import { Shader, SHADE_STATE_IS_OPEN } from './Shader'
import {
	StateContainer,
	storeModal,
	STORE_MODAL_STATE_IS_OPEN,
	storeShader,
	STORE_SHADER_STATE_IS_OPEN,
} from 'state'

const mapStoreModalStateToProps = {
	[SHADE_STATE_IS_OPEN]: STORE_MODAL_STATE_IS_OPEN,
}

const ShaderStoreModal = StateContainer(
	Shader,
	[storeModal],
	[mapStoreModalStateToProps],
	[]
)

// ! need better solution for sharing the same state for different store

const mapStoreShadeStateToProps = {
	[SHADE_STATE_IS_OPEN]: STORE_SHADER_STATE_IS_OPEN,
}

const ShaderStoreShader = StateContainer(
	Shader,
	[storeShader],
	[mapStoreShadeStateToProps],
	[]
)

export { ShaderStoreModal, ShaderStoreShader }
