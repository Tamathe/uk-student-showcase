# UK Student Organization Showcase — Website Template

A modern, single-page website template with **University of Kentucky** branding, designed to be personalized for any student organization and any hobby/interest in under 20 minutes.

---

## Quick Start

1. Open `index.html` in a browser to preview the template
2. Follow the **Personalization Guide** below to swap in real content
3. Deploy anywhere (GitHub Pages, Netlify, or just open the HTML file)

---

## File Structure

```
Live demo/
├── index.html      ← Main page (edit placeholders here)
├── styles.css      ← All styling, UK branding, animations
├── script.js       ← Interactivity (no edits needed)
├── README.md       ← This file
└── images/         ← Drop photos here
```

---

## Personalization Guide (Find-and-Replace)

Open `index.html` in any text editor and use **Find & Replace** (Ctrl+H / Cmd+H) to swap these placeholders:

### Step 1: Organization Information (global replacements)

| Find This             | Replace With                         | Example                          |
|-----------------------|--------------------------------------|----------------------------------|
| `ORG_NAME`            | Organization name                    | `UK Rock Climbing Club`          |
| `ORG_DESCRIPTION`     | 2-3 sentence description of the org  | `We host weekly climbing sessions…` |
| `ORG_MISSION_STATEMENT` | Mission or purpose statement       | `Building a community of climbers…` |
| `ORG_EMAIL`           | Org email (without @uky.edu)         | `ukclimbingclub`                 |
| `YEAR_FOUNDED`        | Year the organization was founded    | `2019`                           |
| `MEMBER_COUNT`        | Number of active members             | `45`                             |
| `MEETING_LOCATION`    | Where meetings are held              | `Johnson Center Room 201`        |
| `MEETING_SCHEDULE`    | When meetings happen                 | `Tuesdays at 7 PM`              |

### Step 2: Hobby/Interest

| Find This           | Replace With                          | Example                    |
|----------------------|---------------------------------------|----------------------------|
| `HOBBY_NAME`         | The hobby/interest the org is built around | `Rock Climbing`       |

### Step 3: Activities (What We Do cards)

| Find This                    | Replace With                           | Example                          |
|------------------------------|----------------------------------------|----------------------------------|
| `ACTIVITY_1` through `_4`   | Activity/focus area titles             | `Weekly Climbs`, `Competitions`… |
| `ACTIVITY_DESC_1` – `_4`    | Activity descriptions                  | `We meet every Tuesday at…`      |

### Step 4: Timeline Milestones

| Find This                         | Replace With                  | Example                        |
|-----------------------------------|-------------------------------|--------------------------------|
| `YEAR_OR_DATE_1` – `_4`          | Dates/years                   | `2019`, `Fall 2022`            |
| `MILESTONE_TITLE_1` – `_5`       | Milestone names               | `Club Founded`                 |
| `MILESTONE_DESCRIPTION_1` – `_5` | Milestone details             | `Started with 5 members…`      |

### Step 5: Statistics

| Find This                      | Replace With                   | Example                          |
|--------------------------------|--------------------------------|----------------------------------|
| `STAT_NUMBER_1` – `_4`        | Numeric values (integers only) | `45`, `12`, `500`, `95`          |
| `STAT_LABEL_1` – `_4`         | Short labels                   | `Active Members`                 |
| `STAT_DESCRIPTION_1` – `_4`   | Brief context                  | `And growing every semester`     |

> **Note:** Change `data-suffix` in the HTML to adjust what appears after each number (`+`, `%`, or leave empty).

### Step 6: Focus Areas (Progress Bars)

| Find This                  | Replace With              | Example                |
|----------------------------|---------------------------|------------------------|
| `FOCUS_AREA_1` – `_4`     | Focus area names          | `Skill Development`    |
| `FOCUS_PERCENT_1` – `_4`  | Emphasis level (0-100)    | `90`                   |

> **Important:** Update both the display text AND the `data-percent` attribute value.

### Step 7: Gallery

