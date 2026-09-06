# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL:(https://github.com/Noel-rego/Time-Tracking-Dashboard/blob/main/README.md)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (Fetch API, DOM manipulation)
- JSON for data storage

### What I learned

This project was a great way to practice fetching and rendering local JSON data dynamically instead of hardcoding values into the markup.

I used the Fetch API to load the activity data from `data.json` and render it onto the page based on the selected timeframe:

```js
const loadData = async () => {
    const response = await fetch("data.json");
    readData = await response.json();
    render("daily");
}
```

To connect each activity card to its corresponding data, I matched the HTML element IDs to the `title` field in the JSON by converting it to lowercase and stripping spaces:

```js
const render = (timeframe) => {
    readData.forEach((activity) => {
        const boxId = activity.title.toLowerCase().replace(" ", "");
        const short = activity.timeframes[timeframe];
        const hoursEl = document.querySelector(`#${boxId}hrs`);
        const lastHoursEl = document.querySelector(`#last${boxId}hrs`);

        if (hoursEl) hoursEl.innerText = `${short.current} hrs`;
        if (lastHoursEl) lastHoursEl.innerText = `${short.previous} hrs`;
    });
};
```

I also added click event listeners on the Daily/Weekly/Monthly buttons so the dashboard re-renders with the correct timeframe when clicked:

```js
timeslist.forEach((time) => {
    time.addEventListener("click", () => {
        render(time.id);
    });
});
```

On the CSS side, I practiced writing a mobile-first responsive layout, switching the main dashboard from a row-based flex layout on desktop to a stacked column layout under a `768px` breakpoint, and repositioning elements like the ellipsis icon and category icon to match the mobile design.

### Continued development

Some areas I'd like to keep improving in future projects:

- Reduce hardcoded ID matching between HTML, CSS, and JS (e.g. `#workhrs`, `#lastworkhrs`) in favor of a more scalable approach like `data-*` attributes, so adding new activity categories doesn't require touching multiple files.
- Add an active/selected state to the Daily/Weekly/Monthly buttons so the user can see which timeframe is currently selected.
- Refactor repeated card HTML into a JS-generated template instead of duplicating the same markup structure for each activity box.
- Tidy up leftover class name inconsistencies (e.g. `.balance` being reused for both the timeframe switcher and the hours display).

## Author

- Frontend Mentor - [@Noel-rego](https://www.frontendmentor.io/profile/Noel-rego)
