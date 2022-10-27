import React from "react";
import "./addreview.css";
import Rating from "react-rating";
import { IoStarOutline } from "react-icons/io5";
import { GrStar } from "react-icons/gr";
import { AiOutlineCloudUpload } from "react-icons/ai";

import Img_01 from "../../../assests/images/addreviewsamples/img_01.png";
import Img_02 from "../../../assests/images/addreviewsamples/img_02.png";
import Img_03 from "../../../assests/images/addreviewsamples/img_03.png";
import {BiArrowBack} from "react-icons/bi";
import {useNavigate} from "react-router-dom";
const AddReviewPage = () => {
  const navigate = useNavigate();
  return (
    <div className="add-review-main-container">

      <div className="add-review-row ">
        <article>
          <BiArrowBack className="back-arrow" size={30} style={{marginRight:"80%", marginBottom:"20%"}} onClick={() => navigate("/orders")}/>

          <img src={Img_01} className="add-review-main-img" />
          <h3 className="add-review-item-title">Handmade Earrings </h3>

          <div className="add-review-price-row">
            <span>LKR 750.00</span>
            <span>LKR 1250.00</span>
          </div>

          <div className="add-review-rating">
            <h3>Rate this product</h3>
            <Rating
              readonly
              stop={5}
              initialRating={2}
              emptySymbol={<IoStarOutline size={27} />}
              fullSymbol={
                <GrStar
                  style={{ strokeWidth: "1.5", stroke: "black" }}
                  color="#FBBC05"
                  size={25}
                />
              }
            />
          </div>
        </article>
        <article>
          <textarea
            placeholder="Your Review  Here....."
            rows={8}
            className="add-review-area"
          />
          <div className="add-review-add-image-txt">Add Images</div>

          <div className="add-review-photo-container">
            <button>
              <AiOutlineCloudUpload  size={"50%"} color="#A7A7A7"/>
            </button>
            <img src={Img_01} />
            <img src={Img_02} />
            <img src={Img_03} />
          </div>

          <div className="add-review-btn-container">
            <button className="add-review-yellow-btn">Upload</button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AddReviewPage;
