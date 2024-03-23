function checkEmail() {
    let emailInput = document.getElementById('emailInput');
    let resultMessage = document.getElementById('resultMessage');

    // Basic email validation using a regular expression
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValidEmail = emailRegex.test(emailInput.value);

    if (isValidEmail) {
      resultMessage.style.color = '#72ff6b';
      resultMessage.innerHTML = 'Email is valid!';

      // If the email is valid, redirect to the main page
      window.location.href = 'main.html';
    } else {
      resultMessage.style.color = '#ff1b1b';
      resultMessage.style.fontFamily = 'Inter';
      resultMessage.innerHTML = 'Please enter a valid email address.';
    }
  }

       // Sample movie data in JSON format
       const moviesData = [
        { name: "Attack on Titan", rating: 9.0 },
        { name: "Fullmetal Alchemist: Brotherhood", rating: 9.1 },
        { name: "Death Note", rating: 8.6 },
        { name: "Naruto", rating: 7.9 },
        { name: "One Piece", rating: 8.7 },
        { name: "Dragon Ball Z", rating: 8.7 },
        { name: "My Hero Academia", rating: 8.5 },
        { name: "Demon Slayer: Kimetsu no Yaiba", rating: 8.8 },
        { name: "Cowboy Bebop", rating: 8.9 },
        { name: "Neon Genesis Evangelion", rating: 8.8 },
        { name: "Sword Art Online", rating: 7.6 },
        { name: "One Punch Man", rating: 8.5 },
        { name: "Hunter x Hunter", rating: 9.0 },
        { name: "Bleach", rating: 8.3 },
        { name: "Fairy Tail", rating: 7.6 },
        { name: "Tokyo Ghoul", rating: 7.7 },
        { name: "Steins;Gate", rating: 9.1 },
        { name: "Code Geass", rating: 8.9 },
        { name: "JoJo's Bizarre Adventure", rating: 8.4 },
        { name: "Your Lie in April", rating: 8.7 },
        { name: "Violet Evergarden", rating: 8.8 },
        { name: "Gurren Lagann", rating: 8.5 },
        { name: "Mob Psycho 100", rating: 8.7 },
        { name: "Haikyuu!!", rating: 8.8 },
        { name: "Psycho-Pass", rating: 8.6 },
        { name: "The Promised Neverland", rating: 8.5 },
        { name: "Re:Zero - Starting Life in Another World", rating: 8.6 },
        { name: "Attack on Titan: Junior High", rating: 7.3 },
        { name: "Naruto Shippuden", rating: 8.6 },
        { name: "Tokyo Revengers", rating: 8.3 },
        { name: "Black Clover", rating: 7.4 },
        { name: "Jujutsu Kaisen", rating: 8.9 },
        { name: "The Seven Deadly Sins", rating: 7.7 },
        { name: "Dragon Ball Super", rating: 7.6 },
        { name: "Overlord", rating: 8.1 },
        { name: "Assassination Classroom", rating: 8.5 },
        { name: "Parasyte -the maxim-", rating: 8.6 },
        { name: "Anohana: The Flower We Saw That Day", rating: 8.4 },
        { name: "Toradora!", rating: 8.6 },
        { name: "Death Parade", rating: 8.4 },
        { name: "Clannad", rating: 8.3 },
        { name: "Beastars", rating: 8.1 },
        { name: "Cells at Work!", rating: 7.8 },
        { name: "K-On!", rating: 8.2 },
        { name: "Durarara!!", rating: 8.0 },
        { name: "Dr. Stone", rating: 8.2 },
        { name: "That Time I Got Reincarnated as a Slime", rating: 8.3 },
        { name: "Inuyasha", rating: 7.9 },
        { name: "Kaguya-sama: Love is War", rating: 8.6 },
        { name: "Erased", rating: 8.4 },
        { name: "A Silent Voice", rating: 9.0 },
        { name: "Spirited Away", rating: 8.6 },
        { name: "Princess Mononoke", rating: 8.4 },
        { name: "Your Name", rating: 8.7 },
        { name: "Howl's Moving Castle", rating: 8.5 },
        { name: "Grave of the Fireflies", rating: 8.8 },
        { name: "Nausicaä of the Valley of the Wind", rating: 8.3 },
        { name: "Weathering with You", rating: 8.6 },
        { name: "Ponyo", rating: 8.0 },
        { name: "Wolf Children", rating: 8.4 },
        { name: "The Tale of the Princess Kaguya", rating: 8.2 },
        { name: "The Girl Who Leapt Through Time", rating: 8.1 },
        { name: "Summer Wars", rating: 8.0 },
        { name: "Paprika", rating: 8.3 },
        { name: "Millennium Actress", rating: 8.5 },
        { name: "Tokyo Godfathers", rating: 8.0 },
        { name: "Perfect Blue", rating: 8.4 },
        { name: "Akira", rating: 8.7 },
        { name: "Ghost in the Shell", rating: 8.9 },
        { name: "Cowboy Bebop: The Movie", rating: 8.6 },
        { name: "Ninja Scroll", rating: 8.2 },
        { name: "Grave of the Fireflies", rating: 8.8 },
        { name: "Princess Mononoke", rating: 8.4 },
        { name: "My Neighbor Totoro", rating: 8.7 },
        { name: "Castle in the Sky", rating: 8.5 },
        { name: "Kiki's Delivery Service", rating: 8.3 },
        { name: "Whisper of the Heart", rating: 8.0 },
        { name: "Only Yesterday", rating: 8.1 },
        { name: "Porco Rosso", rating: 8.2 },
        { name: "The Wind Rises", rating: 8.4 }
    ];
    
    
            // Function to generate HTML for each movie
            function generateMovieHTML(movie) {
                return `
    
                    <div class="black-box-0">
                    <div class="poster-0">
                        <img class="poster-0-img" src="${movie.image}">
                    </div>
                    <div class="info-container-0">
                    <div class="info-container">
                        <div class="rating"><i class="fa-solid fa-star" style="color: #FFD43B;"></i> <span class="info-01">${movie.rating}</span></div>
                        <div class="title-anime-black-box">${movie.name}</div>
                    </div>
                    <div class="btn-black-box">
                        <button class="btn-black-box-0">Watch Now</button>
                    </div>
                    <div class="de"><span class="-fds"><i class="fa-solid fa-play" style="color: #ffffff;"></i>  Trailer</span><i class="fa-regular fa-circle-info"></i></div>
                </div>
                </div>
                `;
            }
    
            // Function to display movies in the container
            function displayMovies() {
                const movieContainer = document.getElementById('movieContainer');
                let moviesHTML = '';
                moviesData.forEach(movie => {
                    moviesHTML += generateMovieHTML(movie);
                });
                movieContainer.innerHTML = moviesHTML;
            }
    
            // Call the function to display movies
            displayMovies();
    
    