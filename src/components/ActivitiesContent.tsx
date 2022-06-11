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
  
  const ActivitiesContent: React.FC = () => {
    return (
      <IonContent>
        <h1> This is an activities content</h1>
      </IonContent>
    );
  };
  
  export default ActivitiesContent;