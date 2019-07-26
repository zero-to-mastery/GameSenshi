import { FinalInput } from 'componentAtoms/FinalInput/FinalInput'
import { InputText, InputSelect } from 'componentAtoms'

const FinalInputText = FinalInput(InputText)
const FinalInputSelect = FinalInput(InputSelect)

export { FinalInput, FinalInputText, FinalInputSelect }
