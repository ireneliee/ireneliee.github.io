import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import MovingTitle from "../components/MovingTitle";
import Coffee from "../components/Coffee";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Bio from "./Bio";
import { IonReactRouter } from "@ionic/react-router";
import monoPic from "../images/irene-almost-mono.png";
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/Bio">
            <Bio />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>

      <IonContent fullscreen class="tab-one-fullscreen">
        <div className="animation-container-homepage">
          <div className="narative">
            <div className = "profile-pic">
              <img id="mono-pic" src={monoPic} alt="irene" />
            </div>
            <div className="moving-title">
              <MovingTitle></MovingTitle>
            </div>
            <div>
              <p>
                As an Information System undergraduate at NUS, I am very much
                curious about everything computer science related. However, if I
                have to choose? Well, I am probably most interested in the
                development of an enterprise system.
              </p>
            </div>
          </div>

          <div className="coffee-machine">
            <Coffee></Coffee>
          </div>
        </div>
        <div></div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
