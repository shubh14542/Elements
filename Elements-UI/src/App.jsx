import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import  { Toaster } from "react-hot-toast";

function App() {
  return (
   <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white">
      {/* Fixed Header */}
      <Header />

      {/* Main content that fills available space */}
      <main className="flex-grow  m-8 pt-20 pb-20 px-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
      <Toaster/>
    </div>
  );
}

export default App;
