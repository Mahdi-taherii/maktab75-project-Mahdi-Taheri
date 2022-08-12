import React from "react";
import styled from "./footer.module.css";
import cart from "../../assets/images/footer/features/delivery-truck.svg";
import hors from "../../assets/images/footer/features/24-hours-support.svg";
import coin from "../../assets/images/footer/features/easy-return.svg";
import seven from "../../assets/images/footer/features/original.svg";
import org from "../../assets/images/footer/features/income.svg"

function Footer() {
    return ( 
        <footer>
            <div className={styled.fotposh}>
                <div className={styled.pshtibane}><img src={cart} alt="cart" width={50}/><div><p className={styled.titlehe}>تحویل اکسپرس</p><p className={styled.maine}>در کمترین زمان دریافت کنید</p></div></div>
                <div className={styled.pshtibane}><img src={hors} alt="hors" width={50}/><div><p className={styled.titlehe}>پشتیبانی 24 ساعتع</p><p className={styled.maine}>پشتیبانی هفت روز هفته</p></div></div>
                <div className={styled.pshtibane}><img src={org} alt="org" width={50}/><div><p className={styled.titlehe}>پرداخت در محل</p><p className={styled.maine}>هنگام دریافت پرداخت کنید</p></div></div>
                <div className={styled.pshtibane}><img src={coin} alt="coin" width={50}/><div><p className={styled.titlehe}>7روز ضمانت بازگشت</p><p className={styled.maine}>هفت روز مهلت دارید</p></div></div>
                <div className={styled.pshtibane}><img src={seven} alt="seven" width={50}/><div><p className={styled.titlehe}>ضمانت ال بودن کالا</p><p className={styled.maine}>تایید اصالت کالا</p></div></div>
            </div>
            <div className={styled.sortfoot}>
                <div className={styled.orderlist}>
                  <h3> با دیجی اسمارت</h3>
                    <ul>
                        <li className={styled.listfoot}><a href="">اتاق خبر دیجی اسمارت </a></li>
                        <li className={styled.listfoot}><a href="">فروش در دیجی اسمارت</a></li>
                        <li className={styled.listfoot}><a href="">همکاری با سازمان ها</a></li>
                        <li className={styled.listfoot}><a href="">فرصت های شغلی</a></li>
                    </ul>
                </div>
                <div className={styled.orderlist}>
                    <h3> خدمات مشتریان</h3>
                    <ul>
                        <li className={styled.listfoot}><a href="">پاسخ به پرسش های متداول</a></li>
                        <li className={styled.listfoot}><a href="">رویه های بازگرداندن کالا</a></li>
                        <li className={styled.listfoot}><a href="">شرایط استفاده</a></li>
                        <li className={styled.listfoot}><a href="">حریم خصوصی</a></li>
                    </ul>
                </div>
                <div className={styled.orderlist}>
                    <h3> راهنمای خرید از دیجی اسمارت</h3>
                    <ul>
                        <li className={styled.listfoot}><a href="">نحوه ثبت سفارش</a></li>
                        <li className={styled.listfoot}><a href="">رویه ارسال سفارش</a></li>
                        <li className={styled.listfoot}><a href="">شیوه های پرداخت</a></li>
                    </ul>
                </div>
                <div>
                    <p>با عضویت در خبرنامه از آخرین اخبار و محصولات سایت مطلع شوید...</p>
                    <div><input type="email" placeholder="آدرس ایمیل خود را وارد کنید" className={styled.inputemail}/><button className={styled.btnemail}>ارسال</button></div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;