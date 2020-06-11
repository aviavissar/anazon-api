import React from 'react';
import TeamsList from './TeamsList';
import { useStore } from '../state/Tasks.store';
import { isEmpty } from 'lodash';
import StatusBar from './StatusBar'

const Campaign = () => {
  
  const { campaign } = useStore();

  return (
    <div>
      {
        isEmpty(campaign) ? <div></div> : (
          <div className="App">
            <header className="App-header">
              <StatusBar></StatusBar>
              <h1>{campaign.campaign_name}</h1>
              <div className='App-logo'><img src='/logo.png' /></div>
            </header>
            <TeamsList team_instances={campaign.team_instances}></TeamsList></div>)
      }
    </div>
  )
}

export default Campaign;
