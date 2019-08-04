import { FinalInput } from 'componentAtoms/FinalInput/FinalInput'
import { ExportAtoms } from 'componentAtoms'

const { InputText, InputSelect } = ExportAtoms

const FinalInputText = FinalInput(InputText)
const FinalInputSelect = FinalInput(InputSelect)

export { FinalInput, FinalInputText, FinalInputSelect }
