// Legacy prototype application retained for implementation history.
// The public Next.js portal is defined in pages/index.tsx.
import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

import { Header } from './Header';
import { GlobalDashboard } from './GlobalDashboard';
import { SynthocracyGovernance } from './SynthocracyGovernance';
import { EthicalDataMarketplace } from './EthicalDataMarketplace';
import { POWERcoinEconomy } from './WORTH';
import { RealTimeManifester } from './RealTimeManifester';
import { Footer } from './Footer';
import { SarahAI } from './SarahAI';

import './App.css';

function App() {
  const [showSarah, setShowSarah] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div
        role="status"
        className="bg-amber-100 border-b border-amber-300 px-4 py-3 text-center text-amber-950"
      >
        Legacy static prototype. All metrics, proposals, marketplace activity, balances,
        and controls below are demonstration content and are not live services.
      </div>

      <main>
        <section className="py-20 bg-gradient-to-r from-divine-chaos-700 to-sacred-order-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Synthsara Legacy Prototype
            </motion.h1>
            <motion.p
              className="text-xl max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A preserved visual design branch. It does not establish a live dashboard,
              operating governance service, data marketplace, currency, or external action
              system.
            </motion.p>
          </div>
        </section>

        <GlobalDashboard />
        <SynthocracyGovernance />
        <EthicalDataMarketplace />
        <POWERcoinEconomy />
        <RealTimeManifester />
      </main>

      <Footer />

      <button
        onClick={() => setShowSarah(!showSarah)}
        className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-divine-chaos-600 to-sacred-order-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition"
        aria-label="Toggle Sarah AI prototype"
      >
        {showSarah ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {showSarah && <SarahAI />}
    </div>
  );
}

export default App;
