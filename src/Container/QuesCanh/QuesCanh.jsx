import React, { useState } from 'react'
import './QuesCanh.css';
import qrimg from '../../assets/qr1.jpg'
const QuesCanh = () => {
  const [toggleTrue, settoggleTrue] = useState(false);
  const [toggleFalse, settoggleFalse] = useState(false);
  const [toggleQuestion, settoggleQuestion] = useState(true);


  return (
    <div id='trang' className='app-all slide-in'>
      <div className='app-box'>
        
        {toggleQuestion &&
          <div className='app-lixi-ques-heading'>
          <h1>
            Answer the question below to receive lucky money
          </h1>
        </div>
        }
        {true &&
        <div className='app-lixi-ques-main'>
        <h3>
          Hãy kể tên các vị anh hùng ở tỉnh Cà Mau?
        </h3>
        <button onClick={() => settoggleFalse(true) & settoggleTrue(false) & settoggleQuestion(false)} className='but_false'>Tạ An Khương, Phan Đình Giót, Nguyễn Thị Minh Khai</button>
        <button onClick={() => settoggleTrue(true) & settoggleFalse(false) & settoggleQuestion(false)} className='but_true'>Phan Ngọc Hiển, Tạ An Khương, Dương Thị Cẩm Vân</button>
        <button onClick={() => settoggleFalse(true) & settoggleTrue(false) & settoggleQuestion(false) } className='but_false'>Bế Văn Đàn, Phan Ngọc Hiển, Nguyễn Trường Toản</button>
        <button onClick={() => settoggleFalse(true) & settoggleTrue(false) & settoggleQuestion(false)} className='but_false'>Phan Ngọc Tính, Dương Thị Cẩm Vân, Thái Thanh Hòa, Tạ An Khương Đông</button>
      </div>
        }
        
        {toggleFalse &&
          <div className='app-img-false fade-in'>
              <h3>
              Good Luck Next Year 😭
                </h3>
          </div>
        }
        {toggleTrue &&
          <div className='app-img-true fade-in'>
              <div className='app-img-true-heading'>
                  <h3> 👏 Click on the Momo link to receive lucky money</h3>
              </div>
              <a href='https://lixi.momo.vn/lixi/1KJ9aDK8zRopJ4r'>https://lixi.momo.vn/lixi/1KJ9aDK8zRopJ4r</a>
          </div>
        }
        
      </div>
    </div>
  )
}

export default QuesCanh