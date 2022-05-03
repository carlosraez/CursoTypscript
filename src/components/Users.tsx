import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes';

export const Users = () => {
  const { nextPage, prevPage, users } = useUsers();
  /**
   * Returns table off users 1 image , first Name and last name, and email
   * @param array user
   */
  const getRenderUsers = ({ id, avatar, first_name, last_name, email }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img src={avatar} alt={first_name} style={{ width: 35, borderRadius: 100 }}></img>
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  const getPagination = () => {
    return (
      <>
        <button onClick={prevPage} className="btn btn-primary">
          Prev
        </button>
        &nbsp;
        <button onClick={nextPage} className="btn btn-primary">
          Next
        </button>
      </>
    );
  };

  return (
    <>
      <h3>Users:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => getRenderUsers(user))}</tbody>
        {getPagination()}
      </table>
    </>
  );
};
