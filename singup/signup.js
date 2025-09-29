// signup.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, connectAuthEmulator } from "firebase/auth";

// Firebase の設定（本番プロジェクトIDは使わない、Emulator 用）
const firebaseConfig = {
  apiKey: "fake-api-key",
  authDomain: "localhost",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Emulator に接続
connectAuthEmulator(auth, "http://localhost:9099");

// ユーザー作成
createUserWithEmailAndPassword(auth, "test@example.com", "password123")
  .then((userCredential) => {
    console.log("ユーザー作成成功:", userCredential.user.uid);
  })
  .catch((err) => console.error(err));

