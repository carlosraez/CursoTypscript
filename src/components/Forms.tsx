import { useForm } from '../hooks/useForm';
export const Forms = () => {
  const { form, email, password, handleInputChange } = useForm({
    email: 'Carlos Raez',
    password: '12344',
  });
  return (
    <>
      <h3>Forms</h3>
      <input type="text" onChange={({ target }) => handleInputChange(target.value, 'email')} className="form-control" placeholder="Email" value={email}></input>
      <input
        type="text"
        onChange={({ target }) => handleInputChange(target.value, 'password')}
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}></input>
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};
