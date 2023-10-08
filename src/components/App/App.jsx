import { Container, Header, SearchForm, Section, Text } from 'components';
import { Filter } from 'components/Filter/Filter';

import { TodoList } from 'components/TodoList/todoList';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';

export const App = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
