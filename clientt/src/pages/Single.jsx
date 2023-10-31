import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuclsFxyhoFQ8PJx-0mq4GDLrsBHscirxAn6TDnKpp0M9HtI9g"
          alt=""
        />
        <div className="user">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuclsFxyhoFQ8PJx-0mq4GDLrsBHscirxAn6TDnKpp0M9HtI9g"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>posted two days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              {" "}
              <img src={Edit} alt="edit icon" />
            </Link>
            <img src={Delete} alt="delete icon" />
          </div>
        </div>
        <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat
            voluptates necessitatibus itaque a nesciunt?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, iste
            nulla, nobis magni nemo cum aperiam animi provident consequuntur ad
            ullam, similique quaerat neque suscipit sapiente. Aut sapiente ipsum
            sed. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Suscipit dolorem, adipisci eum itaque, quaerat nam molestias tenetur
            labore error maiores quas eligendi! Officia quibusdam hic quasi
            amet. Totam, ducimus iusto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur quis laboriosam pariatur doloremque
            deleniti tempore dolorum cumque, unde vero! Saepe, corporis
            architecto cumque consectetur itaque sapiente id aliquam alias
            commodi.

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quia fugiat porro magni ipsam ut dolor error, eligendi fugit architecto sed veniam. Vitae beatae porro repudiandae nisi doloremque sit, est quae omnis in cumque non minus quos eligendi, ad molestias sunt officia dolorum rem voluptatum a quam numquam delectus temporibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, aliquam dolorum, ab placeat quo consectetur dignissimos ipsum voluptates cum aut, aliquid quam blanditiis odio. Quasi quae provident quis distinctio iste commodi eaque, itaque debitis cupiditate ipsa, delectus excepturi, dicta et tempore id nam omnis. Ipsa fugit consequatur numquam fugiat tempora quis illum. Quasi cumque, sed alias, nisi nesciunt omnis, iure sunt asperiores cupiditate minima deleniti vitae animi error nihil qui. Ex quibusdam laudantium pariatur cumque, eius at non tempora eum, doloribus ratione ab vel ipsum itaque ipsam ut, aliquid molestiae. Distinctio non ducimus saepe impedit tempore eum repellat aut accusamus.
          </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
