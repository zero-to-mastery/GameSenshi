import { storageUserAvatarSet } from 'firebaseInit'

const handleUserAvatarSave = dataUrl => storageUserAvatarSet(dataUrl)

export { handleUserAvatarSave }
