import Header from './components/Header';
import Hero from './components/Hero';
import Pipeline from './components/Pipeline';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Pipeline />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;