const onUserCreate = (user, firestore) => {
	console.log(user)
	const batch = firestore.batch()
	const docRef = firestore.doc(`users/${user.uid}/settings/notifications`)
	batch.set(docRef, {
		email: { orderUpdates: true, chats: true, comments: true },
		push: { newsletter: true, chats: true, comments: true },
	})
	batch
		.commit()
		.then(() => {
			console.log('added document')
		})
		.catch(console.log)
}

export { onUserCreate }
