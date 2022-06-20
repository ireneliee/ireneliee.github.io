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
} from "@ionic/react";
import { PostSummaryList } from "../components/PostSummaryList";
import { PostView } from "../components/PostView";
import {
  arrowForwardCircle,
  codeSlashOutline,
  documentOutline,
  hardwareChip,
  laptopOutline,
  peopleOutline,
  pin,
} from "ionicons/icons";
import { title } from "process";
import ExperienceContent from "../components/ExperienceContent";
import ActivitiesContent from "../components/ActivitiesContent";
import ProjectContent from "../components/ProjectContent";
import ContentWrapper from "../components/ContentWrapper";

const Tab2: React.FC = () => {
  const [page, setPage] = React.useState("Experience");

  return (
    <IonPage>
      <IonContent>
        <IonSplitPane contentId="main">
          <IonMenu side="start" menuId="custom" className="my-custom-menu">
            <IonHeader>
              <IonToolbar color="tertiary">
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem onClick={() => setPage("Experience")}>
                  <IonIcon icon={codeSlashOutline} slot="start" />
                  <IonLabel>Experiences</IonLabel>
                </IonItem>
                <IonItem onClick={() => setPage("Projects")}>
                  <IonIcon icon={laptopOutline} slot="start" />
                  <IonLabel>Notable projects</IonLabel>
                </IonItem>
                <IonItem onClick={() => setPage("Activities")}>
                  <IonIcon icon={peopleOutline} slot="start" />
                  <IonLabel>Activities</IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon icon={documentOutline} slot="start"/>
                  <IonLabel>Resume: <a href = "https://pdfhost.io/v/Held9WhWl_Irene_Lie_Updated_Resume.pdf">view</a></IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>

          <IonContent id="main">
            <ContentWrapper page={page}></ContentWrapper>
          </IonContent>
        </IonSplitPane>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
