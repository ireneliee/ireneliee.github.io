import React from "react";
import {
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
  IonContent,
  IonPage,
  IonList,
  IonSearchbar,
  IonLabel,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonChip,
  IonFab,
  IonFabButton,
  IonMenuToggle,
} from "@ionic/react";
import { PostSummaryList } from "../components/PostSummaryList";
import { PostView } from "../components/PostView";
import { arrowForwardCircle, pin } from "ionicons/icons";
import { title } from "process";
import ExperienceContent from "../components/ExperienceContent";

const Tab2: React.FC = () => {
  return (
    <IonContent>
    <IonSplitPane contentId="main">
      {/*--  the side menu  --*/}
      
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

      <ExperienceContent></ExperienceContent>
      <IonPage id="main"/>
    </IonSplitPane>
  </IonContent>
  );
};

export default Tab2;
