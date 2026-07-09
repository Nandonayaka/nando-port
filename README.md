# VS Code Portfolio Website

Sebuah website portfolio yang dirancang dengan tema Visual Studio Code yang profesional dan modern. Dibuat menggunakan React, Next.js, dan Tailwind CSS.

## Fitur

✨ **Tema VS Code Authentic** - Desain dan warna yang match persis dengan Visual Studio Code  
📦 **Modular Components** - Struktur component yang terorganisir dan mudah dikustomisasi  
🎨 **Tailwind CSS** - Styling yang responsif dan mudah dikembangkan  
⚡ **Next.js 16** - Framework React modern dengan performance optimal  
🎯 **Fully Responsive** - Tampilan sempurna di semua ukuran layar  

## Struktur Project

```
.
├── app/
│   ├── layout.tsx          # Root layout dengan global styles
│   ├── page.tsx            # Main page component
│   └── globals.css         # Tailwind CSS configuration
├── components/
│   ├── Sidebar.tsx         # Sidebar dengan icon menu
│   ├── Explorer.tsx        # Explorer panel untuk file structure
│   ├── Editor.tsx          # Main editor content area
│   ├── Header.tsx          # Header menu bar
│   └── StatusBar.tsx       # Status bar di bawah
├── public/                 # Static assets
├── package.json            # Dependencies
└── tailwind.config.ts      # Tailwind configuration
```

## Tech Stack

- **Frontend Framework**: Next.js 16 (React)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: TypeScript & JavaScript
- **Package Manager**: pnpm

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

Aplikasi akan tersedia di `http://localhost:3000`

### 3. Build for Production

```bash
pnpm build
pnpm start
```

## Customization

### Edit Content

Buka `components/Editor.tsx` untuk mengubah:
- Project recent list
- Walkthrough items
- Start menu items

### Customize Colors

Edit file `app/globals.css` untuk mengubah warna scheme:
- Background: `#1e1e1e` (main), `#252526` (panels), `#333333` (sidebar)
- Primary: `#0098ff` (accent blue)
- Text: `#cccccc` (primary), `#858585` (secondary)

### Add More Projects

Edit `components/Explorer.tsx` untuk menambah project folders atau files.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Performance Tips

1. Gunakan Next.js Image component untuk optimasi gambar
2. Implement lazy loading untuk component yang tidak terlihat
3. Gunakan dynamic imports untuk reduce bundle size

## Deploy

### Deploy ke Vercel (Recommended)

```bash
pnpm build
vercel
```

### Deploy ke Platform Lain

Build static site:
```bash
pnpm build
```

File build ada di folder `.next`

## Troubleshooting

**Port 3000 sudah terpakai?**
```bash
pnpm dev -p 3001
```

**Ada error saat npm install?**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## License

MIT License - Bebas digunakan untuk personal dan commercial projects

## Credits

- Design inspired by Visual Studio Code
- Built with Next.js dan Tailwind CSS
- Icons from Lucide React

---

Untuk pertanyaan atau kontribusi, silakan buat issue atau pull request. Happy coding! 🚀
