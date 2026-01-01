import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full min-h-[50vh] snap-start bg-monimo-bg border-t border-gray-200 text-center flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-8 text-monimo-black">Thank You</h2>
        <p className="text-monimo-gray text-sm mb-4 font-medium">Copyright 2025 © ETRIBE CORP. ALL RIGHT RESERVED</p>
        <p className="text-gray-400 text-xs">이트라이브x고대 마음건강연구소</p>
      </div>
    </footer>
  );
};