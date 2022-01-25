import './App.css';
import { useEffect, useState } from 'react'; 
import Axios from 'axios'; 
import Coins from './component/Coin';


function App() {

  const [listOfCoins, setListOfCoins] = useState([]); 
  const [searchValue, setSearchValue] = useState(""); 

  useEffect(() => { 
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((res) => { 
      setListOfCoins(res.data.coins); 
    })
  }, [])

  return (
    <div className="App">
      <div className='cryptoHeader'>
        <input type="text" placeholder='Bitcoin...' value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}></input>
      </div>
      <div className='cryptoDisplay'>
          {listOfCoins.filter((coin) => {return coin.name.toLowerCase().includes(searchValue.toLowerCase())}).map((coin) => { 
            return <Coins key={coin.id} icon={coin.icon} name={coin.name} price={coin.price} symbol={coin.symbol}></Coins>
          })} 
      </div>
    </div>
  );
}

export default App;
