import React from 'react';

export const Navbar: React.FC = () => {
  const menuItems = [
    { href: "#all-in-one", label: "All-in-One" },
    { href: "#expertise", label: "전문성" },
    { href: "#clinical-evidence", label: "임상 근거" },
    { href: "#mental-health-checkup", label: "마음 검진" },
    { href: "#ecosystem", label: "선순환 사이클" },
    { href: "#key-pillars", label: "핵심 전략" },
    { href: "#core-service", label: "핵심 서비스" },
    { href: "#strategy-1", label: "전략 1: 능동 케어" },
    { href: "#strategy-2", label: "전략 2: 데이터" },
    { href: "#strategy-3", label: "전략 3: 연결성" },
    { href: "#scenarios", label: "시나리오" },
    { href: "#tcare-index", label: "T-Care 지표" },
    { href: "#brain-fitness", label: "브레인 피트니스" },
    { href: "#ux-guide", label: "UX 가이드" },
    { href: "#impact", label: "기대 효과" },
    { href: "#roadmap", label: "로드맵" },
    { href: "#future-vision", label: "미래 비전" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-10 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-8 select-none pointer-events-none">
      {menuItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="pointer-events-auto flex items-center gap-4 group transition-all duration-500"
        >
          {/* Minimal Line Indicator */}
          <div className="w-6 h-[1px] bg-gray-200 group-hover:w-10 group-hover:bg-monimo-blue transition-all duration-500"></div>

          {/* Label: Minimal Presence */}
          <span className="text-[11px] font-bold text-gray-300 group-hover:text-monimo-blue transition-colors duration-500 tracking-tighter whitespace-nowrap">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
};