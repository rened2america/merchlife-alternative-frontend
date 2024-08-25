// components/StoreCard.js

const StoreCard = ({ name,bannerUrl }) => (
  <div className="mb-4 w-full min-w-72 px-2 sm:w-1/3 ">
    <div className="bg-gray-200 p-4 h-full flex flex-col">
      <a href={`/store/d/${name}`}>
        <img className="rounded-t-lg p-8 object-cover w-full h-[320px]"   src={bannerUrl} alt={name} />
      </a>
      <div className="px-4 pb-5 grid h-full ">
        <div className="flex items-center justify-between flex-1">
          <span className="text-2xl font-medium text-gray-900 break-words w-2/3">{name}</span>
        </div>
        <div className="mt-8 flex  items-center">
        </div>
      </div>
    </div>
  </div>
);

export default StoreCard;