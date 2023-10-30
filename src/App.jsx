import { useState } from "react";
import Items from "./components/items";
import Loader from "./components/loader";
import TabssContainer from "./components/tabsContainer";
import Header from "./layout/header";
import Wrapper from "./layout/wrapper";

const App = () => {
  const [Loading, setLoding] = useState(true);

  setTimeout(() => {
    setLoding(false);
  }, 3000);

  return (
    <Wrapper>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <TabssContainer />
          </Header>
          <Items />
        </>
      )}
    </Wrapper>
  );
};
export default App;
