import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionWrapper } from './SectionWrapper';

export const Hero: React.FC = () => {
  return (
    <SectionWrapper id="top" className="relative overflow-hidden bg-[#F3F5F7]">
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-300/30 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-300/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s', animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-white/60 blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
        <FadeIn>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-white text-monimo-blue text-[15px] font-bold mb-10 ring-1 ring-blue-50/50">
            <span className="w-2.5 h-2.5 rounded-full bg-monimo-blue animate-pulse"></span>
            이트라이브 X 고려대 마음건강연구소
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 text-monimo-black tracking-tight drop-shadow-sm">
            시니어 멘탈·헬스케어 통합 관리<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#246BEB] to-[#1B5AC2]">더헬스 X 다봄</span>
          </h1>
          <p className="text-xl md:text-2xl text-monimo-gray max-w-3xl mx-auto leading-relaxed mb-12 font-medium break-keep">
            2026. 01. 06.
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};