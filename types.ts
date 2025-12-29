
import React from 'react';

export interface SectionProps {
  id: string;
}

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}