import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  //   console.log(donation);
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = donation;
  const card_bg = {
    backgroundColor: card_bg_color,
    color: text_button_bg_color,
  };
  const category_bg = {
    backgroundColor: category_bg_color,
  };

  return (
    <div>
      <div className="">
        <Link to={`/donation/${id}`}>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img className="h-64" src={picture} alt={category} />
            </figure>
            <div className="card-body" style={card_bg}>
              <p
                className=" w-24 text-center rounded-sm text-sm font-medium"
                style={category_bg}
              >
                {category}
              </p>
              <p className="text-xl font-semibold">{title}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
