import Header from "../Components/Header"
import Footer from "../Components/Footer"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewComponent from "../Components/ReviewComponent";

const reviews = [
  {
    user: { name: "John Doe", profilePic: "https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-173533.jpg?t=st=1743420677~exp=1743424277~hmac=ce806c35ab3ec2fbd974f030b0454f9ba87596f5c024a26525e98a3f1eba6fe7&w=740", status: "Food Enthusiast" },
    rating: 5,
    reviewText: "Absolutely loved the recipe! The flavors were amazing.",
    date: "March 28, 2025",
  },
  {
    user: { name: "Sarah Lee", profilePic: "https://img.freepik.com/free-vector/redhaired-woman-green-outfit_1308-174668.jpg?t=st=1743421609~exp=1743425209~hmac=d3647b2e930b5d0c3dae1f8a450489d0a25cdb48eb780b97074b5af981eb36e8&w=740", status: "Home Chef" },
    rating: 4,
    reviewText: "Great recipe, but I added extra spices for more flavor!",
    date: "March 25, 2025",
  },
  {
    user: { name: "Emily Johnson", profilePic: "https://img.freepik.com/free-vector/redhaired-woman-green-outfit_1308-174668.jpg?t=st=1743421609~exp=1743425209~hmac=d3647b2e930b5d0c3dae1f8a450489d0a25cdb48eb780b97074b5af981eb36e8&w=740", status: "Food Blogger" },
    rating: 5,
    reviewText: "This is now my go-to recipe! Simple and delicious.",
    date: "March 18, 2025",
  },
  {
    user: { name: "Mark Smith", profilePic: "https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-173533.jpg?t=st=1743420677~exp=1743424277~hmac=ce806c35ab3ec2fbd974f030b0454f9ba87596f5c024a26525e98a3f1eba6fe7&w=740", status: "Professional Chef" },
    rating: 3,
    reviewText: "It was okay, but I prefer a bit more seasoning.",
    date: "March 20, 2025",
  },
  {
    user: { name: "David Brown", profilePic: "https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-173533.jpg?t=st=1743420677~exp=1743424277~hmac=ce806c35ab3ec2fbd974f030b0454f9ba87596f5c024a26525e98a3f1eba6fe7&w=740", status: "Culinary Student" },
    rating: 4,
    reviewText: "Loved it! Would recommend a slight tweak to the seasoning.",
    date: "March 15, 2025",
  },
  {
    user: { name: "Sophia Wilson", profilePic: "https://img.freepik.com/free-vector/redhaired-woman-green-outfit_1308-174668.jpg?t=st=1743421609~exp=1743425209~hmac=d3647b2e930b5d0c3dae1f8a450489d0a25cdb48eb780b97074b5af981eb36e8&w=740", status: "Mom & Home Cook" },
    rating: 5,
    reviewText: "Even my kids loved it! That’s saying something.",
    date: "March 10, 2025",
  },
  {
    user: { name: "Michael Carter", profilePic: "https://img.freepik.com/free-vector/young-man-orange-hoodie_1308-173533.jpg?t=st=1743420677~exp=1743424277~hmac=ce806c35ab3ec2fbd974f030b0454f9ba87596f5c024a26525e98a3f1eba6fe7&w=740", status: "Restaurant Owner" },
    rating: 2,
    reviewText: "Not bad, but I've had better. Needs more depth of flavor.",
    date: "March 5, 2025",
  },
  {
    user: { name: "Olivia Martinez", profilePic: "https://img.freepik.com/free-vector/redhaired-woman-green-outfit_1308-174668.jpg?t=st=1743421609~exp=1743425209~hmac=d3647b2e930b5d0c3dae1f8a450489d0a25cdb48eb780b97074b5af981eb36e8&w=740", status: "Pastry Chef" },
    rating: 4,
    reviewText: "Delicious! Worked perfectly as a side dish.",
    date: "March 1, 2025",
  },
];

const Review = () => {

  // formhandler function : handel the form submit
  function formhandler(e) {

    e.preventDefault();

    // console.log("Form SUbmitted!")

    const formele = e.currentTarget;
    const formData = new FormData(formele)
    const name = formData.get("name")
    const profession = formData.get("profession")
    const rate = formData.get("rate")
    const review = formData.get("review")
    console.log(name);
    console.log(profession);
    console.log(rate);
    console.log(review);

    formele.reset();
  }

  // Slider function

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header />
      <section>
        {/* <h2 className="review-h2">Our Review Section</h2> */}
        <div className="review-container" >
          <h2>What People Think <span className="color-text">About Us</span></h2>
          <div className="review-list">
            <Slider autoplay {...settings}>
              {reviews.map((review, index) => (
                <ReviewComponent key={index} {...review} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="getReview">
          <div className="getReview-text">
            <h2 className="review-h2">Share Your <span className="color-text">Thoughts</span></h2>
            <p>We’d love to hear what you think about this recipe! Whether you made a few tweaks or followed it step-by-step, your feedback helps others in the community. Tell us what you liked, what could be improved, or share your own tips and variations. Drop your review below and be part of the recipe journey!</p>
          </div>
          <div className="getReview-form">
            <form className="reviewForm" id="review-form" onSubmit={formhandler}>
              <label htmlFor="fname">Name</label>
              <input type="text" className="form-field f-m" placeholder="Enter the name" name="name" id="fname" required autoComplete="given-name"/>
              <label htmlFor="fprofession">Profession </label>
              <select className="form-field form-select f-m" id="fprofession" name="profession" required>
                <option value="">-- Select Option --</option>
                <option value="Food Enthusiast">Food Enthusiast</option>
                <option value="Home Chef">Home Chef</option>
                <option value="Food Blogger">Food Blogger</option>
                <option value="Professional Chef">Professional Chef</option>
                <option value="Culinary Student">Culinary Student</option>
                <option value="Mom & Home Cook">Mom & Home Cook</option>
                <option value="Restaurant Owner">Restaurant Owner</option>
                <option value="Pastry Chef">Pastry Chef</option>
              </select>
              <label htmlFor="frate">Rate us </label>
              <select className="form-field form-select f-m" id="frate" name="rate" required>
                <option value="">-- Select Option --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <label htmlFor="freview">Give us a review  </label>
              <textarea className="review-textarea f-m" name="review" id="freview" rows={8} placeholder="Write your experience with this dish..."></textarea>
              <button className="f-m">Submit</button>
            </form>
          </div>
        </div>
      </section >
      <Footer />
    </>
  );
};

export default Review;

