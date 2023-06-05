
//import './App.css'
//import Butoon from './assets/component/Butoon'
import  './css.css'

const givenDate = new Date("2023-01-06"); // the date you want to compare
const currentDate = new Date(); // the current date
let OpenorNo;


if (givenDate.getDate() <= currentDate.getDate()) {

    OpenorNo = "The Cousre is Open";

  } else {
    
    OpenorNo = "The Cousre is not Open";
  }


const givenDate2 = new Date("2023-06-11"); // the date you want to compare

let OpenorNo2;


if (givenDate2.getDate() >= currentDate.getDate()) {

    OpenorNo2 = "The Cousre is Open";

  } else {
    
    OpenorNo2 = "The Cousre is not Open";
  }

  const givenDate3 = new Date("2023-05-05"); // the date you want to compare

let OpenorNo3;


if (givenDate3.getDate() >= currentDate.getDate()) {

    OpenorNo3 = "The Cousre is Open";

  } else {
    
    OpenorNo3 = "The Cousre is not Open";
  }




function App() {
  
//اي مكون اضافي لازم يكون فيه داخل مجلد assests>>> rfae
  return (
<div>
<nav>

  <a   href="index.html">منصاتنا</a>
  <a   href="badges.html">الأوسمة</a>
  <a   href="https://leaderboard.satr.codes/?name=Java&type=GLOBAL">المتصدرون</a>
  <a   href="https://profile.satr.codes/">الملف الشخصي</a>
  <img src ="تنزيل.png" alt="Twuiqlogo" width="60" height="60"/>

</nav>

<div class="Style1">
<h2> أحدث المعسكرات والبرامج </h2>
<br/><br/></div>


<div className='Pra'>

    <div className="box">

    <div className='border'>
    <div className="card">
    <div  className="image">
    <img className="card-img-top" src="../public/html.png" alt="Card image HTML"/></div>
    <div className="card-body">
    <p className="card-text"> HTML Course for one week from 28/05/2023 to 01/06/2023  </p>
    <b>{OpenorNo}</b>

    </div>
    </div>
     </div>


  <div className='border'>
  <div className="card">
<div  className="image">
  <img className="card-img-top" src="../public/css.png" alt="Card image CSS"/>  </div>
  <div className="card-body">
  <p className="card-text">CSS Course for one week from 11/06/2023 to 15/06/2023 </p>
  <b>{OpenorNo2}</b>
  </div>
  </div>
  
  </div>

  <div className='border'>
  <div className="card">
  <div  className="image">
  <img className="card-img-top" src="../public/clipart1504620.png" alt="Card image JS"/>  </div>
  <div className="card-body">
  <p className="card-text">CSS Course for one week from 11/06/2023 to 15/06/2023 </p>
  <b>{OpenorNo3}</b>
  </div>
  </div>
  
  </div>

  </div>

   
 </div>


<footer>
  <div className="Footer">
       <a  href="https://sites.satr.codes/privacy-policy">سياسة الخصوصية</a>
  /    <a  href="https://sites.satr.codes/terms-and-condition">الشروط والأحكام</a>
  /    <a  href="https://sites.satr.codes/faq">الأسئلة الشائعة</a>
  /   <a href="https://sites.satr.codes/contact-us">تواصل معنا</a></div>
  <br/><div className="P"><p className="mb-6">جميع الحقوق محفوظة للإتحاد السعودي للأمن السيبراني و البرمجة والدرونز 2023 ©</p></div>
    </footer>
  
    </div>
  )
}

export default App

