import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

const App = () => {

  return (
    <Container> {/* przyjmuje całą treść, którą mu przekazano, a następnie opakowują ją w <div> z odpowiednim stylem */}
      <Header />
      <Products />
    </Container>
  );
}

export default App;
