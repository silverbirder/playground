import { WcFirestore } from './WcFirestore.js';

customElements.define('wc-firestore', WcFirestore);

import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

(async () => {
    console.log(process.env.HOGE)
    const firebaseApp = initializeApp({
        apiKey: 'XXX',
        projectId: 'XXX',
    });
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "collection"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
    });
})();