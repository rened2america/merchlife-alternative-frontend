// components/ProductCard.js

const ProductCard = ({ product,color }) => (
  <div className="mb-4 w-full px-2 sm:w-1/3 ">
    <div className="bg-gray-200 p-4 h-full flex flex-col">
      <a href={`/product/${product.artist.name}?productId=${product.id}&variant=${product.design[0].variant}&type=${product.types[0].value}`}>
        <img className="rounded-t-lg p-8 object-cover w-[320px] h-[320px]"   src={product.design[0].url} alt={product.name} />
      </a>
      <div className="px-4 pb-5 grid h-full ">
        <div className="flex items-center justify-between flex-1">
          <span className="text-2xl font-medium text-gray-900 break-words w-2/3">{product.title}</span>
          <div className="text-gray-900 w-1/4">${product.price}</div>
        </div>
        <div className="mt-8 flex  items-center">
          <div className="cust-collaction-btn ">
            {/* <a className="text-black"> */}
            <a href={`/product/${product.artist.name}?productId=${product.id}&variant=${product.design[0].variant}&type=${product.types[0].value}`}>
              shop now
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