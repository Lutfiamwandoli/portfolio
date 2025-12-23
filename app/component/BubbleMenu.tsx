'use client'
import { useState, useRef, useEffect } from 'react';

interface MenuItem {
  label: string;
  href: string;
  ariaLabel: string;
  rotation: number;
  hoverStyles: {
    bgColor: string;
    textColor: string;
  };
}

interface BubbleMenuProps {
  logo: React.ReactNode;
  items: MenuItem[];
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
}

const BubbleMenu: React.FC<BubbleMenuProps> = ({
  logo,
  items,
  menuAriaLabel = 'Toggle navigation',
  menuBg = '#ffffff',
  menuContentColor = '#111111',
  useFixedPosition = false,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      ref={menuRef}
      className={`bubble-menu ${useFixedPosition ? 'fixed' : 'relative'}`}
      style={{ zIndex: 1000 }}
    >
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        aria-label={menuAriaLabel}
        className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
        style={{
          backgroundColor: menuBg,
          color: menuContentColor,
        }}
      >
        <div className="flex flex-col items-center justify-center">
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            logo
          )}
        </div>
      </button>

      {/* Menu Items */}
      {isOpen && (
  <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex flex-row gap-3 items-center">

          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-label={item.ariaLabel}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="bubble-item relative px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:scale-110 hover:shadow-xl"
              style={{
                backgroundColor: menuBg,
                color: menuContentColor,
                transform: `rotate(${item.rotation}deg)`,
                animation: `bubbleIn ${animationDuration}s ${animationEase} ${index * staggerDelay}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = item.hoverStyles.bgColor;
                e.currentTarget.style.color = item.hoverStyles.textColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = menuBg;
                e.currentTarget.style.color = menuContentColor;
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes bubbleIn {
          from {
            opacity: 0;
            transform: scale(0) rotate(${0}deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(var(--rotation, 0deg));
          }
        }

        .bubble-item {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default BubbleMenu;