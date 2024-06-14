const RenderPhoto = (airlines) => {
  switch (airlines) {
    case "Garuda Indonesia":
      return "/garuda.png";
    case "Lion Air":
      return "/liona.png";
    case "Singapore Airlines":
      return "/singas.png";
    case "AirAsia Indonesia":
      return "/aira.png";
    case "Citilink":
      return "/city.png";
    default:
      return "/default.png";
  }
};

export default RenderPhoto;
