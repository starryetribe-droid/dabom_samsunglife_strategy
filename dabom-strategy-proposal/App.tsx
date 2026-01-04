import React from 'react';
import { Navbar } from './components/Navigation';
import { AllInOneSolution } from './components/sections/AllInOneSolution';
import { Expertise } from './components/sections/Expertise';
import { Hero } from './components/sections/Hero';
import { B2BPivot } from './components/sections/B2BPivot';
import { RoutineScenarios } from './components/sections/RoutineScenarios';
import { MarketContext } from './components/sections/MarketContext';
import { HqFeelconomy } from './components/sections/HqFeelconomy';
import { CoreService } from './components/sections/CoreService';
import { KeyPillars } from './components/sections/KeyPillars';
import { EcosystemStrategy } from './components/sections/EcosystemStrategy';
import { StrategyOne } from './components/sections/StrategyOne';
import { StrategyTwo } from './components/sections/StrategyTwo';
import { StrategyThree } from './components/sections/StrategyThree';
import { Scenarios } from './components/sections/Scenarios';
import { DabomTCareIndex } from './components/sections/DabomTCareIndex';
import { ClinicalEvidence } from './components/sections/ClinicalEvidence';
import { MentalHealthCheckup } from './components/sections/MentalHealthCheckup';
import { BrainFitness } from './components/sections/BrainFitness';
import { UXGuide } from './components/sections/UXGuide';
import { Impact } from './components/sections/Impact';
import { Roadmap } from './components/sections/Roadmap';
import { FutureVision } from './components/sections/FutureVision';
import { Footer } from './components/sections/Footer';
import { ConceptPivot } from './components/sections/ConceptPivot';
import { Gamification } from './components/sections/Gamification';
import { DigitalDetox } from './components/sections/DigitalDetox';
import { RitualLife } from './components/sections/RitualLife';

function App() {
  return (
    <div className="relative h-screen w-full bg-monimo-bg text-monimo-black font-sans overflow-hidden">
      <Navbar />

      <main className="h-full w-full overflow-y-scroll scroll-smooth no-scrollbar">
        <Hero />
        <B2BPivot />
        <RoutineScenarios />
        <MarketContext />
        <HqFeelconomy />
        <AllInOneSolution />
        <Expertise />
        <ConceptPivot />
        <Gamification />
        <DigitalDetox />
        <RitualLife />
        <ClinicalEvidence />
        <MentalHealthCheckup />
        <EcosystemStrategy />
        <KeyPillars />
        <CoreService />
        <StrategyOne />
        <StrategyTwo />
        <StrategyThree />
        <Scenarios />
        <DabomTCareIndex />
        <BrainFitness />
        <UXGuide />
        <Impact />
        <Roadmap />
        <FutureVision />
        <Footer />
      </main>
    </div>
  );
}

export default App;