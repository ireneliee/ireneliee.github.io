import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
} from "@ionic/react";
import React from "react";

const ActivitiesContent: React.FC = () => {
  return (
    <>
      <div className="activity-details">
        <div className="card">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>March 2022 - current</IonCardSubtitle>
              <IonCardTitle>NUS Hackers Coreteam</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <a href="https://www.nushackers.org/">NUS Hackers</a> is a
              student-run organization committed to the spread of hacker culture
              & free/open-source software. We provide a support system for
              hackers in NUS who are currently building things (be it for
              charity, business or pleasure). We also hold workshops, run
              hackfests, and release open source code for the NUS community.
            </IonCardContent>
          </IonCard>
        </div>
      </div>
      <div className="activity-details">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>May 2021 - June 2022</IonCardSubtitle>
            <IonCardTitle>PINUS Press Directors</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            PINUS is an organization whose aim is to cater to the needs of
            Indonesian students studying at NUS. As a Press director, together
            with my co-director, I managed a team of 6 to create and publish
            articles, galleries, and stories in our social media account. As
            Press director, I also lead the team in organizing PINUS Playbook:
            Humans of Pinus Live, a TED-talk-like event for Indonesian students
            studying at NUS.
          </IonCardContent>
        </IonCard>
      </div>
      <div className="activity-details">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>January 2020 - current</IonCardSubtitle>
            <IonCardTitle>NUS Ambassador</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            As an NUS Ambassador, I promote the university to incoming
            undergraduates by leading university tours as well as responding to
            queries during Live Chat.
          </IonCardContent>
        </IonCard>
      </div>
    </>
  );
};

export default ActivitiesContent;
