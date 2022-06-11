import React from "react";
import {
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonRouterOutlet,
  IonContent,
  IonPage,
  IonList,
  IonSearchbar,
  IonLabel,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonChip,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { PostSummaryList } from "../components/PostSummaryList";
import { PostView } from "../components/PostView";
import { arrowForwardCircle, pin } from "ionicons/icons";
import { title } from "process";
import ExperienceContent from "../components/ExperienceContent";

// remember, you put the database here
const listOfPosts = [
  {
    title: "Lorem Ipsum",
    shortSummary:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    created: new Date("2022-06-10"),
    photoLink: "https://picsum.photos/id/237/200/300",
    content:
      "hat is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    title: "Notes on Work",
    shortSummary:
      "Work is always changing, and it’s entering a period of rapid evolution",
    created: new Date("2022-06-11"),
    content:
      "Initially my focus on work was driven by women. Specifically, I wanted to impress my mom, and to gain access to a broader selection of mates. In college, I registered that fairly unimpressive men received (as we barreled toward graduation) a disproportionate amount of attention from women if they drove a BMW or could host us at their parents house in Palm Springs/Laguna Niguel/Aspen.I secured a job at Morgan Stanley by lying about my grades and having the good fortune to interview with a guy who had also rowed crew: “Oarsmen get an automatic offer, as you’re willing to kill yourself in pursuit of a goal.” OK then. My analyst class at Morgan Stanley had 89 kids; I was (generously) the 88th best analyst. Number 89 was (no joke) escorted out of 1251 Avenue of the Americas by the FBI and convicted of insider trading. My focus on work turned serious when my mom got sick, as I knew I would need to take care of her. Then it became an obsession when my first child was born. The nurses in the delivery room (pro tip: Good healthcare is a function of the nurses, not the doc) were more worried about me than the newborn or the woman doing all the work. I could not stand, and I was so nauseous and faint. I was processing — badly — the realization that four decades of selfishness, and failures remaining private, had come to an end. For me, being a dad meant, first and foremost … work. Specifically, providing economic security for the science experiment brandishing a blue wristband marked with my surname. The first two years of his life, I was barely there. The same with his younger brother. While their mom needed my support, I found no evidence babies need their dad (can’t wait for the hate on this). Yes, they recognized me and smiled … as they did with the dog, nanny, and toaster oven. Properly motivated, I turned to work. I’m not alone in looking back on life defined by work. Our work constitutes our economy, it occupies most of our time, and it determines our friendships, mates, geography, and health and welfare. English is supposed to be the most nuanced language, with more words to provide more texture to communicate. Yet it falls short on the word “work,” as the concept covers a surface area that the single syllable can’t encapsulate. Note: I’m especially proud of the last sentence.",
    photoLink: "https://miro.medium.com/max/700/0*d4MCIsYq-FZk9PSs.png",
  },
];
let experience: string = "Internship and work experience";
let project: string =
  "All personal and team projects I have done outside of my internship experience";
let activities: string =
  "My miscellaneous activities that are non-work related";
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonSplitPane contentId="main">
          <IonList>
            <IonCard>
              <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>Experience</IonLabel>
                <IonButton fill="outline" slot="end">
                  Breakdowns
                </IonButton>
              </IonItem>

              <IonCardContent>{experience}</IonCardContent>
            </IonCard>

            <IonCard>
              <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>Projects</IonLabel>
                <IonButton fill="outline" slot="end">
                  Breakdowns
                </IonButton>
              </IonItem>

              <IonCardContent>{project}</IonCardContent>
            </IonCard>

            <IonCard>
              <IonItem>
                <IonIcon icon={pin} slot="start" />
                <IonLabel>Activities</IonLabel>
                <IonButton fill="outline" slot="end">
                  Breakdowns
                </IonButton>
              </IonItem>

              <IonCardContent>{activities}</IonCardContent>
            </IonCard>
            
          </IonList>

          
          <IonContent id = "main"><ExperienceContent></ExperienceContent></IonContent>
        </IonSplitPane>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
