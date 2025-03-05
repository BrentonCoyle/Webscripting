// components/Button.tsx
'use client';

import React from 'react';

type ButtonProps = {
  label: string;
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ label, color, onClick }: ButtonProps) {
  return (
    // Button Start
    <button
      // Update styles on button
      style={{
        backgroundColor: color,
        color: "#fff",
        padding: "12px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {label}
    </button>
    // Button End
  );
}
