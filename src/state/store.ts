import { create } from "zustand";
import { persist } from "zustand/middleware";
const useStore = create(
  persist(
    (set) => ({
      products: [],
      addProduct: (product: {
        id:number
        name: string;
        price: number;
        quantity: number;
        size: string;
        url: string;
      }) =>
        set((state: any) => {
          const findProduct = state.products.map(
            (productState: {
              id:number
              name: string;
              price: number;
              quantity: number;
              size: string;
              url: string;
            }) => {
              if (productState?.name === product.name && productState?.size === product.size && productState?.url === product.url) {
                return {
                  ...product,
                  quantity: product?.quantity + productState?.quantity,
                };
              }
              return productState;
            }
          );
          const existProduct = state.products.find(
            (findProduct: any) => findProduct?.name === product.name && findProduct?.size === product.size && findProduct?.url === product.url
          );
          if (existProduct) {
            return {
              products: [...findProduct],
            };
          }
          return {
            products: [...state.products, { ...product }],
          };
        }),
      removeFromCart: (itemName: string,itemSize:string,itemUrl:string) =>
        set((state: any) => ({
          products: state.products.filter(
            (item: any) => {
              console.log(item ,"--",itemName,itemSize,itemUrl)
              return (item?.name !== itemName || item?.size !== itemSize || item?.url !== itemUrl);
            }
          ),
        })),
      updateQuantitiy:(itemName: string,quantity:number)=>set((state:any)=>({products: state.products.map((item:any)=>(item.name == itemName)? {...item,quantity:quantity} : item)}))
    }),
    { name: "cart-storage" }
  )
);
export default useStore;