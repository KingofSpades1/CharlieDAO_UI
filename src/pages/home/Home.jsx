import { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
import axios from 'axios';
import { useLocation } from 'react-router';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <div className="column-headers">
        <div className="column-1">Web 3.0 Writings</div>
        <div className="column-2">Defi Primitives</div>
        <div className="column-3">Analytics</div>
      </div>
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}
