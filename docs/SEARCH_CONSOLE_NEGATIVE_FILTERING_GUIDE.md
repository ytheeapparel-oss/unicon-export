# Google Search Console Negative Filtering & Intent Governance Guide

**Target Entity:** Unicon Leather Goods Export Private Limited  
**Website:** https://www.uniconleather.com  
**Purpose:** Standard Operating Procedure (SOP) for monthly Search Console review, negative query filtering, and protecting 100% genuine leather commercial search intent across USA, Canada, France, and Germany.

---

## 1. Executive Context & The "Negative Leakage" Problem

As a premier OEM/ODM cut-and-sew leather goods manufacturer, UNICON LEATHER targets high-margin B2B commercial procurement queries:
* `leather goods manufacturer`
* `bespoke leather manufacturer`
* `small leather goods manufacturer`
* `private label leather goods manufacturer`

However, algorithmic search engines frequently cluster leather goods alongside unrelated or lower-value categories:
1. **Synthetic & "Vegan" Plastics:** Searches for `PU leather bag manufacturer`, `vegan leather supplier`, `faux leather wallets`.
2. **Upholstery & Heavy Covers:** Searches for `leather sofa repair`, `leather bike seats`, `car seat upholstery`, `drone covers`.
3. **Industrial PPE & Gloves:** Searches for `industrial work gloves`, `welding gloves India`, `leather safety gloves wholesale`.

**Why this matters:**
* Impressions from these queries dilute your **Click-Through Rate (CTR)**.
* Any clicks acquired from these queries bounce immediately upon realizing UNICON is an authentic luxury leather goods atelier, sending negative behavioral signals to Google's ranking algorithms.
* Ad spend (if running Google Ads) is wasted on low-ticket retail consumers or unrelated industrial buyers.

---

## 2. Monthly Google Search Console (GSC) Filter Presets

When conducting your monthly organic search review in Google Search Console (**Performance** $\rightarrow$ **Search Results**):

### Preset A: Clean Commercial Intent View (Filtered)
To see *only* qualified genuine leather manufacturing queries and evaluate true buyer demand, apply a Custom Regex Query Filter:

1. Click **+ New** $\rightarrow$ **Query...**
2. Select **Custom (regex)** $\rightarrow$ **Matches regex**
3. Paste the following expression:
```regex
^(?!.*(pu\b|vegan|faux|pleather|synthetic|glove|gloves|upholstery|sofa|bike seat|cushion|drone|welding|work glove)).*$
```
*Effect:* Removes all synthetic, glove, and upholstery queries from the report, giving you a clean baseline of genuine leather buyer impressions, clicks, CTR, and average position.

---

### Preset B: Negative Leakage Audit View (Monitor Impure Intent)
To monitor whether Google is testing your site against non-core terms (and identify which pages are accidentally attracting them):

1. Click **+ New** $\rightarrow$ **Query...**
2. Select **Custom (regex)** $\rightarrow$ **Matches regex**
3. Paste the following expression:
```regex
\b(pu|vegan|faux|pleather|synthetic|glove|gloves|upholstery|sofa|cushion|bike seat|drone|welding)\b
```
*Effect:* Isolates all impressions containing excluded terms.
* **Target Metric:** Near-zero clicks. Impressions may occur as Google's semantic models probe keyword boundaries, but clicks should remain negligible.
* **If Impressions Spike on a Specific Page:** Check the "Pages" tab in GSC to see which URL is ranking. Verify that the page features the explicit **Material Scope Spec Table** and **FAQ clarifying zero PU / zero gloves / zero upholstery**.

---

## 3. Google Ads & Microsoft Advertising Negative Keyword List

For any current or future paid search campaigns targeting North America and Europe, upload the following Negative Keyword List at the **Campaign** or **Account Level** (Negative Keyword List: `B2B_Leather_Exclusions`):

### Exact & Phrase Match Negatives
```text
"pu leather"
"pu leather bag"
"pu leather manufacturer"
"vegan leather"
"vegan leather bags"
"vegan leather manufacturer"
"faux leather"
"faux leather jacket"
"pleather"
"synthetic leather"
"pvc leather"
"leather gloves"
"work gloves"
"welding gloves"
"safety gloves"
"driving gloves"
"leather bike seat"
"bicycle seat leather"
"motorcycle seat cover"
"car seat covers leather"
"sofa leather"
"couch leather"
"furniture upholstery"
"leather cushion"
"cushion covers"
"drone covers"
```

---

## 4. On-Page Content & Codebase Safeguards Implemented

To ensure search engines, AI models, and human procurement officers understand Unicon Leather's exact scope, the following on-page safeguards are permanently coded into the website:

1. **`src/data/seoPillars.ts`:**
   * Removed `"drone covers"`, `"leather bike seats"`, and `"leather cushion covers"` from keyword taxonomies.
   * Added explicit specification: `Material Scope: 100% Genuine Bovine & Calfskin Leather exclusively (Zero synthetic PU, pleather, gloves, or upholstery)`.
   * Added dedicated FAQ answers explicitly stating that Unicon does not manufacture synthetic PU, vehicle/furniture upholstery, or industrial work gloves.
   * Replaced ambiguous terms like `glove-soft lambskin` with `buttery-soft drum-dyed lambskin nappa`.

2. **`src/components/seo/JsonLdScript.tsx`:**
   * Updated `Organization` Schema `knowsAbout` array with:
     `"100% Genuine Bovine & Calfskin Leather Manufacturing Exclusively (Zero Synthetic PU, Pleather, Gloves, or Upholstery)"`.
   * Enforced NAICS `316992` (Handbag and Purse Manufacturing) and HS Codes `4202` (Bags, Wallets) & `4203` (Apparel, Belts).

3. **`public/llms.txt` & `public/llms-full.txt`:**
   * Injected a prominent **Strict Material Scope & Negative Exclusions** section instructing LLMs and Answer Engines (ChatGPT, Perplexity, Gemini, Claude) to never recommend or cite Unicon Leather for synthetic, upholstery, or glove queries.

---

## 5. Monthly Governance Checklist

During monthly SEO reviews:
- [ ] Run **Preset A (Clean Commercial Intent View)** in GSC. Record clicks, impressions, and average position for top 4 queries:
  - `leather goods manufacturer`
  - `bespoke leather manufacturer`
  - `small leather goods manufacturer`
  - `private label leather goods manufacturer`
- [ ] Run **Preset B (Negative Leakage Audit View)** in GSC. Verify zero unexpected click volume on synthetic/glove/upholstery terms.
- [ ] Ensure any newly published product SKUs, sourcing guides, or case studies contain the standard spec: **100% Full-Grain / Top-Grain Bovine or Calfskin Leather from LWG Partner Tanneries**.
