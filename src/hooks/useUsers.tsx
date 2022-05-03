import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../services/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    console.log('me ejecuto');
    console.log(pageRef.current);

    const resp = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pageRef.current,
      },
    });
    if (resp.data.data.length > 1) {
      setUsers(resp.data.data);
    } else {
      pageRef.current--;
      alert('no more results');
    }
  };

  const nextPage = () => {
    pageRef.current++;
    loadData();
  };

  const prevPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadData();
    }
  };

  return {
    users,
    nextPage,
    prevPage,
  };
};
