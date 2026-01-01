import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  pageNumber?: number;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '', pageNumber }) => {
  return (
    <section
      id={id}
      className={`
        w-full min-h-screen snap-start snap-always 
        flex flex-col justify-center items-center 
        py-12 box-border relative ${className}
      `}
    >
      {children}
      {pageNumber && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[14px] font-bold text-gray-600 z-50 font-mono">
          {pageNumber}
        </div>
      )}
    </section>
  );
};