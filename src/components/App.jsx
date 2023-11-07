import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { groupByLabel } from './Statistics/Statistics';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

const reducedData = groupByLabel(data);

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={reducedData} />
      <FriendList friends={friends} />
    </>
  );
};
