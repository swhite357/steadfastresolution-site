STEADFAST RESOLUTION LLC — WEBSITE
===================================

WHAT THIS IS
  A static website — plain HTML, CSS, and JavaScript. No build step,
  no database, nothing to install. Upload the whole "website" folder's
  contents to your host and steadfastresolution.com is live.

FILES
  index.html         The page itself (all sections)
  css/styles.css     All styling and colors
  js/main.js         Page behavior (gallery rendering, mobile menu)
  gallery-data.js    <-- THE FILE YOU EDIT to add job photos
  gallery/           Photo files for the gallery
  images/            Logo, favicon, illustration

ADDING A JOB PHOTO (the only routine edit)
  1. Copy the photo into the  gallery/  folder.
  2. Open  gallery-data.js  in any text editor (Notepad works) and add
     one entry to the list — the instructions are at the top of that file.
  3. Re-upload  gallery-data.js  and the new photo. Done.
  The three placeholder entries can be deleted as real photos come in.

UPDATING CONTACT INFO OR PRICES
  Open index.html and search for the phone number or price — each
  appears in the Contact section and the footer (phone/email), or the
  pricing cards (prices). Edit the text, save, re-upload index.html.

NOTES
  - There is no contact form on purpose: a form on a static site needs a
    separate service behind it (e.g. Formspree). The call/email buttons
    work with no setup. Ask if you want a form added later.
  - The gallery shows nothing broken if a listed photo is missing —
    that tile is simply skipped.
