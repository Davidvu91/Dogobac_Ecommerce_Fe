import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  const content = {
    content1:
      "Qua cuộc thi thiết kế Triple I tôi đánh giá DO GO BAC là một doanh nghiệp đề cao tính sáng tạo, luôn thay đổi và cập nhật các xu hướng trên Thế GIới.",
    content2:
      "Ở DO GO BAC cái gì cũng đẹp, sản phẩm sáng tạo và đa dạng, tôi thật sự thích các sản phẩm ở đây. Dung đã chọn mua bàn ghế ăn, bàn...",
    content3:
      "Là kiến trúc sư, mình đặc biệt ấn tượng với sản phẩm nội thất của DO GO BAC: Độc đáo, đẹp, chất lượng và đặc biệt có nguồn gốc, xuất xứ rõ...",
  };
  const img = {
    img1: "https://www.tutorialrepublic.com/examples/images/clients/2.jpg",
    img2: "https://www.tutorialrepublic.com/examples/images/clients/4.jpg",
    img3: "https://www.tutorialrepublic.com/examples/images/clients/3.jpg",
  };

  const people = [
    { name: "Hoàng Anh Tuấn", occupation: "Kiến Trúc Sư" },
    { name: "Ngọc Trinh", occupation: "Người Mẫu" },
    { name: "Tuấn Hưng", occupation: "Ca Sỹ" },
  ];

  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div className="testimonial-background"></div>
      <div
        className="testimonial-title-container"
        style={{ width: "50%", textAlign: "center" }}
      >
        <h4 className="testimonial-title">LỜI KHÁCH HÀNG</h4>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card1 img={img} content={content} people={people} />
          <Card2 img={img} content={content} people={people} />
          <Card3 img={img} content={content} people={people} />
        </Slider>
      </div>
    </div>
  );
};

const Card1 = ({ img, content, people }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        fontFamily: "Montserrat",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img.img1}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p className="testimonial-content">{content.content1}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span className="testimonial-name">{people[0].name}</span> ,{" "}
        {people[0].occupation}
      </p>
    </div>
  );
};

const Card2 = ({ img, content, people }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        fontFamily: "Montserrat",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img.img2}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p className="testimonial-content">{content.content2}</p>
      <p style={{ fontStyle: "italic", marginTop: 25, color: "white" }}>
        <span className="testimonial-name"> {people[1].name}</span> ,
        {people[1].occupation}
      </p>
    </div>
  );
};

const Card3 = ({ img, content, people }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        fontFamily: "Montserrat",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img.img3}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p className="testimonial-content">{content.content3}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span className="testimonial-name">{people[2].name}</span> ,
        {people[2].occupation}
      </p>
    </div>
  );
};

export default Testimonial;
