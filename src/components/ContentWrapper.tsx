import React from "react";
import ActivitiesContent from "./ActivitiesContent";
import ExperienceContent from "./ExperienceContent";
import ProjectContent from "./ProjectContent";

interface ContentWrapperProp {
    page: String;
}
const ContentWrapper: React.FC<ContentWrapperProp> = ({page}: ContentWrapperProp) => {
    if(page === "Experience") {
        return <ExperienceContent></ExperienceContent>
      } else if(page === "Projects") {
        return <ProjectContent></ProjectContent>
      } else if(page === "Activities") {
        return <ActivitiesContent></ActivitiesContent>
      } else {
        return(
            <div>
                <h1>No choice is given</h1>
            </div>
        )
      }
  }

  export default ContentWrapper;