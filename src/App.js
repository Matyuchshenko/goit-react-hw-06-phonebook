import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import './App.css';

export default function App() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
