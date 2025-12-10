import s from "./App.module.scss";
import AddDiscipline from "./components/AddDiscipline/AddDiscipline";
import AddDisciplineOptions from "./components/AddDisciplineOptions/AddDisciplineOptions";
import Layout from "./components/Layout/Layout";
import Btn from "./components/UiKit/Btn/Btn";

function App() {
  return (
    <div className={s.root}>
      <Layout>
        <Btn>Добавить</Btn>
        <Btn isDisabled>Добавить</Btn>
        <AddDiscipline />
        <AddDisciplineOptions />
      </Layout>
    </div>
  );
}

export default App;
