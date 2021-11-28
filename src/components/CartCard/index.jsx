import { Div } from "./styles";

const CartCard = ({ item }) => (
  <Div>
    <h2>Resumo do pedido</h2>
    <p>
      {item.length} Pedidos{" "}
      <span>
        R${" "}
        {item
          .reduce((result, currentProduct) => result + currentProduct.price, 0)
          .toFixed(2)}{" "}
      </span>
    </p>
    <button>Finalizar pedido</button>
  </Div>
);

export default CartCard;
