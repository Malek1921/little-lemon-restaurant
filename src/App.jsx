import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Main />
      <footer className="bg-[#333333] text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <img
            src="https://littlelemonmedia.co.uk/wp-content/uploads/2022/07/logo.png"
            alt="Little Lemon Logo"
            className="h-10 mb-4 grayscale invert brightness-200"
          />
          <p className="text-sm text-gray-400">
            © 2024 Little Lemon Restaurant. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
