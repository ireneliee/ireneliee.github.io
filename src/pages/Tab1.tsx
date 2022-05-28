import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import MovingTitle from "../components/MovingTitle";

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen class = "tab-one-fullscreen">
          <MovingTitle></MovingTitle>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
