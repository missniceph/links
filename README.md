# Nice to Know — Links

The link-in-bio page for **Nice to Know** by [@missniceph](https://instagram.com/missniceph).

Live at **https://missniceph.github.io/links/**.

It is plain HTML, CSS and JavaScript: no frameworks, no tracking, no cookies, no outside fonts or scripts. The whole page is about 25 KB, so it loads quickly even on slow mobile data. It follows your phone's light or dark mode on its own.

---

## The only file you need to edit: `links.js`

Everything you'll want to change is in **`links.js`**. You can edit it right on GitHub:

1. Open `links.js` in the repository.
2. Click the **pencil icon** (Edit this file).
3. Make your change.
4. Click **Commit changes**.
5. Wait a minute or two, then refresh your page.

Each link looks like this:

```js
{
  label: "Instagram",
  url: "https://instagram.com/missniceph",
  icon: "instagram",
  isNew: false,
},
```

| Line | What it does |
|------|--------------|
| `label` | The words on the button. |
| `url` | Where the button goes. Leave it as `""` to hide the button for now. |
| `icon` | One of: `instagram`, `tiktok`, `facebook`, `youtube`, `website`, `guide`, `link`. |
| `isNew` | `true` shows a **NEW** badge. `false` hides it. |

**Keep the quote marks `" "` around words, and the comma `,` after the closing `}`.** Those are the two things that most often break the page. If your buttons suddenly show without icons after an edit, the page is using its backup list: check for a missing quote or comma.

### Add a link

Copy a whole block (from `{` to `},`), paste it where you want the new button to appear, and change the details. For example (this is a made-up address):

```js
{
  label: "BIR Registration Explainer",
  url: "https://missniceph.github.io/bir-registration",
  icon: "guide",
  isNew: true,
},
```

### Remove a link

Delete its whole block, from `{` down to and including `},`.

To hide a link without deleting it, just empty the address: `url: "",`. The button won't show until you put an address back.

### Reorder links

Buttons appear in the same order as in the file, top to bottom. To move one, cut its whole block (`{` to `},`) and paste it above or below another block.

### Mark a link as new

Change `isNew: false,` to `isNew: true,`. Change it back when it's no longer new.

---

## Change your name, tagline or photo

These are at the top of `links.js`, in the `SITE` section.

- **Tagline:** three ready-made options (two English, one Taglish) are written in the comment just above `tagline:`. Copy the one you like between the quote marks.
- **Photo:** upload a square photo into the `images` folder (on GitHub: open the folder → **Add file** → **Upload files**). Name it `profile.jpg`, then set:

  ```js
  photo: "images/profile.jpg",
  ```

  Keep it small (about 400 × 400 pixels) so the page stays fast. If the photo is missing, a warm "N" circle shows instead.

---

## What's here and how to update it

| File | What it is | When to touch it |
|------|------------|------------------|
| `links.js` | Your name, tagline, photo and buttons. | **Any time you change a link.** |
| `images/profile.jpg` | Your profile photo (square, 336 × 336). | When you get a new photo. Upload one with the same name to replace it. |
| `index.html` | The page itself, plus a **backup list** of your links. | Only if your main links change for good (see below). |
| `og-image.png` | The preview picture people see when your link is shared on Messenger, Facebook, Viber and so on. | When your tagline changes. |
| `og-image.svg` | The editable source of that preview picture. | Edit the words in it, then export it again as a 1200 × 630 PNG named `og-image.png`. |
| `favicon.svg`, `apple-touch-icon.png` | The "N" icon in browser tabs and on phone home screens. | Rarely. |
| `styles.css` | Colours and layout for light and dark mode. | Only for design changes. |
| `app.js` | Turns `links.js` into buttons. | Never needed. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. | Never. |

**About the backup list:** if `links.js` ever has a typo (like a missing quote mark), the page doesn't go blank. It shows the backup links written in `index.html` instead. The same list shows for anyone who has JavaScript turned off. If you permanently add or remove a main link, update that list too. It's the block that starts with `<noscript>`.

**Checking a change:** after you commit, wait a minute or two, then open the page and refresh. If you see plain buttons without icons, there's a typo in `links.js`. Look for a missing `"` or `,`.

**Seeing the share preview update:** Facebook and Messenger remember old previews. After changing `og-image.png`, paste your link into https://developers.facebook.com/tools/debug/ and click **Scrape Again**.

---

## GitHub Pages

GitHub Pages is already turned on for this repository. The page is at **https://missniceph.github.io/links/**.

If it ever stops working, go to **Settings → Pages** and make sure **Source** is **Deploy from a branch**, using **`main`** and **`/ (root)`**.
