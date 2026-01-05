import React from 'react';
import { Navbar } from './components/Navigation';

import { Expertise } from './components/sections/Expertise';
import { Hero } from './components/sections/Hero';
import { B2BPivot } from './components/sections/B2BPivot';
import { InterimSection } from './components/sections/InterimSection';

import { CoreService } from './components/sections/CoreService';
import { KeyPillars } from './components/sections/KeyPillars';

import { StrategyOne } from './components/sections/StrategyOne';
import { StrategyTwo } from './components/sections/StrategyTwo';
import { StrategyThree } from './components/sections/StrategyThree';
import { Scenarios } from './components/sections/Scenarios';
import { DabomTCareIndex } from './components/sections/DabomTCareIndex';
import { ClinicalEvidence } from './components/sections/ClinicalEvidence';
import { MentalHealthCheckup } from './components/sections/MentalHealthCheckup';
import { BrainFitness } from './components/sections/BrainFitness';

import { Footer } from './components/sections/Footer';
import { ConceptPivot } from './components/sections/ConceptPivot';
import { Gamification } from './components/sections/Gamification';
import { DigitalDetox } from './components/sections/DigitalDetox';
import { RitualLife } from './components/sections/RitualLife';

import { Overview } from './components/sections/Overview';

function App() {
  return (
    <div className="relative h-screen w-full bg-monimo-bg text-monimo-black font-sans overflow-hidden">
      <Navbar />

      <main className="h-full w-full overflow-y-scroll scroll-smooth no-scrollbar">
        <Hero />
        <Overview />

        {/* Interim 1: Before Clinical Evidence */}
        <InterimSection
          id="interim-1"
          title="과학적 전문성 기반 멘탈 케어"
          description="자서전적 기억 훈련과 인지 훈련을 통해 정서와 인지 기능을 개선합니다."
          pageNumber={3}
          theme="blue"
          label="Part 1"
        />
        <ClinicalEvidence />
        <MentalHealthCheckup />
        <Expertise />
        <BrainFitness />

        {/* Interim 2: Before Key Pillars */}
        <InterimSection
          id="interim-2"
          title="능동적 케어를 통한\n핵심 전략"
          description="데이터 기반으로 필요한 순간에 즉각 개입하여 행동 변화를 이끌어냅니다."
          pageNumber={8}
          theme="blue"
          label="Part 2"
        />
        <KeyPillars />
        <CoreService />
        <StrategyOne />
        <StrategyTwo />
        <StrategyThree />
        <Scenarios />
        <DabomTCareIndex />

        {/* Interim 3: Before B2B Pivot */}
        <InterimSection
          id="interim-3"
          title="B2B 전략의 전환:\n보편적 웰니스"
          description="고위험군 선별이 아닌, 전 임직원이 즐기는 일상 속 멘탈케어로 확장합니다."
          pageNumber={16}
          theme="blue"
          label="Part 3"
        />
        <B2BPivot />

        {/* Interim 4: Before Concept Pivot */}
        <InterimSection
          id="interim-4"
          title="Concept Pivot:\n즐거운 몰입"
          description="지루한 훈련을 아닌, 게임처럼 즐겁고 리추얼처럼 지속 가능한 경험을 설계합니다."
          pageNumber={18}
          theme="blue"
          label="Part 4"
        />
        <ConceptPivot />
        <Gamification />
        <DigitalDetox />
        <RitualLife />
        <Footer />
      </main>
    </div>
  );
}

export default App;
