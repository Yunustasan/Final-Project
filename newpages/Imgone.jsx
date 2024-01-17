import React from 'react'
import img from '../bagimg/merambag1.jpg'
import img1 from '../bagimg/merambag2.jpg'
import img2 from '../bagimg/merambag3.jpg'
import img3 from '../bagimg/merambag4.jpg'
import img4 from '../bagimg/merambag5.jpg'
import img5 from '../bagimg/merambag6.jpg'
import img6 from '../bagimg/merambag7.jpg'
import img7 from '../bagimg/merambag8.png'


function Imgone() {
    return (
        <>

            <div class="row">
                <div class="col">col-8<p>burası alttaki burası alttaki paragrafın gözükmesi için yerdirgözükmesi için yerdirgözükmesiburası alttaki burası alttaki paragrafın gözükmesi için yerdirgözükmesi için yerdirgözükmesiburası alttaki burası alttaki</p>
                    <h2>Meram Bağları</h2> <p>Meram, Takkeli dağın güney-doğu eteklerindeki vadiye kurulmuştur. Eski Meram Bağları, şehrin 5-6 km. batısından başlayıp, Dere’ye ulaşan yeşil vadiye kadar uzanır. Tarih boyunca suyu, havası ve bağları seyahatnamelere, dîvânlara konu olmuş, ünü bütün dünyaya yayılmıştır. Bugün çevresi ormanlarla kaplı güzel bir mesire yeridir. Ayrıca çay bahçeleri ve lokantalar bulunmaktadır. Meram’da; Selçuklular Döneminde yapılmış olan Meram Hamamı, Meram Köprüsü, Tavus Baba Türbesi, Hasbey Mescidi ve Dârü’l-Huffâzı ziyaret edilebilir.</p>
                    <h3>Yerler;</h3>
                    <ul>
                        <li>Tavusbaba</li>
                        <li>Lokantalar</li>
                        <li>Yeşillik Alanlar</li>
                        <li>Camiiler</li>
                        <li>Kafeler</li>
                    </ul>
                </div>

            </div> <hr />
            <div class="row">
                <div class="col"> <h3 style={{ marginLeft: '15px' }} >Meram Bağları İle İlgili Görseller</h3> <img src={img} alt="" style={{ width: '450px', height: '350px', marginLeft: '15px' }} />
                    <img src={img1} alt="" style={{ width: '450px', height: '350px', marginLeft: '15px' }} />
                    <img src={img2} alt="" style={{ width: '450px', height: '350px', marginLeft: '15px' }} />
                    <img src={img3} alt="" style={{ width: '450px', height: '350px', marginLeft: '15px', marginTop: '10px' }} />
                    <img src={img4} alt="" style={{ width: '450px', height: '350px', marginLeft: '15px', marginTop: '10px' }} />
                    <img src={img5} alt="" style={{ width: '450px', height: '350px', marginLeft: '15px', marginTop: '10px' }} />
                    <img src={img6} alt="" style={{ width: '450px', height: '350px', marginLeft: '15px', marginTop: '10px' }} />
                    <img src={img7} alt="" style={{ width: '450px', height: '350px', marginLeft: '15px', marginTop: '10px' }} />




                </div>


            </div>




        </>
    )
}

export default Imgone