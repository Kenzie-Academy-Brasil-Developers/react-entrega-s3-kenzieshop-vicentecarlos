import { HeaderStyle } from "./styles";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { push } = useHistory();
  const counter = useSelector((store) => store.products_car);

  return (
    <>
      <HeaderStyle>
        <h1>Kenzie Shop</h1>
        <div>
          <span>{counter.length}</span>
          <button onClick={() => push("/cart")}>Carrinho</button>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
