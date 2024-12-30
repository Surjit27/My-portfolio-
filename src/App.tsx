import { Header } from './components/Header';
import { Journey } from './components/Journey';
import { NewspaperSection } from './components/NewspaperSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 text-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-12 space-y-24">
        <Journey />
        <NewspaperSection />
      </main>
    </div>
  );
}

export default App;