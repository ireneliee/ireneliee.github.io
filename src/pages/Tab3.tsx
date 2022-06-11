import { IonContent, IonHeader, IonItem, IonList, IonMenu, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React from "react";
import ExperienceContent from '../components/ExperienceContent';

const Tab3: React.FC = () => {
  return (
    <IonContent>
        <IonSplitPane contentId = "main">
          <IonMenu side="start" menuId="custom" className="my-custom-menu">
            <IonHeader>
              <IonToolbar color="tertiary">
                <IonTitle>Custom Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem>Experience</IonItem>
                <IonItem>Work & Project</IonItem>
                <IonItem>Activities</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          
          <IonContent id = "main"><ExperienceContent></ExperienceContent></IonContent>
        </IonSplitPane>
      </IonContent>
  );
};

export default Tab3;
