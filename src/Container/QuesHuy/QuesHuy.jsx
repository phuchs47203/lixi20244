import React, { useState } from 'react'
import './QuesHuy.css';
import qrimg from '../../assets/qr1.jpg'
const QuesHuy = () => {
  const [toggleTrue, settoggleTrue] = useState(false);
  const [toggleFalse, settoggleFalse] = useState(false);
  const [toggleQuestion, settoggleQuestion] = useState(true);


  return (
    <div id='trang' className='app-all slide-in'>
      <div className='app-box'>
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
                  <h3>👏Click on the Momo link to receive lucky money</h3>
              </div>
              <p>
              <a href='https://lixi.momo.vn/lixi/1KJ9aDK8zRopJ4r'>https://lixi.momo.vn/lixi/1KJ9aDK8zRopJ4r</a>
              </p>
          </div>
        }
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
           Năm 2024 là con gì?
        </h3>
        <button onClick={() => settoggleFalse(true) & settoggleTrue(false) & settoggleQuestion(false)} className='but_false'>Nhâm Thìn</button>
        <button onClick={() => settoggleTrue(true) & settoggleFalse(false) & settoggleQuestion(false)} className='but_true'>Giáp Thìn</button>
        <button onClick={() => settoggleFalse(true) & settoggleTrue(false) & settoggleQuestion(false) } className='but_false'>Bính Thìn</button>
        <button onClick={() => settoggleFalse(true) & settoggleTrue(false) & settoggleQuestion(false)} className='but_false'>Quý Thìn</button>
      </div>
        }
            
      </div>
    </div>
  )
}

export default QuesHuy