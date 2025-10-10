# CV Creator

Modern ve kullanıcı dostu bir CV oluşturma uygulaması. LinkedIn profillerinden otomatik veri çekme özelliği ile hızlı ve kolay CV oluşturmanızı sağlar.

## 🚀 Özellikler

- LinkedIn profilinden otomatik veri çekme
- Modern ve responsive tasarım
- Kullanıcı dostu arayüz
- Gerçek zamanlı önizleme
- PDF export desteği
- Özelleştirilebilir CV şablonları

## 🛠️ Teknolojiler

### Frontend (Vite)

- React
- Vite
- Tailwind CSS / CSS Modules

### Backend (Next.js)

- Next.js 14+
- API Routes
- Server-side rendering
- CORS proxy özelliği

## 📋 Gereksinimler

- Node.js 18.x veya üzeri
- npm veya yarn
- LinkedIn API erişimi (LinkdAPI)

## 🔧 Kurulum

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/BerkantKazangirler/cv-creator.git
cd cv-creator
```

### 2. Backend Kurulumu (Next.js)

```bash
cd backend
npm install
```

#### Backend Environment Variables

`backend` klasöründe `.env.local` dosyası oluşturun:

```env
LINKDAPI_API_KEY=your_linkdapi_api_key_here
NEXT_BASE_URL=https://linkdapi.com/api/v1/profile
```

**Not:** Next.js backend, CORS sorunlarını aşmak ve LinkedIn verilerini güvenli bir şekilde server-side olarak çekmek için kullanılmaktadır.

### 3. Frontend Kurulumu (Vite)

```bash
cd frontend
npm install
```

#### Frontend Environment Variables

`frontend` klasöründe `.env` dosyası oluşturun:

```env
VITE_LINKDAPI_TOKEN=your_primary_token_here
VITE_LINKDAPI_TOKEN_BK=your_backup_token_here
VITE_BASE_URL=http://localhost:3000/api/profile
```

**Açıklama:**

- `VITE_LINKDAPI_TOKEN`: Birincil LinkdAPI token'ınız
- `VITE_LINKDAPI_TOKEN_BK`: Yedek LinkdAPI token'ınız (opsiyonel)
- `VITE_BASE_URL`: Next.js backend API endpoint'i (CORS proxy olarak kullanılır)

## 🚀 Çalıştırma

### Backend'i Çalıştırma

```bash
cd backend
npm run dev
```

Backend varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

### Frontend'i Çalıştırma

Yeni bir terminal açın:

```bash
cd frontend
npm run dev
```

Frontend varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.

## 📁 Proje Yapısı

```
cv-creator/
├── backend/                 # Next.js backend
│   ├── app/
│   │   └── api/
│   │       └── profile/    # LinkedIn API proxy endpoint
│   ├── .env.local          # Backend environment variables
│   └── package.json
│
├── frontend/               # Vite React frontend
│   ├── src/
│   │   ├── components/    # React bileşenleri
│   │   ├── contexts/      # Veri depolama & transferi
│   │   ├── layouts/       # Site layoutları
│   │   ├── types/         # Veri Tipleri
│   │   ├── pages/         # Sayfa bileşenleri
│   │   └── utils/         # Yardımcı fonksiyonlar
│   ├── .env               # Frontend environment variables
│   └── package.json
│
└── README.md
```

## 🔐 API Kullanımı

### LinkdAPI Nedir?

LinkdAPI, LinkedIn profillerinden veri çekmek için kullanılan bir API servisidir. Bu proje, kullanıcıların LinkedIn profillerinden otomatik olarak bilgi alarak CV oluşturmasını sağlar.

### API Token Alma

1. [LinkdAPI](https://linkdapi.com) web sitesine gidin
2. Hesap oluşturun veya giriş yapın
3. API token'ınızı alın
4. Token'ı environment variables'a ekleyin

## 🌐 CORS ve Proxy Yapısı

Bu projede Next.js backend, CORS (Cross-Origin Resource Sharing) sorunlarını çözmek için proxy olarak kullanılmaktadır.

**Akış:**

1. Frontend (Vite) → Next.js Backend API (`/api/profile`)
2. Next.js Backend → LinkdAPI (`https://linkdapi.com`)
3. Veri → Next.js Backend → Frontend

Bu yapı sayesinde:

- CORS hataları önlenir
- API key'ler güvenli bir şekilde server-side'da saklanır
- Rate limiting ve caching kolayca uygulanabilir

## 🎨 Özelleştirme

### CV Şablonlarını Değiştirme

`frontend/src/components/sections/` klasöründeki şablon dosyalarını düzenleyerek kendi tasarımınızı oluşturabilirsiniz.

## 🐛 Sorun Giderme

### CORS Hatası

Eğer CORS hatası alıyorsanız:

1. Backend'in çalıştığından emin olun (`http://localhost:3000`)
2. Frontend `.env` dosyasındaki `VITE_BASE_URL`'in doğru olduğunu kontrol edin
3. Tarayıcı cache'ini temizleyin

### API Token Hatası

Eğer API token hatası alıyorsanız:

1. `.env` ve `.env.local` dosyalarındaki token'ların doğru olduğunu kontrol edin
2. Token'ların geçerli olduğundan emin olun
3. LinkdAPI hesabınızın aktif olduğunu kontrol edin

### Port Çakışması

Eğer portlar çakışıyorsa:

- Backend için: `package.json`'da port numarasını değiştirin
- Frontend için: `vite.config.js`'de port numarasını değiştirin

## 👤 Geliştirici

**Berkant Kazangirler**

- GitHub: [@BerkantKazangirler](https://github.com/BerkantKazangirler)

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## ⭐ Destek

Projeyi beğendiyseniz yıldız vermeyi unutmayın!

## 📞 İletişim

Sorularınız veya önerileriniz için issue açabilirsiniz.
