export default function FoodGrid({ showFilterData }) {
  console.log(showFilterData);
  return (
    <>
      <div className="container font-bold text-xl ">
        Top Rated Dish near you
      </div>
      <div className="container grid md:grid-cols-3 lg:grid-cols-4">
        {showFilterData.map((items, index) => {
          return <></>;
        })}
      </div>
    </>
  );
}
