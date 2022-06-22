import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  codeSlashOutline,
  documentOutline,
  download,
  laptopOutline,
  menu,
  peopleOutline,
} from "ionicons/icons";
import React from "react";
import ContentWrapper from "../components/ContentWrapper";

const Tab2: React.FC = () => {
  const [page, setPage] = React.useState("Experience");

  return (
    <>
      <IonMenu side="start" menuId="first" contentId="main">
        <IonHeader>
          <IonToolbar color = "tertiary">
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
              <IonIcon icon={download} slot="start" />
              <IonLabel>
                <a href="https://pdfhost.io/v/Held9WhWl_Irene_Lie_Updated_Resume.pdf">
                Resume
                </a>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main">
        <IonContent>
          <IonMenuToggle color="#f8f9f9">
            <IonButton  fill = "clear">
              <IonIcon slot="icon-only" icon={menu} />
            </IonButton>
            
          </IonMenuToggle>
          <ContentWrapper page={page}></ContentWrapper>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab2;
function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
