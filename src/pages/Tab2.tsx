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
} from "@ionic/react";
import { PostSummaryList } from "../components/PostSummaryList";

// remember, you put the database here
const listOfPosts = [
  {
    title: "Lorem Ipsum",
    shortSummary:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    created: new Date(),
    photoLink: "https://picsum.photos/id/237/200/300",
    content:
      "hat is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }
];

const Tab2: React.FC = () => {
  return (
    <IonContent>
    <IonSplitPane contentId="main">
        <PostSummaryList posts = {listOfPosts}></PostSummaryList>
        <IonMenu contentId="main"></IonMenu>

        {/*-- the main content --*/}
        <IonPage id="main" />
      </IonSplitPane>
    </IonContent>
  );
};

export default Tab2;
