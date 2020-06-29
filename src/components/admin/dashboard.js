import React from 'react'
import { Tab } from 'semantic-ui-react'
import "./dashboard.css"
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


const panes = [
  {
    menuItem: 'Main', render: () => <Tab.Pane>
      <Segment>
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>

        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
  </Tab.Pane> },
  { menuItem: 'Blog', render: () => <Tab.Pane></Tab.Pane> },
  {
    menuItem: 'Placeholder', render: () => <Tab.Pane><Segment>
      <Dimmer active inverted>
        <Loader size='large'>Preparing Files</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment></Tab.Pane> },
]

function Dashboard() {
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='left'
      panes={panes}
    />
  )

};

export default Dashboard;