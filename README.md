# Axonide

**Your timeline, your terms. A modern, open-source social platform built for clarity and community.**

Axonide is a social media application built on the principle that your feed should be yours to control. In a web dominated by opaque algorithms, Axonide offers a return to a simple, chronological timeline of posts from the people you choose to follow.

This project is built with a modern, scalable, and developer-friendly technology stack, designed to be a welcoming place for open-source contributors.

## Core Features Planned For First Release

The initial version of Axonide is focused on a polished core experience:

  - **User Accounts & Profiles:** Secure user registration, login, and basic profiles.
  - **Content Creation:** Create text-based posts (up to 500 characters) and attach images.
  - **Chronological Timeline:** The core feature. See posts from people you follow in the order they were posted.
  - **Social Interactions:** Reply to, like, and repost content.
  - **Content Discovery:** Basic hashtag support for discovering new topics and posts.
  - **Essential Safety Tools:** Block users and report content to maintain a safe community environment.

## Tech Stack

Axonide is built with a modern, type-safe, and efficient technology stack, chosen to maximize both performance and developer productivity [1]:

  - **Framework:** [Svelte](https://kit.svelte.dev/)
  - **Language:** [TypeScript](https://www.typescriptlang.org/)
  - **Backend Runtime:** [Node.js](https://nodejs.org/)
  - **Database:** [Postgres](https://www.postgresql.org/)
  - **ORM:** [Prisma](https://www.prisma.io/)
  - **Containerization:** [Docker](https://www.docker.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your local development machine:

  - [Node.js](https://nodejs.org/en/) (v18+ recommended)
  - [npm](https://www.npmjs.com/) (comes with Node.js)
  - [Docker](https://www.docker.com/products/docker-desktop/) and Docker Compose

### Installation

1.  **Clone the repository:** 
    ```sh
    git clone https://github.com/CrimsonDynamic/Axonide
    cd axonide
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project by copying the example file:

    ```sh
    cp env.example.env
    ```

    Open the `.env` file and ensure the `DATABASE_URL` is set correctly for the Dockerized PostgreSQL instance. The default should work out of the box.

4.  **Start the database:**
    Run the following command to start the PostgreSQL database container in the background:

    ```sh
    docker-compose up -d
    ```

5.  **Run database migrations:**
    Apply the database schema to the newly created database:

    ```sh
    npx prisma migrate dev
    ```

6.  **Start the development server:**

    ```sh
    npm run dev
    ```

Your application should now be running at `http://localhost:5173`.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

We welcome contributions of all kinds, from improving documentation and reporting bugs to submitting new features. Please read our `CONTRIBUTING.md` for details on our code of conduct and the process for submitting pull requests to us.

Don't know where to start? Check out the `good first issue` label on our issues page!

## License

Distributed under the GNU AGPLv3 License. See `LICENSE` for more information. choice was made to ensure that Axonide and any of its derivatives will always remain free and open-source for the community.
