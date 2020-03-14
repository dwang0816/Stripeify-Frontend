<h1 align="center">Stripeify 🎵 🎧</h1>

<div align="center">
  A <code>React.js</code> web app for listening and voting on playlists created by users.
</div>

<div align="center">
  <sub>Built with ☕️ by
  <a href="https://github.com/janetmndz">Janet Mendez</a> and
  <a href="https://github.com/dwang0816"> Dennis Wang</a>
  </sub>
</div>

<br />

![](stripeify.gif)

## Features
This React.js app was designed for users to create and vote on playlists using preloaded songs from the Spotify API. Upon clicking on selected song, Users are able to listen and see an audio visualization of the song being played.

## Tech Stack
This web app makes use of the following:

**Backend**
- Ruby [2.6.1]
- Rails [~> 5.2.3] - MVC web framework used as an API
- PostgreSQL [>= 0.18, < 2.0] - Database
- Figaro - Rails gem for securing API Keys
- Active Model Serializers - Serializing API routes to JSON
- RSpotify - Ruby Spotify API Wrapper

**Front End**
- React.js
- React Router - Declarative Routing
- SCSS - CSS pre-processor
- Web Audio API - audio visualization

## Prerequisites
Before you begin, ensure you have installed the latest version of:

- [**Ruby**](https://www.ruby-lang.org/en/)
- [**Rails**](https://rubyonrails.org/)
- [**PostgreSQL**](https://www.postgresql.org/)
- [**Node.js and npm**](https://nodejs.org/en/)

This web app uses the following API keys from:
- [**Spotify**](https://developer.spotify.com/)

## Installing
*For information on Backend Installation please click here: [Stripeify Backend](https://github.com/janetmndz/stripeify-backend)*

**Frontend Installation:**

- Clone this repo to your local machine `git clone <this-repo-url>`
- `cd` to frontend directory
- Ensure your Backend API is running at `http://localhost:3000/api/v1/`
- run `npm install` to install all dependencies
- run `npm start` to start server
- When prompted, ensure Frontend is running at `http://localhost:3001`
