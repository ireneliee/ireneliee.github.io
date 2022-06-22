import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
} from "@ionic/react";
import React from "react";

const ExperienceContent: React.FC = () => {
  return (
    <>
      <div className="internship-details">
        <div className="card">
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>May 2022 - current</IonCardSubtitle>
              <IonCardTitle>
                Advanced Micro Foundry IT Developer Intern
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              In this summer, I am interning at Advanced Micro Foundry. My first
              project is to redesign the company website and pipeline form
              responses to the company's internal workflow. Currently, I am in
              the midst of developing internal productivity tool whose main use
              case is to keep track of all bug fix / software installation
              requests directed to the IT Team.
            </IonCardContent>
          </IonCard>

          {/* <div className="image-details">
            <img className="company-image" src={amf} alt="amf" />
          </div> */}
        </div>
      </div>
      <div className="internship-details">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>May 2021 - current</IonCardSubtitle>
            <IonCardTitle>Kodecoon STEM Instructor</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            During the 2021 summer, I did my internship in Kodecoon Academy.
            Despite having little to zero interest in teaching, I quickly came
            in love imparting my technical knowledge to kids as young as 6 years
            old. During my internship, I have led more than 20 holiday camps
            throughout the PSLE holiday season. Up until now, I have introduced
            game design to more than a hundred students. On top of teaching, I
            also developed advanced Python curriculum on Data Structure and
            Algorithm for the older students. The last project given to me in
            Kodecon was to develop a program to web-scrape a search engine
            result so as to gather publicly available materials - this is to be
            used by the Materketing Team's advertisement campaign. I continue to
            work part-time as Python and web design instructor up until today.
          </IonCardContent>
        </IonCard>
      </div>
      <div className="internship-details">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>January 2021 - May 2021</IonCardSubtitle>
            <IonCardTitle>
              Karirpad & Arcigee Software Tester Intern
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Throughout the second semester of my first year in university, I was
            working as a part-time intern in Karirpad & Arcigee. My main
            responsibility include conducting tests to ensure that the job
            seeker portal fulfills its usability goals before it gets deployed.
            On top of that, I also worked together with a website designer to
            create the webpage of the holding company using Figma. The design
            can be seen <a href="https://tinyurl.com/jobseekercompany">here</a>.
            My last project in Karirpad & Arcigee include conducting market
            research and analysis to find out the strength and weaknesses of the
            company's competitors in the market then. Based on this, I suggested
            strategies for the company to develop competitives advantage over
            its competitors.
          </IonCardContent>
        </IonCard>
      </div>
    </>
  );
};

export default ExperienceContent;
