nexus-xox/
├── public/
│   └── index.html
├── src/
│   ├── assets/             # Ses efektleri ve logolar
│   │   ├── click.mp3
│   │   └── win.mp3
│   ├── components/         # Küçük, tekrar kullanılabilir arayüz elemanları
│   │   ├── Board.jsx       # 3x3 Oyun Tahtası
│   │   ├── Square.jsx      # Tahtadaki her bir kare (X veya O)
│   │   └── Button.jsx      # Ortak buton tasarımı
│   ├── hooks/              # Oyun mantığını ayıran özel fonksiyonlar
│   │   └── useGame.js      # Sıra takibi, kazananı belirleme vb.
│   ├── views/              # Ana ekran görünümleri
│   │   ├── Lobby.jsx       # Giriş, oda oluşturma ve katılma ekranı
│   │   └── GameRoom.jsx    # Oyunun oynandığı canlı oda ekranı
│   ├── App.jsx             # Ekranlar arası geçişi yöneten ana dosya
│   ├── index.css           # Tailwind CSS kurulumu
│   └── main.jsx            # React'ı başlatan kök dosya
├── package.json
└── tailwind.config.js

