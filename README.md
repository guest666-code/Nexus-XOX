# 🎮 Nexus XOX - Online Tic-Tac-Toe

Nexus XOX, modern siberpunk/neon tasarımıyla öne çıkan, web tabanlı ve odalı sisteme sahip dinamik bir **XOX (Tic-Tac-Toe)** oyunudur. Kullanıcılar anlık olarak benzersiz 6 haneli davet kodları üreterek arkadaşlarıyla eşleşebilirler.

⚡ **SGM** tarafından geliştirilmiştir.

---

## 🚀 Özellikler

- 🌟 **Fütüristik Arayüz:** Gözü yormayan `nexusDark` arka planı, parlayan `nexusNeon` ve `nexusPurple` renk paleti.
- 🔑 **6 Haneli Oda Sistemi:** Sayı ve harflerden oluşan (Örn: `NX79A2`) rastgele davet kodları ile güvenli oda kurulumu ve katılımı.
- 📱 **Tam Responsive Tasarım:** Hem mobilde hem masaüstünde kusursuz 3x3 oyun deneyimi.
- ⚡ **Hızlı Mantık (Hook):** `useGame.js` ile optimize edilmiş sıra takibi, kazanan kombinasyon tespiti ve parlayan kazanan kareler.

---

## 📂 Dosya Yapısı

```text
nexus-xox/
├── src/
│   ├── assets/         # Ses efektleri (click.mp3, win.mp3)
│   ├── components/     # Board, Square, Button bileşenleri
│   ├── hooks/          # useGame.js (Oyun algoritması)
│   ├── views/          # Lobby ve GameRoom ekranları
│   └── App.jsx         # Ana yönlendirici
