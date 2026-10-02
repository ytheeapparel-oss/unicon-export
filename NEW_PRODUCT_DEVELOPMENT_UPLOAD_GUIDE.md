# UNICON LEATHER — New Product Development (NPD) Moving Panels Guide

## 1. Overview
Directly beneath the **"Curated Export Portfolio"** section on your homepage, there is now an interactive **15 Square Panel Moving Showcase** titled **"New Product Development & Innovations"**.

Each panel features:
- **100% Square Aspect Ratio** (`1:1`) with luxury border styling.
- **Floating Prototype Code Badge** (`NPD-01` through `NPD-15`).
- **Development Stage Badge** (e.g. *Golden Sample Approved*, *Pattern Refined*, *Tooling Complete*).
- **Product Category & Title**.
- **Interactive Continuous Drift Animation** (with Pause/Resume controls and hover-to-inspect).

---

## 2. How to Upload Your New Product Development Images

You have two very easy ways to upload your photos:

### Method A: Direct File Drop (Fastest & Simplest)
1. Open the folder in your project:
   ```
   public/images/npd/
   ```
2. You will find 15 image slots:
   - `npd-01.jpg`
   - `npd-02.jpg`
   - `npd-03.jpg`
   - `npd-04.jpg`
   - `npd-05.jpg`
   - `npd-06.jpg`
   - `npd-07.jpg`
   - `npd-08.jpg`
   - `npd-09.jpg`
   - `npd-10.jpg`
   - `npd-11.jpg`
   - `npd-12.jpg`
   - `npd-13.jpg`
   - `npd-14.jpg`
   - `npd-15.jpg`
3. Simply **replace any of these files** with your new product photos (using the same file name).
4. **Recommended format**: Square image (`1:1` aspect ratio, e.g. `800 x 800` or `1000 x 1000` pixels, JPG or PNG).

---

### Method B: Customizing Titles, Categories & Stages in Code
If you want to customize the prototype title, development stage, or link to a specific category, open:
```
src/data/newProductDevelopment.ts
```

Each panel is configured in a simple array:
```typescript
{
  id: 1,
  code: "NPD-01",
  title: "Sculpted Architectural Crossbody Bag",
  category: "Luxury Handbags",
  stage: "Golden Sample Approved",
  image: "/images/npd/npd-01.jpg",
  href: "/contact#rfp-form",
  badge: "New Release",
}
```

Whenever you push changes or update images, GitHub and Vercel will automatically build and publish them to your live website.
