import React from 'react';
import Instances from './Instance'

const TeamsList = ({ team_instances }) => {

  return (
    <div>
      {
        team_instances.map((instances, indx) => {
          return <Instances instances={instances} key={instances + indx} />
        })
      }
    </div>
  );
}

export default TeamsList;

