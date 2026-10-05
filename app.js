import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// GANTI DENGAN CONFIG KAU SENDIRI
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "mybusinesswebsite-49e37.firebaseapp.com",
  projectId: "mybusinesswebsite-49e37",
  storageBucket: "mybusinesswebsite-49e37.appspot.com",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "G-BYB8R3C37F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// FUNGSI SIMPAN FEEDBACK
document.getElementById('fbBtn').addEventListener('click', async () => {
    const nama = document.getElementById('fbNama').value;
    const mesej = document.getElementById('fbMesej').value;

    if (nama === "" || mesej === "") {
        alert("Sila isi nama dan mesej anda.");
        return;
    }

    try {
        await addDoc(collection(db, "feedback"), {
            nama: nama,
            mesej: mesej,
            tarikh: new Date().toLocaleString()
        });
        alert("Terima kasih atas maklum balas anda!");
        document.getElementById('fbNama').value = "";
        document.getElementById('fbMesej').value = "";
    } catch (e) {
        alert("Ralat: " + e);
    }
});