# BendJS Website

Built with NextJS and open for the community to hack on!

## How to use this repo

- If you would like to make any changes to the main site, please feel free to fork and create a new branch with your changes, make a PR and just let us know how/why/where, etc.

## Getting setup

You'll have to run some command line stuff.

```
yarn install
```

To spin up the local development server:

```
yarn run dev
```

## Deployment

We are buying bendjs.com

The `master` branch will deploy on Netlify to that.

## Ideas

We talked about:

- Profile pages!
  - Maybe /people/:person
  - Maybe a people.json file that lists us all. Names, links, avatars, whatever.
- Individual meetup pages
  - Maybe /meetup/:meetup
  - If they could be somewhat permenant, that'd be nice.
  - A cloud function that would create a meetup.jpg (Puppeteer!) that would be neat. Netlify has cloud functions.
- Style the thing
  - David was adding in Reactstrap

That routing stuff seems like it could be handled with https://github.com/fridays/next-routes but whatevs.
