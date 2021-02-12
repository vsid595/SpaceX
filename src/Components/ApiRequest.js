import axios from 'axios';

const posts = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  console.log(res.data);
  return res.data;
};

export default posts;
