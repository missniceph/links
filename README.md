# Nice to Know — Links

The link-in-bio page for **Nice to Know** by [@missniceph](https://instagram.com/missniceph).

Once GitHub Pages is on, the page lives at **https://missniceph.github.io/links/**.

It is plain HTML, CSS and JavaScript: no frameworks, no tracking, no cookies, no outside fonts or scripts. It follows your phone's light or dark mode on its own.

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

**Keep the quote marks `" "` around words, and the comma `,` after the closing `}`.** Those are the two things that most often break the page. If the buttons disappear after an edit, check for a missing quote or comma.

### Add a link

Copy a whole block (from `{` to `},`), paste it where you want the new button to appear, and change the details:

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

To hide a link without deleting it, just empty the address: `url: "",`. The button won't show until you put an address back. That's how TikTok, Facebook and YouTube are set up right now.

### Reorder links

Buttons appear in the same order as in the file, top to bottom. To move one, cut its whole block (`{` to `},`) and paste it above or below another block.

### Turn on TikTok, Facebook or YouTube

Find the block and fill in the address, for example:

```js
url: "https://www.tiktok.com/@missniceph",
```

### Mark a link as new

Change `isNew: false,` to `isNew: true,`. Change it back when it's no longer new.

---

## Change your name, tagline or photo

These are at the top of `links.js`, in the `SITE` section.

- **Tagline:** three ready-made options are written in the comment just above `tagline:`. Copy the one you like between the quote marks.
- **Photo:** upload a square photo into the `images` folder (on GitHub: open the folder → **Add file** → **Upload files**). Name it `profile.jpg`, then set:

  ```js
  photo: "images/profile.jpg",
  ```

  Keep it small (about 400 × 400 pixels) so the page stays fast. Until you add one, a warm "N" circle shows instead.

---

## Turn on GitHub Pages (one time only)

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Pick the **`main`** branch and the **`/ (root)`** folder, then **Save**.
4. After a minute or two, your page is live at `https://missniceph.github.io/links/`.

Put that address in your Instagram, TikTok, Facebook and YouTube bios.

---

## What's in this folder

| File | What it is |
|------|------------|
| `links.js` | **Your settings and links. Edit this one.** |
| `index.html` | The page itself. |
| `styles.css` | Colors, fonts and layout, for both light and dark mode. |
| `app.js` | Turns `links.js` into buttons. No need to touch it. |
| `favicon.svg` | The little "N" icon in the browser tab. |
| `images/` | Where your profile photo goes. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |
