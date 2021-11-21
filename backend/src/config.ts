import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    api: {
      url: process.env.API_URL,
      users: process.env.API_USERS,
      posts: process.env.API_POSTS,
      comments: process.env.API_COMMENTS,
    }
  };
});
