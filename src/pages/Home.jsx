import Header from "../components/Header";
import Button from "../components/Button";
import HealthList from "../components/HealthList";

const Home = () => {
  return (
    <div>
      <Header
        title={"헬스 기록장"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <HealthList />
    </div>
  );
};

export default Home;
