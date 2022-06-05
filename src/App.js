import Form from "./components/Form";
import Section from "./components/Section";
import ContactList from "./components/ContactsList";
import Filter from "./components/Filter";
import s from './App.module.css'

const App = () => {

    return (
      <div className={s.app}>
        <Section title='Телефонная книга'>
          <Form />
        </Section>

        <Section title='Контакты'>
          <Filter />
          <ContactList />
        </Section>
      </div>
    );
  }

export default App;
