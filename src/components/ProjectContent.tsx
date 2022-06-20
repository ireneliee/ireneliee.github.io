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
import { image, logoGithub, pin } from "ionicons/icons";
import React from "react";
import Post from "../models/Post";
import amf from "../images/Amf.png";
import github from "../images/github.png";
import git from "../images/git.png";
import "./ProjectContent.css";

const ProjectContent: React.FC = () => {
  return (
    <IonContent>
      <div className="experience-details">
        <div className="experience-card">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>January 2022 - May 2022</IonCardSubtitle>
              <IonCardTitle>
                Before Lightning: Enterprise System for Customized Laptop Online
                Shop
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Together with my teammates, I developed both the back-end and the
              front-end of two websites - one for the staff operating the online
              shop, and one for the customer seeking to buy customized laptop.
              The staff website is developed using JSF Framework, while the
              customer website is developed using Angular, which is connected to
              the Jakarta EE back-end using REST API.
              <div className="github-link">
                <IonButton
                  color="primary"
                  href="https://github.com/ireneliee/beforeLightningBackend"
                >
                  Staff portal + backend
                  <IonIcon slot="end" icon={logoGithub} />
                </IonButton>
                <IonButton
                  color="primary"
                  href="https://github.com/ireneliee/beforeLightningAngular"
                >
                  Customer portal
                  <IonIcon slot="end" icon={logoGithub} />
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
        <div className="experience-card">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>August 2021 - November 2021</IonCardSubtitle>
              <IonCardTitle>Holiday Reservation System</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Holiday Reservation System is an enterprise system created using
              Jakarta EE framework. This system has three clients:
              <ul>
                <li>
                  Management Client, whose use cases include common check-in and
                  check-out, walk-in search and reservation, automatic and
                  manual room allocation, creation of rooms, room types, and
                  room rates
                </li>
                <li>
                  HORS Reservation Client, whose use cases include guest log-in
                  and log-out, as well as search and reserve
                </li>
                <li>
                  HORS Reservation System, whose use cases are pretty much the
                  same as that of HORS Reservation Client. However, this client
                  utlizes the SOAP protocols
                </li>
              </ul>
              <IonButton
                color="primary"
                href="https://github.com/ireneliee/hors"
              >
                HORS
                <IonIcon slot="end" icon={logoGithub} />
              </IonButton>
            </IonCardContent>
          </IonCard>
        </div>
        <div className="experience-card">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>August 2021 - February 2021</IonCardSubtitle>
              <IonCardTitle>
                Part-time Software Engineer @I'm Friendly Co
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              In a team of 6, we developed an app to automatically pair users
              with a communicty of Listeners (youth peer supporters) based on
              their needs. The app also allows them to chat anonymously using
              React JS. This web-app is converted into mobile app using Ionic
              Capacitor.
            </IonCardContent>
          </IonCard>
        </div>
      </div>
    </IonContent>
  );
};

export default ProjectContent;
