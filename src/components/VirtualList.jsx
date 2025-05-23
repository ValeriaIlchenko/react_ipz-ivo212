import React from 'react';
import VirtualList from '../components/VirtualList';
import { allTraditions } from '../utils/data';

export default function Heritage() {
  return (
    <div>
      <h1>World Heritage (Virtualized)</h1>
      <VirtualList traditions={allTraditions} />
    </div>
  );
}
