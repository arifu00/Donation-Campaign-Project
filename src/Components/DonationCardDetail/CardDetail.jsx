const CardDetail = ({ donation }) => {
  // console.log(donation);
  const {
    id,
    picture,
    title,
    price,
    description,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = donation;
  const btn_bg = {
    backgroundColor: text_button_bg_color,
  };
  return (
    <div>
      <div className="">
        <div className=" rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div className="relative">
              <img className="w-full" src={picture} alt={title} />
              <div className="absolute bottom-0 bg-opacity-40 flex items-center bg-black w-full py-10">
                <button
                  className="ml-8 backdrop:text-xl py-3 px-4 rounded-lg font-semibold text-white"
                  style={btn_bg}
                >
                  Donate ${price}
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h4 className="block text-2xl md:text-4xl font-bold  leading-snug tracking-normal  antialiased">
              {title}
            </h4>
            <p className="mt-3 block  text-base font-normal text-[#0b0b0bb3] leading-relaxed text-gray-700 antialiased">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
