import { MainStyled } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import addProductThunk from "../../store/modules/cart/thunks";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  return (
    <>
      <MainStyled>
        <div>
          {products.map((item, i) => (
            <section key={i}>
              <img src={item.img} alt={item.name} />
              <strong>{item.name}</strong>
              <span>R$ {item.price.toFixed(2)}</span>
              <button onClick={() => dispatch(addProductThunk(item))}>
                Adicionar
              </button>
            </section>
          ))}
        </div>
      </MainStyled>
    </>
  );
};

export default Home;
