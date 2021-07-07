// const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

// btn.addEventListener("click", function () {
//     if (!btn.classList.contains("slide")) {
//       btn.classList.add("slide");
//       video.pause();
//     } else {
//       btn.classList.remove("slide");
//       video.play();
//     }
//   });

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    preloader.classList.add("hide-preloader");
    displayVideo();
    displayQuote(); 
})

const playPause = document.querySelector('.btn-play-pause');

playPause.addEventListener('click', function() {
    if (playPause.innerHTML === 'Pause Video') {
        video.pause();
        playPause.innerHTML = 'Resume Video';
    } else {
        video.play();
        playPause.innerHTML = 'Pause Video';
    }
});

const shuffle = document.querySelector('.btn-shuffle');

shuffle.addEventListener('click', function() {
    displayVideo();
    displayQuote();
});

function displayQuote() {
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function displayVideo() {
    document.getElementById("random-video").src = "./videos/" + Math.floor(Math.random() * 2) + ".mp4";
}

const quotes = [
    "I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.",
    "When we have respect for ourselves and others, we gravitate towards connections that encourage that.",
    "Anger is the ultimate destroyer of your own peace of mind.",
    "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot.",
    "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
    "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
    "No matter what you achieve, what you want to aspire to be, or how famous and powerful you become, the most important thing is whether you are excited about each and every moment of your life because of your work and people around you.",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    "We do not remember days, we remember moments.",
    "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
    "We must be willing to let go of the life we have planned, so as to have the life that is waiting for us.",
    "Life is a mirror and will reflect back to the thinker what he thinks into it.",
    "You're only here for a short visit. Don't hurry, don't worry. And be sure to smell the flowers along the way.",
    "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
    "Nothing in life is to be feared, it is only to be understood. Nows the time to understand more, so that we may fear less.",
    "Life is a song - sing it. Life is a game play it. Life is a challenge meet it. Life is a dream - realize t. Life is a sacrifice offer it. Life is love - enjoy it.",
    "The purpose of life is of a life of purpose.",
    "A life is not important except in the impact it has on other lives.",
    "I have found that if you love life, life will love you back.",
    "If you live long enough, you'll make mistakes. But f you learn from them, you'll be a better person. It's how you handle adversity, not how it affects you. The main S thing is never quit, never quit, never quit.",
    "Every man dies. Not every man really lives.",
    "Good, better, best. Never let rest. Til your good is better and your better is best.",
    "When something is important enough, you do it even if the odds are not in your favor.",
    "I don't believe you have to be better than everybody else. I believe you have to be better than you ever thought you could be.",
    "Knowing is not enough; we must apply. Willing is not enough; we must do.",
    "If you can dream it, you can do it.",
    "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
    "I can, therefore I am.",
    "You just can't beat the person who never gives up.",
    "Expect problems and eat them for breakfast.",
    "You are not here merely to make: living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.",
    "If you don't know where you are going, any road will get you there.",
    "The only true wisdom is in knowing you know nothing.",
    "In every walk with nature one receives far more than he seeks.",
    "Knowledge is of no value unless you put it into practice.",
    "We cannot become what we need to be by remaining what we are.",
    "With pride, there are many curses. With humility, there come many blessings.",
    "It's not what you look at that matters, it's what you see.",
    "Experience is not what happens to you; it's what you do with what happens to you.",
    "My advice to you is not to inquire why or whither, but just enjoy your ice cream while it's on your plate.",
    "We can never obtain peace in the outer world until we make peace with ourselves.",
    "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.",
    "Stay hungry, stay foolish.",
    "I want to put a ding in the universe.",
    "And no, we don't know where it will lead. We just know there's something much bigger than any of us here.",
    "If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on."
];