import React from 'react';

const variants = {
  noun: 'bg-blue-100 text-blue-800',
  verb: 'bg-green-100 text-green-800',
  adjective: 'bg-purple-100 text-purple-800',
  adverb: 'bg-yellow-100 text-yellow-800',
  easy: 'bg-emerald-100 text-emerald-800',
  medium: 'bg-orange-100 text-orange-800',
  hard: 'bg-red-100 text-red-800'
};

type BadgeVariant = keyof typeof variants;

interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
}

export function Badge({ children, variant }: BadgeProps) {
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-sm font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}