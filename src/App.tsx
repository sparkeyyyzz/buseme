import { useState } from 'react';
import WelcomeSection from './components/WelcomeSection';
import ApologySection from './components/ApologySection';
import InteractiveQuestion from './components/InteractiveQuestion';
import SurpriseSection from './components/SurpriseSection';
import FinalMessage from './components/FinalMessage';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  return (
    <div className="relative">
      {currentStep === 0 && <WelcomeSection onNext={goToNextStep} />}
      {currentStep === 1 && <ApologySection onNext={goToNextStep} />}
      {currentStep === 2 && <InteractiveQuestion onNext={goToNextStep} />}
      {currentStep === 3 && <SurpriseSection onNext={goToNextStep} />}
      {currentStep === 4 && <FinalMessage />}
    </div>
  );
}

export default App;
