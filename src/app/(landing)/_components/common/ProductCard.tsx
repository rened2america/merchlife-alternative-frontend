// components/ProductCard.js

const ProductCard = ({ product }) => (
  <div className="mb-4 w-full px-2 sm:w-1/3 ">
    <div className="bg-gray-200 p-4 h-full flex flex-col">
      <a href="#">
        <img className="rounded-t-lg p-8" src={product.image} alt={product.name} />
      </a>
      <div className="px-4 pb-5 grid h-full ">
        <div className="flex items-center justify-between flex-1">
          <span className="text-3xl font-medium text-gray-900 dark:text-white">{product.name}</span>
          <div>${product.price}</div>
        </div>
        <div className="mt-8 flex  items-center">
          <div className="cust-collaction-btn ">
            <a className="text-black">
              {" "}
              shop now{" "}
              <span>
                <img
                  src="https://cdn.shopify.com/s/files/1/0981/1190/files/Arrow_1.svg?v=1710841588"
                  className="inline-block"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
