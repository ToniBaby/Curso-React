import ItemListContainer from "../itemList/ItemListContainer";

const Home = ({ nombre }) => {
  return (
    <div>
      <h1>Hola {nombre}</h1>
      <ItemListContainer />
    </div>
  );
};

export default Home;
