# NextJS + Ant Design + TailwindCSS Bootstrap
repo นี้เป็น bootstrap repo สำหรับเริ่มต้นพัฒนา frontend โดยได้ติดตั้งเครื่องมือที่จำเป็นต้องใช้ให้เรียบร้อยแล้ว ประกอบด้วย
- **Ant Design**
- **TailwindCSS**
- @thinknet/observer
- @thinknet/tn-analytics-server
- @thinknet/tn-analytics-web
- @apollo/client
- next
- next-intl
- express (custom server)
- jest
- @testing-library/react
- nodemon
- ts-node
- @storybook

และได้ setup structure ของ project ไว้เบื้องต้นโดยใช้ MVVM design pattern ในการเขียน (`feature/example`)

# Structure
```
.
└── src
    ├── app
    │   ├── [l]
    │   │   ├── home
    │   │   │   ├── page.tsx
    │   │   │   └── layout.tsx
    │   │   ├── page.tsx
    │   │   └── layout.tsx
    │   ├── favicon.ico
    │   ├── layout.tsx
    │   └── providers.tsx
    ├── components
    │   ├── common
    │   │   └── button.tsx
    │   ├── home
    │   │   └── banner.tsx
    │   ├── new_relic.tsx
    │   └── google_analytics.tsx
    ├── configs
    ├── constants
    ├── contexts
    │   ├── apollo_client.tsx
    │   ├── i18n.tsx
    │   └── tn_analytics.tsx
    ├── fonts
    ├── hooks
    │   └── common
    ├── icons
    ├── libs
    ├── messages
    │   ├── common
    │   │   ├── en.ts
    │   │   ├── th.ts
    │   │   └── index.ts
    │   └── index.tsx
    ├── server
    │   ├── controllers
    │   │   ├── observer.ts
    │   │   └── tn_analytics.ts
    │   ├── libs
    │   │   └── health_check.ts
    │   ├── middlewares
    │   │   └── locale.ts
    │   ├── index.ts
    │   └── router.ts
    └── types
        └── common.ts
```

