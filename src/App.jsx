import TabssContainer from "./components/tabsContainer";
import Header from "./layout/header";
import Wrapper from "./layout/wrapper";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <TabssContainer />
      </Header>
    </Wrapper>
  );
};
export default App;
