import './App.css';
import Card from './components/UI/Card';
import LoginControl from './components/loginControl/LoginControl';
import MailBox from './components/messages/Mailbox';
import Page from './components/pageWarning/Page';
import List from './components/list/List';
import Blog from './components/blog/Blog';
import Form from './components/form/Form';
import FlavorForm from './components/form/FlavorForm';
import Reservation from './components/form/Reservation';
import Calculator from './components/calculator/Calculator';
import TodoTable from './components/todo/TodoTable';

function App() {
  const number = [1, 2, 3, 4, 5]
  const messages = ["1, 2, 3", "fdwe"]
  const posts = [
    {id: '1', title: 'Animals', content: 'Live with animals'},
    {id: '2', title: 'People', content: 'Live with people'}
  ]
  return (
    <div>
      <LoginControl />
      <Card />
      <MailBox unreadMessages={messages}/>
      <Page />
      <List number={number}/>
      <Blog value={posts}/>
      <Form />
      <FlavorForm />
      <Reservation />
      <Calculator />
      <hr />
      <TodoTable />
    </div>
  );
}

export default App;
