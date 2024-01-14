// todo: remove this
// import bgImg from './assets/IMG_0291.png';
import Keyboard from './components/Keyboard';

const items = [{ name: 'Huevo' }, { name: 'Leche' }, { name: 'Milo' }];

function App() {
  return (
    <main>
      <div className="flex">
        <div className="flex-grow">
          <h2>Productos</h2>

          <ul>
            {items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="flex-grow">
          <h2>Lista</h2>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div>Producto: </div>
      <Keyboard />
    </main>
  );
}

export default App;
