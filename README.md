# Yoo Dongoh Portfolio

Editable static portfolio website built from the Notion portfolio content.

## How to run

Open `index.html` directly in a browser, or use a simple local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## What was changed

- Blog section removed.
- Project cards now open detailed project modals.
- Profile card shows only education under the photo.
- Intro text is written in English.
- Contact buttons open Gmail compose instead of `mailto:`.
- Strange Notion attachment links were removed from the visible site text.

## How to edit text

Most content is in:

```text
data/content.js
```

Edit `profile`, `journey`, or `projects` there.

## How to add a project image

1. Put your image here:

```text
assets/images/projects/
```

2. Update the project image path in `data/content.js`:

```js
image: "assets/images/projects/f1tenth.jpg"
```

## How to add a project video

1. Put your video here:

```text
assets/videos/
```

2. Add a `video` field to the project in `data/content.js`:

```js
video: "assets/videos/f1tenth-demo.mp4",
image: "assets/images/projects/f1tenth-thumbnail.jpg"
```

When `video` exists, the project card/modal will show the video automatically.

## How to change the Gmail contact button

Edit this field in `data/content.js`:

```js
gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=youdongoh67@gmail.com&su=Portfolio%20Contact"
```

## GitHub Pages deploy

Upload the folder contents to a GitHub repository and enable GitHub Pages from repository settings.
