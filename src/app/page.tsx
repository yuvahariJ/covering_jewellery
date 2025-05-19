// Json Data import

// import HomePageData from "../../JsonData/HomePage.json";
import EaringInfo from "./Components/EaringsInfo";
import PageWrapper from "./Components/PageWrapper";
// import RenderComponents from "./Components/RenderComponents";

export default function Home() {
  return (
    <PageWrapper>
      {/* <RenderComponents renderComponent={HomePageData.data} /> */}
      <EaringInfo/>
      
    </PageWrapper>
  );
}
