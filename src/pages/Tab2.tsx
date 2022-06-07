import React from 'react';
import {
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
  IonContent,
  IonPage
} from '@ionic/react';
import { BlogPostMenu } from '../components/BlogPostMenu';
import PostList from '../components/PostList';

const Tab2: React.FC = () => {
  return (
    <IonContent>
    <IonSplitPane contentId="main">
        <PostList></PostList>
      <IonMenu contentId="main">
        
      </IonMenu>

      {/*-- the main content --*/}
      <IonPage id="main"/>
    </IonSplitPane>
  </IonContent>
  );
};

export default Tab2;

