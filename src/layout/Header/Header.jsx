import React, { useState } from "react";
import styled from "./header.module.css";
import Logo from "../../assets/images/logo.png";
import Man from "../../assets/images/man.png";
import Search from "../../assets/images/search.png";
import shop from "../../assets/images/shopping-cart.png";
import { Link } from "react-router-dom";
import { style } from "@mui/system";

function Header() {
    const [Flag , setFlag] = useState(false);
    const [List , setList] = useState(false);

const flagHaber = () =>{
  setFlag(true);
}
const falgeClose = ()=>{
    setFlag(false)
}
const handlepro = () =>{
    setList(!List)
}

  return (
    <>
    <header>
      <div className={styled.header}>
        <div className={styled.logo}>
          <img src={Logo} alt="logo" />
        </div>

        <div className={styled.searchbox}>
          <input
            className={styled.inputsearch}
            type="text"
            placeholder="نام کالا برند و یا دسته مورد نظر خود را جستوجو کنید..."
          />
          <div className={styled.iconsearch}>
            <a href="#">
              <img src={Search} alt="search" width={35} />
            </a>
          </div>
        </div>
        <div className={styled.adminbox}>
          <div className={styled.admin}>
            <Link to="/LoginAdmin">مدریت</Link>
          </div>
          <div className={styled.user}>
            <a href="#">حساب کاربری</a>
            <img src={Man} alt="man" />
          </div>
        </div>
      </div>
      <div className={styled.headerres}>
        <div className={styled.top}>
          <div className={styled.logo}>
            <img src={Logo} alt="logo" />
          </div>
          <div></div>
          <div className={styled.adminbox}>
            <div className={styled.admin}>
            <Link to="/LoginAdmin">مدریت</Link>
            </div>
            <div className={styled.user}>
              <a href="#">حساب کاربری</a>
              <img src={Man} alt="man" />
            </div>
          </div>
        </div>
        <div className={styled.boxbut}>
        <div className={styled.searchbox}>
          <input
            className={styled.inputsearch}
            type="text"
            placeholder="نام کالا برند و یا دسته مورد نظر خود را جستوجو کنید..."
          />
          <div className={styled.iconsearch}>
            <a href="#">
              <img src={Search} alt="search" width={35} />
            </a>
          </div>
        </div>
        </div>
      </div>
      <nav className={styled.navbar}>
        <div className={styled.hambermenu}>
          <i className="fa fa-navicon" style={{fontSize: "30px" , marginRight:"15px"}} onClick={flagHaber}></i>
        </div>
        <div className={styled.navlink}>
          <ul className={styled.ul}>
            <li className={styled.product}>
              <a href="#">کالای دیجیتال</a>
            </li>
            <li className={styled.product}>
              <a href="#">آرایشی و بهداشتی</a>
            </li>
            <li className={styled.product}>
              <a href="#">ابزار و اداری</a>
            </li>
            <li className={styled.product}>
              <a href="#">مد و پوشاک</a>
            </li>
            <li className={styled.product}>
              <a href="#">خانه و آشپزخانه</a>
            </li>
            <li className={styled.product}>
              <a href="#">لوازم تحریر و هنر</a>
            </li>
            <li className={styled.product}>
              <a href="#">کودک و نوزارد</a>
            </li>
          </ul>
        </div>
        <div></div>
        <div className={styled.cart}>
          <div className={styled.iconcart}>
            <img src={shop} alt="shop" width={30} />
          </div>
          <div className={styled.section}>
            <p className={styled.titlecart}>سبد خرید</p>
            <p className={styled.sectioncart}> تومان0</p>
          </div>
          <div className={styled.number}>1</div>
        </div>
      </nav>
    </header>
    <div>
        { Flag === true && <div className={styled.divhamber}>
            <div><img className={styled.logoham} src={Logo} alt="logo" /> <div className={styled.backdiv} onClick={falgeClose}><i className="fas fa-chevron-right"></i></div></div>
            <div className={styled.listkal}>
            <div className={styled.prod}>کالای دیجیتال <div className={styled.selected} onClick={handlepro}>{!List ? <i className="fas fa-chevron-down"></i>: <i className="fas fa-chevron-up"></i>} </div></div>
            {List === true && <div>
                <ul className={styled.ulmob}>
                    <li><a href="">گوشی موبایل</a></li>
                    <li><a href="">لپ تاپ</a></li>
                    <li><a href="">دوربین</a></li>
                </ul>
            </div> }
            <div className={styled.prod}>آرایشی و بهداشتی</div>
            <div className={styled.prod}>ابزار و اداری</div>
            <div className={styled.prod}>مد و پوشاک</div>
            <div className={styled.prod}>خانه و آشپزخانه</div>
            <div className={styled.prod}>لوازم تحریر وهنر</div>
            <div className={styled.prod}>کودک و نوزاد</div>
            </div>   
        </div> }
    </div>
    </>
  );
}

export default Header;
