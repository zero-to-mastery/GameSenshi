import { FinalInput } from 'componentAtoms/FinalInput/FinalInput'
import { ExportAtoms } from 'componentAtoms'
import { stopUndefined } from 'utils'

const { InputText, InputSelect } = stopUndefined(ExportAtoms)

const FinalInputText = FinalInput(InputText)
const FinalInputSelect = FinalInput(InputSelect)

export { FinalInputText, FinalInputSelect }
