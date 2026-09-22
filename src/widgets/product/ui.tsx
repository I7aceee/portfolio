'use client'


import { useEffect, useState } from "react"
import { pushEvent } from "@/shared/lib/push-event";

const products = [
  { item_id: "sku_001", item_name: "Тестовые кроссовки", item_category: "Обувь", price: 4990, quantity: 1 },
  { item_id: "sku_002", item_name: "Тестовая куртка", item_category: "Одежда", price: 8990, quantity: 1 },
]

export const TestProduct = () => {
  const [cart, setCart] = useState<typeof products>([])

  useEffect(() => {
    pushEvent('ecommerce', null)
    pushEvent('view_item', {
      ecommerce: { currency: "RUB", value: products[0].price, items: [products[0]] },
    })
  }, [])

  const addToCart = (product: typeof products[0]) => {
    setCart((prev) => [...prev, product])
    pushEvent('ecommerce', null)
    pushEvent('add_to_cart', {
      ecommerce: { currency: "RUB", value: product.price, items: [product] },
    })
  }

  const beginCheckout = () => {
    const value = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)
    pushEvent('ecommerce', null)
    pushEvent('begin_checkout', {
      ecommerce: { currency: "RUB", value, items: cart },
    })
  }

  const purchase = () => {
    const value = cart.reduce((sum, p) => sum + p.price * p.quantity, 0)
    pushEvent('ecommerce', null)
    pushEvent('purchase', {
      ecommerce: {
        transaction_id: `T-${Date.now()}`,
        currency: "RUB",
        value,
        items: cart,
      },
    })
  }

  return (
    <div>
      {products.map((p) => (
        <div key={p.item_id}>
          <span>{p.item_name} — {p.price} ₽</span>
          <button onClick={() => addToCart(p)}>В корзину</button>
        </div>
      ))}
      <p>В корзине: {cart.length} товар(ов)</p>
      <button onClick={beginCheckout} disabled={cart.length === 0}>Оформить заказ</button>
      <button onClick={purchase} disabled={cart.length === 0}>Оплатить</button>
    </div>
  )
}