## src/app/
- จาก tree จะเห็นว่ามีการทำ localization router ไว้ โดยกำหนดให้รับ url parameter `l` เพื่อรับ locale มาใช้งานเสมอเช่น `/th`, `/th/login`, `/en/resumes` เป็นต้น
- สามารถสร้าง page มาใช้งานได้โดยใช้ [NextJS App Router](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
- ในไฟล์ `layout.tsx` ชั้นนอกสุดจะครอบ children ด้วย `<Providers>` เพื่อให้ Context ที่จำเป็น สามารถเข้าถึงได้จากทั้ง app
- สามารถเปลี่ยน favicon ได้จาก `src/app/favicon.ico` เลย

## src/components/
- ใช้สำหรับเก็บ component ที่ใช้ภายใน app
- โดย component ที่ถูกใช้ร่วมกันจากหลายที่ ให้เก็บไว้ที่ `components/common/`

## src/configs
- ใช้เก็บ configuration ต่าง ๆ ภายใน app

## src/contexts
- ใช้เก็บ React Context หรือ Higer Order Component หรือ component ต่าง ๆ ที่ทำหน้าที่เป็น Provider
  
## src/fonts
- ใช้เก็บ fonts ที่ใช้ภายใน app โดยตั้งค่าที่ `fonts/index.ts`

## src/hooks
- ใช้เก็บ React Hooks ต่าง ๆ ที่ทำขึ้นมาเอง
- แยก hook ที่ถูกใช้งานร่วมกันหลายที่ไว้ใน `hooks/common/`

## src/icons 
- เก็บ svg icons

## src/libs
- เก็บ library ที่เขียนขึ้นเอง หรือ wrap 3rd party lib ไว้ที่นี่

## src/messages
- ใช้เก็บ localization variables โดยแยกตามหน้า
- เก็บ variables ที่ใช้ร่วมกันไว้ที่ `messages/common/`

## src/server
- ใช้เก็บ code ฝั่ง server side
### src/server/controllers
- เก็บ controller ของ server
### src/server/middlewares
- เก็บ middewares ของ ExpressJS
### src/server/libs
- เก็บ libs ที่เขียนมาใช้เองฝั่่ง server
  
## src/types
- ใช้เก็บ interface หรือ type

# Prerequisites
- NodeJS version >= 20.9
- Bun version >= 1.0

# Getting Started
  1. Run Docker
     1. สร้างไฟล์ `.env.local` จาก `.env.example` 
     1. รัน `docker compose up`
   
  2. Run Node
     1. สร้างไฟล์ `.env.local` จาก `.env.example`
     2. install dependencies ด้วย `bun install`
     3. รัน `bun run dev`
  
# App Configurations
### TN Analytics
สามารถใช้งานได้โดยกำหนด env ดังต่อไปนี้
```
NEXT_PUBLIC_TN_ANALYTICS_ENABLE="false"
NEXT_PUBLIC_TN_ANALYTICS_FIREHOSE_STREAM_NAME=""
NEXT_PUBLIC_TN_ANALYTICS_REGION=""
TN_ANALYTICS_ACCESS_KEY=""
TN_ANALYTICS_SECRET_KEY=""
TN_ANALYTICS_IDENTITY_POOL_ID=""
TN_ANALYTICS_PROVIDER_NAME=""
TN_ANALYTICS_ENCRYPTION_KEY=""
TN_ANALYTICS_BACKEND_TOKEN=""
```
References
- [@thinknet/tn-analytics-web](https://gitlab.thinknet.co.th/big-data/tn-analytics-web/-/tree/master?ref_type=heads)
- [@thinknet/tn-analytics-server](https://gitlab.thinknet.co.th/big-data/tn-analytics-server/-/tree/feature/readme?ref_type=heads)
### Google Analytics
สามารถใช้งานได้โดยกำหนด env ดังต่อไปนี้
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ENABLE="false"
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=""
```
References
- [GA4](https://developers.google.com/analytics?hl=th)
## วิธี set New Relic
- สามารถกำหนด env ดังนี้
```
NEW_RELIC_AGENT_ENABLED="false"
NEW_RELIC_APP_NAME=""
NEW_RELIC_LICENSE_KEY=""
```

# Story Book
- run story book ด้วย command `bun run storybook`
  - เข้าดู story book ผ่าน [http://localhost:6006](http://localhost:6006)
- build story book เป็น static web ด้วย command `bun run build:storybook`
  - ผลลัพธ์จะอยู่ที่ `storybook-static/`

# Testing
- สำหรับ Unit Test สามารถใช้ Jest ทดสอบได้เลย
- สำหรับ Component Test ใช้ `@testing-library/react` ช่วยในการ simulate click และ snapshot test
- สำหรับ server side สามารถทดสอบด้วยใช้ `@jest-mock/express` เพื่อช่วยให้ expect Express request, response ได้

# Internationalization (i18n)
ใช้ lib next-intl
  - ตัวอย่างและวิธีติดตั้ง [App Router Client Components](https://next-intl-docs.vercel.app/docs/getting-started/app-router-client-components)

- ข้อควรอาจะต้องระวัง!! กรณีที่เรา import messages ทั้งหมดไปที่ layout หลักของ `app/[l]` ถ้าขนาดของ json ใหญ่ อาจจะมีปัญหาเรื่อง performance ได้

# Conventions
## File and Folder Name
- ใช้ snake_case ในการตั้งชื่อ file และ folder
## File Extension
ใช้ File Extenstion `.tsx` ก็ต่อเมื่อในไฟล์นั้นมีการเรียกใช้ `jsx` นอกเหนือจากนั้น ให้ใช้ `.ts`

## Pathname
- ใช้ kebab-case ในการตั้งชื่อ pathname

# ติดต่อ
- Nan Jensathianwong (นัน), nan@thinknet.co.th
- Watchpon Janopat (โจ), watchapon@thinknet.co.th
- Panacholn Pongsamrithphol (ไอซ์), panacholn@thinknet.co.th
- Sukanya Onsee (ตู่), sukanya@thinknet.co.th
