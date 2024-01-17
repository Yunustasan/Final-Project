import React from 'react'
import img from '../kayimg/kızlarkay1.jpg'
import img1 from '../kayimg/kızlarkay2.jpg'
import img2 from '../kayimg/kızlarkay3.jpg'
import img3 from '../kayimg/kızlarkay4.jpg'
import img4 from '../kayimg/kızlarkay5.webp'


function Imgtwo() {
  return (<>
    <div class="row">
      <div class="col">col-8<p>burası alttaki burası alttaki paragrafın gözükmesi için yerdirgözükmesi için yerdirgözükmesiburası alttaki burası alttaki paragrafın gözükmesi için yerdirgözükmesi için yerdirgözükmesiburası alttaki burası alttaki</p>
        <h2>Meram Kızlar Kayası</h2> <p>Meram Dere Mahallesi'nde piknik ve mesire alanlarının üst kısmında bulunan kayalıklar Kızlar Kayası olarak biliniyor. Bu kayalıklarla ilgili çok sayıda hikaye bulunuyor. İşte Burak Taşpınar'ın objektifinden Kızlar Kayası... Prof. Dr. Saim Sakaoğlu, “Kızlar kayası hem bir çesit taşlı oluşumların adıdır. Hem de o taşların bulunduğu bölgenin adıdır. Çocukluk yıllarımda bize Hıdırellez'i burada karşıladıklarını anlatır. Kızlar Kayası'nı çocuk hayal gücüme sığdıramazdım. Nasıl bir şey veya nasıl bir yer olduğunu düşünür dururdum. O yıllar Anamaz Dağları'nın hazin hikayesini dinler çocukça heyecanlara kapılırdır.</p>
        <h3>Konyanın Peri Bacaları</h3>

      </div>

    </div> <hr />
    <div class="row">
      <div class="col"> <h3 style={{ marginLeft: '15px' }} >Kızlar Kayası İle İlgili Görseller</h3> <img src={img} alt="" style={{ width: '470px', height: '350px', marginLeft: '15px' }} />
        <img src={img1} alt="" style={{ width: '480px', height: '350px', marginLeft: '15px' }} />
        <img src={img2} alt="" style={{ width: '480px', height: '350px', marginLeft: '15px' }} />
        <img src={img3} alt="" style={{ width: '470px', height: '350px', marginLeft: '15px', marginTop: '10px' }} />
        <img src={img4} alt="" style={{ width: '480px', height: '350px', marginLeft: '15px', marginTop: '10px' }} />





      </div>


    </div>

  </>
  )
}

export default Imgtwo