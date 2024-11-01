import { Provider } from "react-redux";
import Header from "./components/Header.tsx";
import Shop from "./components/Shop.tsx";
import Product from "./components/Product.tsx";
import { DUMMY_PRODUCTS } from "./dummy-products.ts";
import { store } from "./store/store.ts";

function App() {
  return (
    <>
      {/* Use Provider component provided by react-redux package to wrap all main components in App.tsx file - pass in store setup for redux to share store data object to all child components */}
      <Provider store={store}>
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </Provider>
    </>
  );
}

export default App;
