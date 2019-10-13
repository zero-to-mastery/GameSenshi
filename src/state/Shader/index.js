import {
	StoreShader,
	STORE_SHADER_STATE_IS_OPEN,
	SHOW,
	CLOSE,
	SET_STATE,
	RESET_STATE,
} from './StoreShader'

const storeShader = new StoreShader()
const storeShaderShow = storeShader[SHOW]
const storeShaderClose = storeShader[CLOSE]
const storeShaderSetState = storeShader[SET_STATE]
const storeShaderResetState = storeShader[RESET_STATE]

export {
	storeShader,
	storeShaderShow,
	storeShaderClose,
	storeShaderSetState,
	storeShaderResetState,
	STORE_SHADER_STATE_IS_OPEN,
}
