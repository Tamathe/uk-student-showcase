# UK Student Success Showcase — Website Template

A modern, single-page website template with **University of Kentucky** branding, designed to be personalized for any student and any hobby/interest in under 20 minutes.

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
└── images/         ← Create this folder for photos (optional)
```

---

## Personalization Guide (Find-and-Replace)

Open `index.html` in any text editor and use **Find & Replace** (Ctrl+H / Cmd+H) to swap these placeholders:

### Step 1: Person Information (global replacements)

| Find This             | Replace With                         | Example                    |
|-----------------------|--------------------------------------|----------------------------|
| `PERSON_NAME`         | Full name                            | `Jane Smith`               |
| `MAJOR_OR_ROLE`       | Major or title                       | `Computer Science Major`   |
| `MAJOR_FIELD`         | Field of study                       | `Computer Science`         |
| `YEAR_IN_SCHOOL`      | Class year                           | `Junior`                   |
| `HOMETOWN_CITY, STATE`| Hometown                             | `Louisville, KY`           |
| `PERSON_EMAIL`        | UK email (without @uky.edu)          | `jane.smith`               |

### Step 2: Hobby/Interest

| Find This                        | Replace With                                | Example                              |
|----------------------------------|---------------------------------------------|--------------------------------------|
| `HOBBY_NAME`                     | The hobby/interest                          | `Rock Climbing`                      |
| `HOBBY_INTRO_PARAGRAPH`          | 1-2 sentences about the hobby               | `Rock climbing is more than a sport…`|
| `HOBBY_ACTIVITY_DESCRIPTION`     | What they do                                | `scaling routes at Red River Gorge`  |
| `BRIEF_ACHIEVEMENT_OR_DESCRIPTION`| Key achievement                             | `completed 50+ outdoor routes`       |
| `HOBBY_ASPECT_1` through `_4`   | Feature card titles                         | `Bouldering`, `Lead Climbing`…       |
| `DESCRIPTION_OF_ASPECT_1` – `_4`| Feature card descriptions                   | Describe each aspect                 |

### Step 3: Timeline Milestones

| Find This                  | Replace With                  | Example                        |
|----------------------------|-------------------------------|--------------------------------|
| `YEAR_OR_DATE_1` – `_4`   | Dates/years                   | `2018`, `Fall 2022`            |
| `MILESTONE_TITLE_1` – `_5`| Milestone names               | `First Outdoor Climb`          |
| `MILESTONE_DESCRIPTION_1` – `_5` | Milestone details        | `Discovered climbing at…`      |

### Step 4: Statistics

| Find This              | Replace With           | Example                     |
|------------------------|------------------------|-----------------------------|
| `STAT_NUMBER_1` – `_4` | Numeric values (integers only) | `150`, `12`, `500`, `95` |
| `STAT_LABEL_1` – `_4`  | Short labels           | `Routes Climbed`            |
| `STAT_DESCRIPTION_1` – `_4` | Brief context      | `Indoor and outdoor combined`|

> **Note:** Change `data-suffix` in the HTML to adjust what appears after each number (`+`, `%`, or leave empty).

### Step 5: Skills/Progress Bars

| Find This                | Replace With           | Example              |
|--------------------------|------------------------|----------------------|
| `SKILL_NAME_1` – `_4`   | Skill names            | `Top Rope`           |
| `SKILL_PERCENT_1` – `_4`| Proficiency (0-100)    | `90`                 |

> **Important:** Update both the display text AND the `data-percent` attribute value.

### Step 6: Gallery

| Find This                 | Replace With            | Example                    |
|---------------------------|-------------------------|----------------------------|
| `CAPTION_TITLE_1` – `_6` | Image titles            | `Red River Gorge`          |
| `CAPTION_DESC_1` – `_6`  | Image descriptions      | `Leading a 5.10a route`    |

To add actual images:
1. Create an `images/` folder
2. Replace each `<div class="gallery-placeholder">…</div>` block with:
   ```html
   <img src="images/your-photo.jpg" alt="Description">
   ```

### Step 7: Quote

| Find This       | Replace With                                           |
|-----------------|--------------------------------------------------------|
| `PERSON_QUOTE`  | A meaningful quote from the person about their passion |

### Step 8: Social/Contact Links

| Find This          | Replace With          | Example                              |
|--------------------|-----------------------|--------------------------------------|
| `LINKEDIN_URL`     | LinkedIn profile URL  | `https://linkedin.com/in/janesmith`  |
| `INSTAGRAM_URL`    | Instagram profile URL | `https://instagram.com/janeclimbs`   |
| `INSTAGRAM_HANDLE` | Instagram handle      | `janeclimbs`                         |
| `ADDITIONAL_LINK_URL` | Any other link     | `https://youtube.com/@janeclimbs`    |
| `PLATFORM_NAME`    | Platform name         | `YouTube`                            |
| `PLATFORM_HANDLE`  | Handle/username       | `@janeclimbs`                        |

### Step 9: Hero Photo & Portrait

**Hero background:**
- Option A (image): Uncomment the `<img>` tag in the hero section and set `src`
- Option B (gradient): The default animated blue gradient works great without any image

**Portrait photo:**
- Replace `<div class="photo-placeholder">…</div>` in the About section with:
  ```html
  <img src="images/portrait.jpg" alt="PERSON_NAME">
  ```

---

## Adding/Removing Sections

Each section is self-contained in the HTML. To:
- **Remove a section:** Delete everything between its opening `<!-- === SECTION NAME -->` comment and the closing `</section>` tag
- **Add hobby cards:** Copy an existing `.hobby-card` div and modify
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
