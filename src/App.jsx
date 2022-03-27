import { Component, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from './Component/Nav'
import Card from './Component/Card'


const katalog=[
  {
    image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//111/MTA-8895891/eiger_eiger_streamline_carrier_45l_-_tas_gunung_-_tas_travel_full01_qexxwrnq.jpg",
    title:"Eiger Streamline Carrier 45L",
    text:"DETAIL : Kapasitas 45L, Material : Polyester 600D , Dimensi-30x22x67 cm "},
  {
    image: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/1/13/787f8799-5a9b-47e0-9081-d0bfde0fe708.jpg.webp?ect=4g" ,
    title:"Tas Gunung Eiger Lucid X Carrier 45 L",
    text:"Lucid 35 X adalah carrier berkapasitas 45 liter yang dirancang untuk kegiatan hiking singkat, yakni 1-2 harI"},
  {
    image: "https://images.tokopedia.net/img/cache/200-square/product-1/2020/9/6/9053181/9053181_6b2064e5-bef5-4e0e-a952-b331b65c9d69.jpg.webp?ect=4g" ,
    title:"EIGER LUCID 35 X RUCKSACK", 
    text:"Lucid 35 X adalah carrier berkapasitas 35 liter yang dirancang untuk kegiatan hiking singkat, yakni 1-2 hari. Kompartemen utama tas ini dapat diakses dengan mudah melalui bukaan atas "},
  {
    image:"https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/11/17/eb4d0161-b4e0-4d70-aa1e-0bcae06bd848.jpg.webp?ect=4g" , 
    title:"Tas Carrier Eiger APPALACHIA 45 2F BACKPACK 910005427", 
    text:"Kompartemen utama ,Kompartemen untuk menyimpan kantung air. maksimal berkapasitas 2 liter "
  },
  {
    image:"https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/11/18/031ba4e8-16f4-49a1-98f7-1da8d8239756.jpg.webp?ect=4g     " , 
    title:"Tas Carrier 45L Eiger EQUATOR 45 CARRIER BACKPACK 910003906", 
    text:"Equator 45 adalah tas carrier berkapasitas 45 liter yang dirancang untuk kegiatan trekking dan hiking selama 1-2 hari "
  },
  {
    image:"https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/11/26/ce571562-94db-4320-90bc-a8ac60bab1ce.jpg.webp?ect=4g     " , 
    title:"Tas Carrier 35L Eiger LUCID 35 X BACKPACK 910004577", 
    text:"Di dalam saku tutup atas, terdapat saku di bagian dalam untuk menyimpan barangbarang yang lebih kecil. "
  },
  {
    image:"https://images.tokopedia.net/img/cache/100-square/product-1/2019/12/12/198778621/198778621_1b48dcc2-bdfb-4d3e-b9f4-4efd4501e109_700_700.jpg.webp?ect=4g" , 
    title:"Carrier Eiger Wanderlust 60L S-M, 47,5 cm Torso 910003568001", 
    text:"High Quality Products!! Waterproof, durable, and stylish.. "
  },
  {
    image:"https://eigeradventure.com/media/catalog/product/cache/4f33418a30da1d50c37d8b95a2cfab0e/9/1/910003843003_1_3.jpg" , 
    title:"EIGER STREAMLINE 35 (WS) CARRIER", 
    text:"Streamline 35 WS adalah tas carrier berkapasitas 35 liter yang dirancang khusus bagi wanita untuk kegiatan hiking singkat, yakni 1-2 hari.. "
  },
  {
    image:"https://images.tokopedia.net/img/cache/900/product-1/2019/12/12/487072/487072_a03091cb-429f-4806-b4f9-905af4323c07_700_700.jpg" , 
    title:"EIGER KEBA 50L BORNEO - BLACK GREY", 
    text:"KEBA EIGER hadir untuk kegiatan penjelajahan hutan hujan tropis dan telah disesuaikan dengan kebutuhan para pegiat petualang di Indonesia. "
  },
  
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <container>
      <Nav />
      <div className="row">
        {katalog.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card 
            image={agt.image} 
            title={agt.title}
            text={agt.text} />
          </div>
        ))}
      </div>
    </container>
  );
}

export default App
