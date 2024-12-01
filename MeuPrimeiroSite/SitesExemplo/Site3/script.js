    class Movie {
        constructor(title, poster, description) {
            this.title = title;
            this.poster = poster;
            this.description = description;
        }
    }

    class MovieDisplay {
        constructor(containerId) {
            this.container = document.getElementById(containerId);
            this.movies = [];
        }

        addMovie(movie) {
            this.movies.push(movie);
        }

        render() {
            this.container.innerHTML = '';
            this.movies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');

                const poster = document.createElement('img');
                poster.src = movie.poster;
                poster.alt = movie.title;
                poster.classList.add('movie-poster');

                const details = document.createElement('div');
                details.classList.add('movie-details');

                const title = document.createElement('h3');
                title.innerText = movie.title;

                const description = document.createElement('p');
                description.innerText = movie.description;

                details.appendChild(title);
                details.appendChild(description);
                movieCard.appendChild(poster);
                movieCard.appendChild(details);
                this.container.appendChild(movieCard);
            });
        }
    }

    // Inicializando e exibindo filmes na tela
    document.addEventListener('DOMContentLoaded', () => {
        const movieDisplay = new MovieDisplay('movie-container');

        // Adicionando alguns filmes como exemplo (imagens atualizadas)
        movieDisplay.addMovie(new Movie('Spider-Man: No Way Home', 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg', 'Spider-Man faces new challenges with multiverse villains.'));
        movieDisplay.addMovie(new Movie('Avengers: Endgame', 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg', 'The epic conclusion of the Avengers saga.'));
        movieDisplay.addMovie(new Movie('Interstellar', 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg', 'Exploring space and time beyond imagination.'));
        movieDisplay.addMovie(new Movie('The Dark Knight', 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', 'Batman faces the Joker in this thrilling sequel.'));

        // Renderizar filmes na página
        movieDisplay.render();
    });

