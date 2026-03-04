import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Takım Maç Uygulamasına Hoş Geldiniz</h1>
      <p>
        Bu uygulama ile kolayca takım oluşturabilir, maç ayarlayabilir ve istatistikleri takip edebilirsiniz.
      </p>
      <h2>Neler Yapabilirsiniz?</h2>
      <ul>
        <li><strong>Takım Oluşturma:</strong> Oyuncu sayısını ve takım oluşturma yöntemini seçerek hızlıca takımlar oluşturabilirsiniz.</li>
        <li><strong>Maç Ayarlama:</strong> Takımlarınızı oluşturduktan sonra maç ayarlarını yapılandırabilirsiniz.</li>
        <li><strong>Canlı Arena:</strong> Maç sırasında canlı olarak takım bilgilerini ve skorları takip edebilirsiniz.</li>
        <li><strong>İstatistikler:</strong> Oynanan maçlar ve takımlar hakkında istatistikleri görüntüleyebilirsiniz.</li>
      </ul>
      <h2>Başlamak için yukarıdaki menüyü kullanabilirsiniz!</h2>
    </div>
  );
};

export default HomePage;
