import { Profile } from './Profile/Profile';
import userJson from './Profile/user.json';

const user = userJson.stringify();

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
