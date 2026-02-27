# ⚽ Team Match Arena (v1.0)

Bu uygulama, halı saha maçları, konsol oyunları (FIFA/PES) veya arkadaş grupları için profesyonel maç eşleşmeleri, oyun modları ve maç ayarları organize eden modüler bir React platformudur.

## 🚀 Mimari ve Teknoloji Seçimleri

Proje, modern yazılım prensipleri (Clean Code, SOLID) dikkate alınarak geliştirilmiştir.

### 1. **Mimari: Feature-Based (Özellik Tabanlı) Yapı**
Geleneksel teknik odaklı klasörleme yerine, işlevsellik odaklı bir yapı tercih edilmiştir.
- **Neden?** Projenin ölçeklenebilirliğini artırır. `match` veya `game-config` ile ilgili bir geliştirme yaparken tüm bileşenler, hook'lar ve alt parçalar aynı klasör altında bulunur.
- **Dizin Yapısı:** 
  - `src/features/`: Uygulamanın ana motorlarını (Match, Setup, Config) barındırır.
  - `src/context/`: Global state (Hafıza) yönetimini sağlar.
  - `src/constants/`: Tüm metin ve ayarların tek merkezden yönetildiği yerdir.

  ## 📂 Klasör Yapısı

```text
src/
├── components/       # Proje genelinde kullanılan ortak UI parçaları
├── context/          # Global state yönetimi (TeamContext)
├── features/         # Uygulamanın ana fonksiyonel özellikleri
│   ├── teams/        # Oyuncu yönetimi (Ekleme/Silme)
│   └── match/        # Maç oluşturma sihirbazı ve algoritmalar
├── pages/            # Rotalar/Sayfalar (Home, Teams, Match)
└── App.jsx           # Uygulama giriş noktası ve navigasyon
```


### 2. **State Yönetimi: Context API & Centralized State**
Uygulama genelinde paylaşılan veriler için React'in yerleşik **Context API**'sı kullanılmıştır.
- **GameContext:** Oyuncu isimleri, seçilen takımlar, maç modları ve teknik konfigürasyonlar (stadyum, süre, taraf) bu merkezde toplanır.
- **Avantajı:** "Prop Drilling" (veriyi elden ele geçirme) sorununu ortadan kaldırır.

### 3. **Logic Katmanı: Custom Hooks (Logic vs. UI Separation)**
Tüm iş mantığı (İşlem sırası, rastgele atamalar, hesaplamalar) UI bileşenlerinden soyutlanmıştır.
- **useMatchWizard:** Takım oluşturma algoritmalarını yönetir.
- **useGameConfig:** Taraf seçimi (Yazı-Tura mantığı), stadyum ataması ve süre hesaplamalarını yönetir.

### 4. **Modern UI: Tailwind CSS v4**
En güncel CSS motoru olan **Tailwind v4** kullanılmıştır.
- **Vite Entegrasyonu:** `@tailwindcss/vite` eklentisi ile derleme performansı optimize edilmiştir.
- **Dinamik Tasarım:** Takım renklerine göre (Red/Blue) dinamik border, background ve text sınıfları kullanılmıştır.

---

## 🛠️ Uygulama Akışı (Wizard Logic)

Uygulama, karmaşık bir süreci yönetilebilir parçalara bölen **Wizard (Sihirbaz)** tasarım kalıbını kullanır:

1.  **Takım Oluşturma (`MatchWizard`):** 
    - Kişi sayısı seçilir (2, 3, 4).
    - "Takımım Hazır" (Manuel) veya "Random" (Rastgele) yöntemlerinden biri seçilir.
    - Dinamik input alanları ile isimler toplanır.
2.  **Mod Seçimi (`MatchSetupWizard`):**
    - "Seçimli Maç" veya "Normal Maç" ana kategorileri altından spesifik oyun türleri belirlenir.
3.  **Maç Ayarları (`GameConfigWizard`):**
    - Taraf seçimi ve Beyaz Forma hakkı sistem tarafından **otomatik/rastgele** atanır.
    - Stadyum ve süre (Manuel veya 10-15 dk arası Random) belirlenir.
4.  **Arena (`LiveArena`):**
    - Tüm veriler birleştirilir. Takımlar atanan taraflara (SAĞ/SOL) göre dinamik olarak konumlandırılır.

---

## 💎 Önemli Fonksiyonlar ve Refactoring

v1.0 sürümünde yapılan kritik iyileştirmeler:

- **Centralized Constants:** `constants/gameSettings.js` dosyası ile "Magic Strings" kullanımı bitirilmiş, tüm statik veriler tek merkezden yönetilmeye başlanmıştır.
- **Component Splitting:** Dev bileşenler (`GameConfigWizard` gibi), her bir adımın (`Step`) kendi dosyasına sahip olduğu küçük parçalara bölünmüştür.
- **Navigation Orchestration:** `App.jsx` içerisinde merkezi bir `switch-case` yapısı (renderPage) kurularak sayfalar arası geçiş mantığı temizlenmiştir.
- **Conditional Layouts:** `LiveArena` sayfasında CSS `order` özelliği kullanılarak, takımların taraflara göre fiziksel yer değişimi sağlanmıştır.

---

## 📦 Kurulum

1. Depoyu klonlayın:
   ```bash
   git clone [repo-url]
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Tailwind v4 ve Vite eklentilerini kurun:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

---


## 🗺️ v2.0 Roadmap: Maç Asistanı Güncellemesi

Uygulamayı bir araçtan yaşayan bir platforma dönüştürecek olan v2.0 sürümü için planlanan geliştirmeler şunlardır:

### 1. 💾 Veri Kalıcılığı (Persistence Layer)
- **LocalStorage Entegrasyonu:** Kullanıcı tarayıcıyı kapatsa bile takımlar, oyuncu listesi ve aktif maç ayarları silinmeyecek.
- **State Hydration:** Uygulama açılışında `Context`, tarayıcı hafızasındaki verilerle otomatik olarak beslenecek.

### 2. ⏱️ Canlı Maç Yönetimi (Live Arena Features)
- **İnteraktif Skorboard:** Arena sayfasında Red ve Blue takımlar için skor takibi (+/- butonları).
- **Canlı Geri Sayım:** Seçilen maç süresine (10-15 dk) göre dijital bir geri sayım sayacı.
- **Maç Durumları:** Maçın "Devam Ediyor", "Devre Arası" veya "Bitti" olarak işaretlenmesi.

### 3. 📱 Paylaşım ve Sosyal Entegrasyon
- **WhatsApp Paylaşım:** Oluşan eşleşmeyi, mod bilgilerini ve süreyi tek tuşla WhatsApp gruplarına formatlı metin olarak gönderme.
- **Maç Özeti Görseli:** Takım kadrolarının şık bir görsel (canvas veya screenshot) olarak indirilmesi.

### 4. 🎨 UI/UX Geliştirmeleri
- **Framer Motion:** Sayfalar arası akışkan geçişler ve butonlar için mikro-etkileşimler.
- **Toast Notifications:** "Maç kaydedildi", "Takımlar kopyalandı" gibi durumlar için bildirim sistemi.
- **Sesli Uyarılar:** Süre bittiğinde veya gol atıldığında opsiyonel ses efektleri.

### 5. 📊 İstatistik ve Geçmiş (Analytics)
- **Match History:** Yapılan son 10 eşleşmenin sonuçlarıyla birlikte listelenmesi.
- **Oyuncu Form Grafiği:** Hangi oyuncunun hangi takımla daha çok kazandığının takibi.