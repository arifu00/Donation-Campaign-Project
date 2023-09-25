import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  // console.log(donation);
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    price,
  } = donation;
  const card_bg = {
    backgroundColor: card_bg_color,
    color: text_button_bg_color,
  };
  const category_bg = {
    backgroundColor: category_bg_color,
  };
  const btn_bg = {
    backgroundColor: text_button_bg_color,
  };
  const title_Color ={
    color: '#0B0B0B',
  }
  return (
    <div>
      <div className="">
        <div className="relative flex  flex-row rounded-xl bg-clip-border  shadow-md" style={card_bg}>
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border">
            <img
              src={picture}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-2 w-24 text-center rounded-sm text-sm font-medium"
                style={category_bg}
              >
                {category}
            </h6>
            <h4 className="mb-2 block  text-2xl font-semibold leading-snug " style={title_Color}>
              {title}
            </h4>
            <p className="mb-2 block text-base font-semibold">
              ${price}
            </p>
            <Link>
              <button className="rounded-lg text-lg font-semibold text-white px-4 py-3" style={btn_bg}>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
