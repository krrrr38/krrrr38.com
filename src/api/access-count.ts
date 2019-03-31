import firebase from 'firebase/app'
import 'firebase/firestore'

export const AccessCountApi = {
  async incrementAccessCount(userId: string): Promise<number> {
    const userAccessCount = firebase.firestore().doc(`accesscount/${userId}`)
    const doc = await userAccessCount.get()
    let accessCount = 0
    if (doc.exists) {
      const data = doc.data()
      if (data) {
        accessCount = data.count
      }
    }
    accessCount += 1
    await userAccessCount.set({
      count: accessCount
    })
    return accessCount
  }
}
