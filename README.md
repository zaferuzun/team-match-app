Harika bir fikir! Bir projenin **README.md** dosyası, o projenin aynasıdır. Hem senin için bir not defteri hem de başkaları (veya gelecekteki sen) projeye baktığında neyin neden yapıldığını anlamasını sağlayan bir kılavuzdur.

İşte projenin kök dizinine ekleyebileceğin, modern standartlara uygun profesyonel bir **README.md** içeriği:

---

# 🏆 Team Match Application

Bu proje, takımlar oluşturmak ve oyuncuları yönetmek için geliştirilmiş, modern React pratiklerini (2025-2026 standartları) içeren modüler bir web uygulamasıdır.

## 🚀 Kullanılan Teknolojiler ve Yaklaşımlar

Bu projeyi geliştirirken sürdürülebilirlik ve performans odaklı şu teknolojiler tercih edilmiştir:

### 1. **Mimari: Özellik Tabanlı Yapı (Feature-Based Architecture)**
Proje, geleneksel "dosya tipine göre" (components, hooks vb.) klasörleme yerine **"Özelliğe Göre"** klasörlenmiştir.
*   **Neden?** Proje büyüdükçe ilgili mantığın (logic), bileşenlerin ve hookların tek bir klasör (`features/`) altında toplanması, kodun bulunabilirliğini ve bakımını kolaylaştırır.
*   **Örnek:** `features/match` klasörü kendi içinde tüm sihirbaz (wizard) mantığını barındırır.

### 2. **State Yönetimi: Context API**
Uygulama genelinde (sayfalar arası) paylaşılan veriler için React'in yerleşik **Context API**'sı kullanılmıştır.
*   **TeamContext:** Oyuncu listesinin eklenmesi, silinmesi ve tüm uygulamada güncel kalmasını sağlar.

### 3. **Logic (Mantık) Ayrımı: Custom Hooks**
UI (Arayüz) ile mantık birbirinden ayrılmıştır.
*   **useMatchWizard:** Maç oluşturma algoritması, adım yönetimi (step logic) ve state güncellemeleri bileşenlerden soyutlanarak özel bir hook içerisine taşınmıştır. Bu sayede UI bileşenleri sadece veriyi göstermekle yükümlüdür.

### 4. **Modern Stil: Tailwind CSS v4**
En güncel CSS motoru olan **Tailwind CSS v4** kullanılmıştır.
*   **Vite Entegrasyonu:** `@tailwindcss/vite` eklentisi ile en hızlı build performansı sağlanmıştır.
*   **Modern Yapı:** PostCSS yapılandırması basitleştirilmiş ve `@import "tailwindcss";` direktifi ile modernize edilmiştir.

### 5. **Build Aracı: Vite**
Geleneksel Webpack yerine modern, esnek ve ışık hızında çalışan **Vite** tercih edilmiştir.

---

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

---

## 🛠️ Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için şu adımları izleyin:

1. **Paketleri Yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda Açın:**
   `http://localhost:5173`

---
