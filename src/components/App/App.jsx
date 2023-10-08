import { Container, Header, SearchForm, Section, Text } from 'components';
import { Filter } from 'components/Filter/Filter';

import { TodoList } from 'components/TodoList/todoList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'redux/operations';
import { selectTodos } from 'redux/selectors';

export const App = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

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
