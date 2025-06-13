[![wakatime](https://wakatime.com/badge/github/hounch/yoga-home.svg)](https://wakatime.com/badge/github/hounch/yoga-home)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

### 🧘‍♀️ Yoga Studio Website
- Modern responsive design
- Interactive carousels for different content types
- Trainer profiles and class information

### 📝 Content Management System (CMS)
- **YAML-based content management** for easy editing
- **Admin panel** at `/admin` powered by Decap CMS
- **API endpoints** for dynamic content loading

#### Content Structure
```
content/
├── trainers/          # Trainer profiles
├── single-classes/    # Individual class offerings  
├── subscriptions/     # Membership plans
```

#### Admin Panel
Access the admin interface at `/admin` to manage:
- 👥 **Тренеры** - Trainer profiles with photos and descriptions
- 🏃‍♀️ **Разовые занятия** - Individual classes and pricing
- 💳 **Абонементы** - Subscription plans and packages

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Admin Panel Access
Visit [http://localhost:3000/admin](http://localhost:3000/admin) to access the content management interface.

## Project Structure

```
src/
├── app/
│   ├── admin/         # CMS admin panel
│   ├── api/           # API endpoints for YAML content
│   ├── constants/     # Static data constants
│   └── ui/            # UI components
├── lib/
│   └── content.ts     # YAML content reading utilities
└── content/           # YAML content files
```

## API Endpoints

- `GET /api/trainers` - Fetch trainer data
- `GET /api/single-classes` - Fetch class information  
- `GET /api/subscriptions` - Fetch subscription plans

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
