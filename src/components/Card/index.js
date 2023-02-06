import Button from "../Button";
import Description from "../Description";
import Image from "../Image";
import "./style.css";

function Card({ product, modalState, setModalState } ) {
  const {description, title, thumbnail, images} = product;
  
  return (
    <div className="myCard card g-1 col col-4 col-xl-3 m-1">
      <Image
        title={title}
        src={thumbnail}
      />
      <div className="card-body">
        <Description>{description}</Description>
        <Button onClick={e => setModalState({show: !modalState.show, src: images[0] })}>Vedi immagini</Button>
      </div>
    </div>
  );
}

export default Card;
