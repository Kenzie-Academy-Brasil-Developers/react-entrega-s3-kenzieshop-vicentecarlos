import { useSelector } from "react-redux";
import { MainStyled, DivSection } from "./styles";
import CartCard from "../../components/CartCard";

const Cart = () => {
  const carProduct = useSelector((store) => store.products_car);

  return (
    <>
      <MainStyled>
        <DivSection>
          <h2>Produtos adicionados</h2>
          {carProduct.map((item, i) => (
            <section key={i}>
              <img src={item.img} alt={item.name} />
              <strong>{item.name}</strong>
              <span>R$ {item.price.toFixed(2)}</span>
            </section>
          ))}
        </DivSection>
        <CartCard item={carProduct} />
      </MainStyled>
    </>
  );
};

export default Cart;
