import { Shader, SHADE_STATE_IS_OPEN } from './Shader'
import { storeShader, StateContainer, STORE_SHADER_STATE_IS_OPEN } from 'state'

const mapStoreShadeStateToProps = {
	[SHADE_STATE_IS_OPEN]: STORE_SHADER_STATE_IS_OPEN,
}

const ShaderStoreShader = StateContainer(
	Shader,
	[storeShader],
	[mapStoreShadeStateToProps],
	[]
)

export { ShaderStoreShader }
