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
    img1: "data:image/jpeg;base64,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",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQHud1faQ1DQ2mT6H82oGc4svic3f9kD-Fg&usqp=CAU",
    img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_S-cawbadSuqwpJuHHpSI4ThP3A0ckWBscg&usqp=CAU",
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
      <p style={{ fontStyle: "italic", marginTop: 25, color: "white" }}>
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
      <p style={{ fontStyle: "italic", marginTop: 25, color: "white" }}>
        <span className="testimonial-name">{people[2].name}</span> ,
        {people[2].occupation}
      </p>
    </div>
  );
};

export default Testimonial;
