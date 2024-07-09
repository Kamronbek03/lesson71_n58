import { Link } from "react-router-dom";
const right = "../../public/assets/images/main/right.svg";
const sofa1 = "../../public/assets/images/main/sofa1.png";
const sofa2 = "../../public/assets/images/main/sofa2.png";

import "./Single.css";

const Single = () => {
  return (
    <div className="Single">
      <section className="Single_top">
        <div className="container">
          <div className="head_content">
            <Link>Home</Link>
            <img src={right} alt="right" />
            <Link>Shop</Link>
            <img src={right} alt="right" />
            <div className="column"></div>
            <Link>Asgaard sofa</Link>
          </div>
        </div>
      </section>
      <section className="contents">
        <div className="container">
          <div className="text_content">
            <h1>Description</h1>
            <span>Additional Information</span>
            <span>Reviews [5]</span>
          </div>
          <div className="texts">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="texts_img">
            <img style={{ marginRight: "10px" }} src={sofa1} alt="sofa" />
            <img src={sofa2} alt="sofa" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Single;
