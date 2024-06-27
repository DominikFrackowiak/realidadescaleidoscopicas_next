import { useState, useEffect } from 'react'
import { db } from '../../firebase/firebaseConfig'
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore'
import {FirestoreWord} from '../../types/types'

const useFirestoreData = (collectionName: string, limitCount: number = 15) => {
  const [words, setWords] = useState<FirestoreWord[]>([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, collectionName),
          orderBy('value', 'desc'),
          limit(limitCount)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          setError('Todavía no hay ninguna palabra')
        } else {
          const results = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as FirestoreWord[]
          setWords(results)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
      } finally {
        setIsPending(false)
      }
    }

    fetchData()
  }, [collectionName, limitCount])

  return { words, isPending, error }
}

export default useFirestoreData
