import BatterySection from "./sections/BatterySection";
import CameraSection from "./sections/CameraSection";
import ColorSection from "./sections/ColorSection";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import PricingSection from "./sections/PricingSection";
import ProcessorSection from "./sections/ProcessorSection";
import Quote from "./sections/Quote";
import { GlobalStyle } from "./styles/GlobalStyle";



function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Quote/>
      <PhoneModel/>

      <HeroSection/>
      <DesignSection/>
      <DisplaySection/>
      <ProcessorSection/>
      <BatterySection/>
      <ColorSection/>
      <CameraSection/>
      <PricingSection/>
    </div>
  );
}

export default App;
