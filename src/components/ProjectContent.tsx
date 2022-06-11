import {
    IonCard,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
    IonCardContent,
    IonContent,
    IonTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonImg,
    IonThumbnail,
  } from "@ionic/react";
  import { image, pin } from "ionicons/icons";
  import React from "react";
  import Post from "../models/Post";
  import amf from "../images/Amf.png";
  
  const ProjectContent: React.FC = () => {
    return (
      <IonContent>
        <h1> This is a project content</h1>
      </IonContent>
    );
  };
  
  export default ProjectContent;