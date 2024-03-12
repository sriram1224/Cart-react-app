
import { BiSolidUpArrow,BiSolidDownArrow
 } from "react-icons/bi";

function Cart() {
    const products = [
       
    ]
    return (
        <div>
            {products.map((product, index) => {
                return (
                    <div key={index}>
                        <h1>{product.name}</h1>
                        <h2>{product.price}</h2>
                        <button>
                        <BiSolidUpArrow />
                        </button>
                        <h3>{product.Quantity}</h3>
                        <button>
                            <BiSolidDownArrow />
                          </button>
                    </div>
                )
            })}
        </div>
    );
}

export default Cart;