import logo from './logo.svg';
import './App.css';
import olly_sleep from './assets/olly_sleep.PNG';
import heart from './assets/heart.png';
import share from './assets/share.png';

function App() {

  var arr = [0, 1, 2, 3];

  return (
    <div className='container'>
      {arr.map((item, index) => (
        <div className='card-item'>
          <div style={{ margin: '0 auto',marginTop: '20px',marginBottom:'20px', width: '300px', boxShadow: '-3px 3px 8px rgba(0, 0, 0, 0.2)', border: 'none', borderRadius: '20px' }}>
            <div style={{ borderRadius: '20px 20px 0 0',boxShadow: '0px 15px 10px -15px rgba(0, 0, 0, 0.2)', paddingTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <img src={olly_sleep} alt="product_img" width='200' />
            </div>
            <div style={{ padding: '5px 20px 20px 20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{ fontWeight: 'normal', margin: '0' }}>OLLY</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={heart} alt="heart_icon" width='30' style={{ marginRight: '20px', filter: 'invert(69%) sepia(5%) saturate(209%) hue-rotate(314deg) brightness(79%) contrast(79%)' }} />
                  <img src={share} alt="share_icon" width='30' style={{ filter: 'invert(69%) sepia(5%) saturate(209%) hue-rotate(314deg) brightness(79%) contrast(79%)' }} />
                </div>
              </div>
              <div style={{ color: 'grey' }}>
                <p style={{ margin: '0' }}>50 Gummies</p>
                <p style={{ margin: '0' }}>For a healthy sleep cycle</p>
              </div>
              <button style={{ all: 'unset', boxShadow: '0 0 7px 0px rgba(0, 0, 0, 0.2)', marginTop: '10px', borderRadius: '5px', width: '100%', textAlign: 'center', padding: '5px 0' }}>Single <b>$13.99</b></button>
              <br />
              <button style={{ all: 'unset', color: '#fff', fontSize: '20px', backgroundColor: '#b08ff5', width: '100%', borderRadius: '5px', marginTop: '10px', textAlign: 'center', padding: '5px 0' }}>Group <b>$11.00</b></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
