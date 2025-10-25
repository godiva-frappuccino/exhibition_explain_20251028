import React from 'react';  
import './App.css';  
  
function App() {  
  const artistUrl = "https://styumenowebsitecontents.blob.core.windows.net/media/exhibition/classroom/20251028/artist.jpg";  
  const portraitUrl = "https://styumenowebsitecontents.blob.core.windows.net/media/exhibition/classroom/20251028/portrait.jpg";  
  const insideUrl = "https://styumenowebsitecontents.blob.core.windows.net/media/exhibition/classroom/20251028/inside.jpg";  
  const machineUrl = "https://styumenowebsitecontents.blob.core.windows.net/media/exhibition/classroom/20251028/machine.jpg";  
  const videoUrl = "https://styumenowebsitecontents.blob.core.windows.net/media/exhibition/classroom/20251028/ticktockman.mp4";  
  
  return (  
    <div className="App">  
      <header className="App-header">  
        <h1>  
          アトリエ果樹園・いおぎい国天使商会合同教室展<br />  
          「神話　-mythology-」  
        </h1>  
        <h2>夢野ハダリ作品紹介用ページ</h2>  
      </header>  
  
      <section className="App-description">  
        <h3>作品紹介</h3>  
  
        <div className="image-container">  
          <div className="image-wrapper">  
            <img src={machineUrl} alt="Example" className="image" />  
            <div className="image-title">『偽の天啓』 2025年作 石塑粘土、樹脂、金属部品</div>  
          </div>  
        </div>  
  
        <div className="App-text">  
          <h4>作品解説</h4>  
  
          <div className="App-paragraph">  
            <p>  
              この作品はスコット・アニオロフスキーの短編小説『I Dream Of Wires』に登場する、  
              クトゥルフ神話の神格ニャルラトホテプの化身であるチクタクマンをモチーフに作成されています。  
              機械の身体を持つチクタクマンは夢を通して人間に啓示を与え、自らが依り代とするのにふさわしい機械を人間に作らせます。  
              私が夢に見た姿をスケッチしたのが、以下のイラストです。  
            </p>  
  
            <div className="image-container">  
              <div className="image-wrapper">  
                <img src={portraitUrl} alt="Example" className="image" />  
              </div>  
            </div>  
          </div>  
  
          <div className="App-paragraph">  
            <p>  
              その体から露出する機械は時計仕掛けになっており、ゼンマイがテンプの往復運動と連結されることで等速でほどけ、それに紐づいたカムが身体の各部に繋がれているイメージを想起しました。
              作品内部は時計仕掛けの仕組みになっており、ゼンマイを巻くことで、時計と同様にゼンマイがほどけながら宙に吊られた右手の指が反復運動を行います。  
            </p>  
  
            <div className="image-container">  
              <div className="image-wrapper">  
                <img src={insideUrl} alt="Example" className="image" />  
              </div>  
            </div>  
          </div>  
  
          <div className="video-section">  
            <h4>動く様子</h4>  
            <div className="videos-container">  
              <div className="videos-wrapper">  
                <video  
                  controls  
                  className="video"  
                  playsInline  
                  preload="metadata"  
                >  
                  <source src={videoUrl} type="video/mp4" />  
                  お使いのブラウザは video タグに対応していません  
                </video>  
                {/* <div className="video-caption">（クリックで再生）</div>   */}
              </div>  
            </div>  
          </div>  
        </div>  
      </section>  
  
      <section className="App-description">  
        <h3>作者紹介</h3>  
        <div className="image-container">  
          <div className="image-wrapper">  
            <img src={artistUrl} alt="Example" className="image" />  
            <div className="image-title">夢野ハダリ -無生物作家-</div>  
          </div>  
        </div>  
  
        <table className='profile-bio'>  
          <thead>  
            <tr>  
              <th>年</th>  
              <th>略歴</th>  
            </tr>  
          </thead>  
          <tbody>  
            <tr>  
              <td>2018～2020年</td>  
              <td>人形及び人型アンドロイドを含むロボットに触れ、無生物が生命らしさを持つことに対して興味を抱く。</td>  
            </tr>  
            <tr>  
              <td>2020年11月</td>  
              <td>吉田良氏に師事して人形制作を開始。</td>  
            </tr>  
            <tr>  
              <td>2021年~2024年</td>  
              <td>一人目の人形を製作後、独学で人形制作及び生を与える為の機構の制作の試行錯誤を開始。</td>  
            </tr>  
            <tr>  
              <td>2024年3月</td>  
              <td>木村龍氏に師事して人形制作を再開。以後、造形に加えて手動・自動（ゼンマイ、電気）で動く立体の制作を開始。</td>  
            </tr>  
          </tbody>  
        </table>  
      </section>  
  
      <footer className="App-footer">  
        <h4>展示概要</h4>  
        <p>期間: 2024年10月28日 - 2024年11月9日</p>  
        <p>平日:18:00~23:00 土日:14:00~23:00 ※最終日は14:00~20:00</p>  
        <p>月休 チャージ￥300+1D</p>  
        <p>場所: Gallary Cafe&Barオンディーヌ</p>  
      </footer>  
    </div>  
  );  
}  
  
export default App;  