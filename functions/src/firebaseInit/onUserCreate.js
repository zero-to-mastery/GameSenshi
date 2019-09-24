const onUserCreate = (user, firestore) => {
	const batch = firestore.batch()
	const docRef = firestore.doc(`users/${user.uid}/settings/notifications`)
	batch.set(docRef, {
		email: { orderUpdates: true, chats: true, comments: true },
		push: { newsletter: true, chats: true, comments: true },
	})
	batch
		.commit()
		.then(console.log)
		.catch(console.log)
}

export { onUserCreate }
