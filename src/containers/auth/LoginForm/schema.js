import { object, string } from 'yup';

export default object().shape({
  username: string().required('Username is required')
});
