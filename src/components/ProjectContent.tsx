import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
} from "@ionic/react";
import { linkOutline } from "ionicons/icons";
import React from "react";
import "./ProjectContent.css";

const ProjectContent: React.FC = () => {
  return (
    <>
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
                <div className="single-link">
                  <div className="icon">
                    <IonIcon icon={linkOutline}></IonIcon>
                  </div>
                  <div className="link">
                    <a href="https://github.com/ireneliee/beforeLightningBackend">
                      Staff portal + backend
                    </a>
                  </div>
                </div>
                <div className="single-link">
                  <div className="icon">
                    <IonIcon icon={linkOutline}></IonIcon>
                  </div>
                  <div className="link">
                    <a href="https://github.com/ireneliee/beforeLightningAngular">
                      Customer portal
                    </a>
                  </div>
                </div>
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
              <div className="github-link">
                <div className="single-link">
                  <div className="icon">
                    <IonIcon icon={linkOutline}></IonIcon>
                  </div>
                  <div className="link">
                    <a href="https://github.com/ireneliee/hors">HORS</a>
                  </div>
                </div>
              </div>
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
    </>
  );
};

export default ProjectContent;
