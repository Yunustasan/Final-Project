import React from 'react'
import './Home.css'
import img from '../img/meramres6.jpg'
import img2 from '../img/mustafakavus.jpg'
import img3 from '../img/mustafakavus2.jpg'
import img4 from '../img/mustafakavus3.webp'
import img5 from '../img/mustafakavus4.jpg'
import video1 from '../videos/Mega.mp4'
import video4 from '../videos/downvideo1.mp4'
import video2 from '../videos/video3.mp4'
import video3 from '../videos/video4.mp4'




function Home() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }} >


        <div class="row">
          <div className='col-sm-3' ><p>burası alttaki paragrafın gözükmesi için bir yerdir burası alttaki paragrafın gözükmesi için bir yerdir</p>  <img src={img2} alt="" style={{ width: "350px", height: "200px", }} /><img src={img4} alt="" style={{ width: '350px', height: '200px', marginTop: '10px' }} /> </div>
          <div class="col-sm-3"><p>burası alttaki paragrafın gözükmesi için bir yerdir burası alttaki paragrafın gözükmesi için bir yerdir</p>  <img src={img5} alt="" style={{ width: '350px', height: '200px' }} />  <img src={img3} alt="" style={{ width: '350px', height: '210px', marginTop: '10px' }} />  </div>
          <div class="col-sm-6"><p>burası alttaki paragrafın gözükmesi için bir yerdir burası alttaki paragrafın gözükmesi için bir yerdiparagrafın gözükmesi için bir yerdirr</p><p className='bio' > <b> Öğrenim hayatına Ali İhsan Dayıoğlugil İlkokulu'nda başlayan Mustafa KAVUŞ, orta ve lise öğrenimini ise Konya İmam Hatip Lisesi’nde bitirdi. 1995 yılında kazandığı Ankara Üniversitesi Siyasal Bilgiler
            Fakültesi İşletme Bölümü’nü başarıyla tamamlamasının ardından Selçuk Üniversitesi Yönetim Organizasyon Ana Bilim Dalı’nda yüksek lisans eğitimi aldı. Mustafa KAVUŞ, eğitim hayatının yanı sıra küçük yaştan itibaren iş hayatı tecrübesi kazanmaya çalıştı. Tekstil, yayınevi ve gıda sektörlerinde işletmecilik ve yöneticilik yaptı.
            Tüm bu çalışmalarının yanında siyasete de ilgi duyan Mustafa KAVUŞ, AK Parti ile başladığı siyasi yaşamında 2001-2003 yılları arasında AK Parti İl Gençlik Kolları Kurucu Teşkilatlanma Başkanı olarak görev yaptı. Siyasi tecrübesini 2003-2005 yıllarında İl Teşkilatı Yönetim Kurulu Üyesi olarak sürdüren KAVUŞ, 2011 genel seçimlerinde milletvekili aday adayı oldu.
            2004 yılında Konya Büyükşehir Belediyesi Başkanlık danışmanlığına getirilen KAVUŞ, 2006’da Teftiş Kurulu Müfettişliği’ne atandı. 2009 yılında getirildiği Teftiş Kurulu Başkanlığını 2018 yılına kadar sürdürdü. Çevre ve Şehircilik Bakanlığı’nda Bakan Müşaviri olarak görev yapmakta iken aday adaylığı başvurusu için istifa etti.
            31 Mart 2019 yerel seçimlerinde Meram Belediye Başkanı seçilen Mustafa KAVUŞ evli ve iki çocuk babasıdır. </b></p></div>
        </div>
        <div class="row">
          <div class="col-sm"> <p className='head' >Artık hazırız.DOSD Meram’da eğitim yolculuğu başladı.</p> <video width="400px" height="300px" controls="controls" id='videos'>
            <source src={video4} type="video/mp4" />
          </video>
          </div>
          
          <div class="col-sm"><p className='head' >Klasik otomobil sevdalıları ile Meram'da buluşuyoruz.</p><video width="400px" height="300px" controls="controls" id='videos' >
            <source src={video3} type="video/mp4" />
          </video>
          </div>

          <div class="col-sm"><p className='head' >Yoğun çalışma temposuyla 2022yılını geride bırakyoruz.</p> <video width="400px" height="300px" controls="controls" id='videos'>
            <source src={video2} type="video/mp4" />
          </video>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home