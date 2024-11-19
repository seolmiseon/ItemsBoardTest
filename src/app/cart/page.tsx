import CartItem from '@/components/cart/cartItem';
import CartSummary from '@/components/cart/cartSummary';

export default function CartPage() {
    return (
        <div>
            <h1>장바구니</h1>
            <CartItem />
            <CartSummary />
        </div>
    );
}
