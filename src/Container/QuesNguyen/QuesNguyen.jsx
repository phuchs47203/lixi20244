import React, { useState } from 'react'
import './QuesNguyen.css';
import qrimg from '../../assets/qr1.jpg'
const QuesNguyen = () => {
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
              <a href='https://lixi.momo.vn/lixi/lGWjKakOO6qXMYA'>https://lixi.momo.vn/lixi/lGWjKakOO6qXMYA</a>
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
          Tết năm 2023 có tên là con gì
        </h3>
        <button onClick={() => settoggleFalse(true) & settoggleTrue(false) & settoggleQuestion(false)} className='but_false'>Xuân Mão</button>
        <button onClick={() => settoggleFalse(true) & settoggleTrue(false) & settoggleQuestion(false) } className='but_false'>Ất Mão</button>
        <button onClick={() => settoggleTrue(true) & settoggleFalse(false) & settoggleQuestion(false)} className='but_true'>Quý Mão</button>
        <button onClick={() => settoggleFalse(true) & settoggleTrue(false) & settoggleQuestion(false)} className='but_false'>Bính Mão</button>
      </div>
        }
        
       
        
      </div>
    </div>
  )
}

export default QuesNguyen