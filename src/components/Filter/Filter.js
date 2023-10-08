import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input onChange={e => dispatch(setFilter(e.target.value))} type="text" />
  );
};
