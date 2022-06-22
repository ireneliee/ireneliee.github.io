import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { pin } from "ionicons/icons";
import React from "react";
import Post from "../models/Post";

const IndividualPostSummary: React.FC<Post> = ({
  title,
  shortSummary,
  created,
  photoLink,
  content,
}: Post) => {
  return (
    <IonCard>
      <IonItem>
        <IonIcon icon={pin} slot="start" />
        <IonLabel>{title}</IonLabel>
        <IonButton fill="outline" slot="end">
          View
        </IonButton>
      </IonItem>

      <IonCardContent>{shortSummary}</IonCardContent>
    </IonCard>
  );
};

export default IndividualPostSummary;
