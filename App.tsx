import React, { Suspense, useState, useEffect } from 'react';
import { Scene } from './components/Scene';
import { Overlay } from './components/Overlay';

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-arix-dark z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-arix-emerald border-t-arix-gold rounded-full animate-spin"></div>
        <p className="font-display text-arix-gold tracking-[0.3em] text-xs animate-pulse">PREPARING LUXURY</p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isAssembled, setIsAssembled] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative w-full h-screen overflow-hidden bg-arix-dark selection:bg-arix-gold selection:text-arix-dark">
      <Suspense fallback={<Loader />}>
        <Scene isAssembled={isAssembled} />
      </Suspense>
      <Overlay isAssembled={isAssembled} toggleAssembled={() => setIsAssembled(!isAssembled)} />
    </main>
  );
};

export default App;