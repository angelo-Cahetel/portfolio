import { BrowserRouter } from "react-router-dom";
import { Header, Contact, Projects, Hero } from "./sections";
import CustomCursor from "./components/CustomCursor.jsx";
import SmoothScroll from "./components/smoothScroll.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="fixed top-0 left-0 w-screen h-screen content-[''] z-10 pointer-events-none bg-[url('https://www.ui-layouts.com/noise.gif')] opacity-[0.05]"></div>
      <SmoothScroll>
        <Header />
        <Hero />
        <Projects />
        <Contact />
      </SmoothScroll>
      <CustomCursor />
    </BrowserRouter>
  );
};

export default App;
