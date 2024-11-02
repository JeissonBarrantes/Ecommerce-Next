"use client"

import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartPrice {
  total: number;
  shippingOrder: number;
  discount?: number;
  subtotal?: number;
}

const CartModal = () => {

    const cartItems: CartItem[] = [{
      id: 100, 
      name: "test", 
      price: 100, 
      quantity: 1, 
      image: "https://images.unsplash.com/photo-1728646995795-2e37aa8cb13e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Festivo",
      price: 200,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1719937050792-a6a15d899281?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"

    },
    {
      id: 3,
      name: "Festivo",
      price: 300,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const cartPrice: CartPrice = {
    total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    shippingOrder: 10,
  }
  
  return (
    <>
    
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
    <h2 className="font-semibold">Shopping Cart</h2>
        { 
        cartItems.length === 0 ? (<div>Cart is Empty</div>): 
            (<div className="flex-col justify-between space-y-4">{cartItems.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col gap-8">
                    {/* ITEM */}

                    <div className="flex gap-4">
                    <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={72} 
                    height={96} 
                    className="object-cover rounded-md" /> 
                    <div className="flex flex-col justify-between w-full">
                      {/* TOP */}
                      <div className="">
                        {/* TITLE */ }
                        <div className="flex items-center justify-between gap-8">
                            <h3 className="font-semibold">{item.name}</h3>
                          <div className="p-1 bg-gray-50 rounded-sm">{item.price}</div>
                        </div>
                        {/* Description */}
                        <div className="text-sm text-gray-500">
                            Avalible
                          </div>
                    </div>
                    {/* BOTTOM */}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{item.quantity}</span>
                      <span className="text-blue-500">Remove</span>
                    </div>
                  </div>
                </div>
              </div>   
            </div>
          
            ))}</div>
         
          ) 
            
        }
      {/* SUBTOTAL */}
      <div className="">
        <div className="items-center justify-between text-md flex font-semibold">
          <span className="">Subtotal</span>
          <span className="">{cartPrice.total}</span>
        </div>
        <p className="text-gray-500 text-sm mt-2 mb-4">Lorem upsum dolor de muela en el ipsum</p>
        <div className="flex justify-between text-sm">
          <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View cart</button>
          <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
        </div>
      </div>
       
     </div>

     </>
  )
}

export default CartModal