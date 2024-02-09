import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function  Post () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost/server/wp-admin/post.php?post=1&action=edit")
        console.log(response);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching WordPress data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
