import React from "react";
import "./footer.css";
import cart from "../../assets/images/footer/features/delivery-truck.svg";
import hors from "../../assets/images/footer/features/24-hours-support.svg";
import coin from "../../assets/images/footer/features/easy-return.svg";
import seven from "../../assets/images/footer/features/original.svg";
import org from "../../assets/images/footer/features/income.svg"

function Footer() {
    return ( 
        <footer>
            <div className="fot-posh">
                <div className="pshtibane"><img src={cart} alt="cart" width={50}/><div><p className="title-he">تحویل اکسپرس</p><p className="maine">در کمترین زمان دریافت کنید</p></div></div>
                <div className="pshtibane"><img src={hors} alt="hors" width={50}/><div><p className="title-he">پشتیبانی 24 ساعتع</p><p className="maine">پشتیبانی هفت روز هفته</p></div></div>
                <div className="pshtibane"><img src={org} alt="org" width={50}/><div><p className="title-he">پرداخت در محل</p><p className="maine">هنگام دریافت پرداخت کنید</p></div></div>
                <div className="pshtibane"><img src={coin} alt="coin" width={50}/><div><p className="title-he">7روز ضمانت بازگشت</p><p className="maine">هفت روز مهلت دارید</p></div></div>
                <div className="pshtibane"><img src={seven} alt="seven" width={50}/><div><p className="title-he">ضمانت ال بودن کالا</p><p className="maine">تایید اصالت کالا</p></div></div>
            </div>
            <div className="sort-foot">
                <div className="order-list">
                  <h3> با دیجی اسمارت</h3>
                    <ul>
                        <li className="list-foot"><a href="">اتاق خبر دیجی اسمارت </a></li>
                        <li className="list-foot"><a href="">فروش در دیجی اسمارت</a></li>
                        <li className="list-foot"><a href="">همکاری با سازمان ها</a></li>
                        <li className="list-foot"><a href="">فرصت های شغلی</a></li>
                    </ul>
                </div>
                <div className="order-list">
                    <h3> خدمات مشتریان</h3>
                    <ul>
                        <li className="list-foot"><a href="">پاسخ به پرسش های متداول</a></li>
                        <li className="list-foot"><a href="">رویه های بازگرداندن کالا</a></li>
                        <li className="list-foot"><a href="">شرایط استفاده</a></li>
                        <li className="list-foot"><a href="">حریم خصوصی</a></li>
                    </ul>
                </div>
                <div className="order-list">
                    <h3> راهنمای خرید از دیجی اسمارت</h3>
                    <ul>
                        <li className="list-foot"><a href="">نحوه ثبت سفارش</a></li>
                        <li className="list-foot"><a href="">رویه ارسال سفارش</a></li>
                        <li className="list-foot"><a href="">شیوه های پرداخت</a></li>
                    </ul>
                </div>
                <div>
                    <p>با عضویت در خبرنامه از آخرین اخبار و محصولات سایت مطلع شوید...</p>
                    <div><input type="email" placeholder="آدرس ایمیل خود را وارد کنید" className="input-email"/><button className="btn-email">ارسال</button></div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;