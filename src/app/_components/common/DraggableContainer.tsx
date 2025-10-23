'use client';

import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { IoClose } from 'react-icons/io5';

interface DraggableContainerProps {
  children: React.ReactNode;
  title: string;
  initialPosition?: { x: number; y: number };
  className?: string;
  onClose: () => void;
}

const DraggableContainer: React.FC<DraggableContainerProps> = ({
  children,
  title,
  initialPosition = { x: 100, y: 100 },
  className = '',
  onClose,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`absolute flex flex-col rounded-lg bg-[#181A1B] shadow-2xl ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'default',
        zIndex: 9999,
      }}
    >
      <div
        className="flex cursor-grab items-center justify-between rounded-t-lg bg-gray-800 p-2 text-white"
        onMouseDown={handleMouseDown}
      >
        <div className="font-semibold">{title}</div>
        <button
          onClick={onClose}
          className="rounded p-1 text-gray-400 hover:bg-gray-700 hover:text-white"
          aria-label="Close"
        >
          <IoClose size={18} />
        </button>
      </div>
      <div className="p-1">{children}</div>
    </div>
  );
};

export default DraggableContainer;
