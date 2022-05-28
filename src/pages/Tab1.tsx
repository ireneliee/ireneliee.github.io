import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import MovingTitle from "../components/MovingTitle";
import Coffee from "../components/Coffee";

const Tab1: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen class = "tab-one-fullscreen">
          <div className = "animation-container-homepage">
              <div className = "moving-title">
                  <MovingTitle></MovingTitle>
              </div>
              <div className = "coffee-machine">
                  <Coffee></Coffee>
              </div>
          </div>
          <div className = "irene-bio">

          </div>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
