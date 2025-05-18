// Json Data import
"use client"

import HomePageData from "../../JsonData/HomePage.json";
import PageWrapper from "./Components/PageWrapper";
import RenderComponents from "./Components/RenderComponents";

export default function Home() {
  return (
    <PageWrapper>
      <RenderComponents renderComponent={HomePageData.data} />
      
    </PageWrapper>
  );
}