| Find This                 | Replace With            | Example                    |
|---------------------------|-------------------------|----------------------------|
| `CAPTION_TITLE_1` – `_6` | Image titles            | `Fall Kickoff Event`       |
| `CAPTION_DESC_1` – `_6`  | Image descriptions      | `50 members at our opener` |

To add actual images:
1. Place photos in the `images/` folder
2. Replace each `<div class="gallery-placeholder">…</div>` block with:
   ```html
   <img src="images/your-photo.jpg" alt="Description">
   ```

### Step 8: Quote / Mission Statement

| Find This            | Replace With                                                    |
|----------------------|-----------------------------------------------------------------|
| `ORG_QUOTE`          | A mission statement, motto, or quote from a member/leader       |
| `QUOTE_ATTRIBUTION`  | Who said it (name or "Our Mission")                             |
| `ORG_ROLE`           | Their role (e.g., "President", "Founder", or the org name)      |

### Step 9: Social/Contact Links

| Find This               | Replace With                   | Example                              |
|--------------------------|--------------------------------|--------------------------------------|
| `INSTAGRAM_URL`          | Instagram profile URL          | `https://instagram.com/ukclimbing`   |
| `INSTAGRAM_HANDLE`       | Instagram handle               | `ukclimbing`                         |
| `SIGNUP_OR_LINKTREE_URL` | Sign-up or Linktree URL        | `https://linktr.ee/ukclimbing`       |
| `SIGNUP_PLATFORM`        | Platform name for sign-ups     | `BBNvolved`                          |
| `ADDITIONAL_LINK_URL`    | Any other link                 | `https://discord.gg/ukclimbing`      |
| `PLATFORM_NAME`          | Platform name                  | `Discord`                            |
| `PLATFORM_HANDLE`        | Handle/username                | `UK Climbing Club`                   |

### Step 10: Photos

**Hero background:**
- Option A (image): Uncomment the `<img>` tag in the hero section and set `src`
- Option B (gradient): The default animated blue gradient works great without any image

**Group photo:**
- Replace `<div class="photo-placeholder">…</div>` in the About section with:
  ```html
  <img src="images/group-photo.jpg" alt="ORG_NAME members">
  ```

---

## Adding/Removing Sections

Each section is self-contained in the HTML. To:
- **Remove a section:** Delete everything between its opening `<!-- === SECTION NAME -->` comment and the closing `</section>` tag
- **Add activity cards:** Copy an existing `.hobby-card` div and modify
- **Add timeline items:** Copy an existing `.timeline-item` div and modify
- **Add gallery images:** Copy an existing `.gallery-item` div and modify
- **Add/remove stats:** Copy or delete `.stat-card` divs

---

## UK Branding Reference

| Element       | Value                                                  |
|---------------|--------------------------------------------------------|
| Wildcat Blue  | `#0033A0` (PMS 286)                                   |
| White         | `#FFFFFF`                                              |
| Black         | `#2C2A29`                                              |
| Heading Font  | Oswald (web proxy for UK's Alt Trade Gothic)           |
| Body Font     | Inter (web proxy for UK's Usual typeface)              |
| Brand Guide   | [brand.uky.edu](https://brand.uky.edu)                |

---

## Technical Notes

- **No build tools required** — pure HTML, CSS, and JavaScript
- **No external dependencies** — only Google Fonts (loaded via CDN)
- **Responsive** — tested for desktop, tablet, and mobile
- **Animations** — scroll-triggered via Intersection Observer (performant)
- **Accessibility** — semantic HTML, proper heading hierarchy, alt text placeholders
- **Browser support** — all modern browsers (Chrome, Firefox, Safari, Edge)

---

## Deployment Options

- **Local:** Just open `index.html` in a browser
- **GitHub Pages:** Push to a repo, enable Pages in Settings → Source: main branch
- **Netlify/Vercel:** Drag and drop the folder, or connect your repo
- **University hosting:** Upload files to your UK web space

---

*Built for the UK Student Success Demo — University of Kentucky*
