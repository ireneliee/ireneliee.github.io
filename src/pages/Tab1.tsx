import {IonButton, IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import MovingTitle from "../components/MovingTitle";
import Coffee from "../components/Coffee";
import {Route} from "react-router-dom";
import Bio from "./Bio";

const Tab1: React.FC = () => {
  return (
    <IonPage>
        <IonRouterOutlet>
            <Route path="/tab1/bio" component={Bio} />
        </IonRouterOutlet>

      <IonContent fullscreen class = "tab-one-fullscreen">
          <div className = "animation-container-homepage">
              <div className = "moving-title">
                  <MovingTitle></MovingTitle>
              </div>
              <div className = "coffee-machine">
                  <Coffee></Coffee>
              </div>
          </div>
          <div className = "button-menu">
              <IonButton color="light" className = "button-choice" href = "Bio">Bio</IonButton>
              <IonButton color="medium" className = "button-choice">Notable Project</IonButton>
              <IonButton color="dark" className = "button-choice">Social Media</IonButton>
          </div>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
