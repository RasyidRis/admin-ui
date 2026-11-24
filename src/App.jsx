import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";

function App() {
  return (
    <>
      {/* Ganti ke <SignInPage /> kalau mau lihat halaman login */}
      <SignUpPage />
    </>
  );
}

export default App;