/* eslint-disable react/prop-types */
import { Player } from "@lottiefiles/react-lottie-player";
import { InfoText, SingleService } from "./Services.style";

const SingleServ = ({ src, title, info }) => {
  return (
    <SingleService>
      <Player
        autoplay
        loop
        src={src}
        style={{ height: "150px", width: "150px" }}
      ></Player>
      <InfoText>
        <h3>{title}</h3>
        <p>{info}</p>
      </InfoText>
    </SingleService>
  );
};
export default SingleServ;
