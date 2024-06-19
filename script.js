// script.js

const philosophers = {
    socrates: {
        name: 'Socrates',
        summary: 'Classical Greek philosopher credited as one of the founders of Western philosophy. He is an enigmatic figure known for his method of questioning and dialogue, known as the Socratic method.',
        works: ['Apology', 'Crito', 'Phaedo'],
        quotes: ['An unexamined life is not worth living.', 'I know that I know nothing.']
    },
    plato: {
        name: 'Plato',
        summary: 'A student of Socrates and a teacher of Aristotle, Plato founded the Academy in Athens. He wrote philosophical dialogues and is known for his works on ethics, politics, and metaphysics.',
        works: ['The Republic', 'Phaedrus', 'Symposium'],
        quotes: ['Wise men speak because they have something to say; fools because they have to say something.', 'The greatest wealth is to live content with little.']
    },
    nietzsche: {
        name: 'Friedrich Nietzsche',
        summary: 'German philosopher known for his critical texts on religion, morality, and culture. He introduced concepts such as the will to power, the eternal return, and the Übermensch.',
        works: ['Thus Spoke Zarathustra', 'Beyond Good and Evil', 'The Antichrist'],
        quotes: ['That which does not kill us makes us stronger.', 'He who has a why to live can bear almost any how.']
    },
    schopenhauer: {
        name: 'Arthur Schopenhauer',
        summary: 'German philosopher best known for his book, "The World as Will and Representation". His work influenced existentialism and psychoanalysis.',
        works: ['The World as Will and Representation', 'On the Fourfold Root of the Principle of Sufficient Reason', 'Parerga and Paralipomena'],
        quotes: ['The world is my representation.', 'Compassion is the basis of morality.']
    },
    sartre: {
        name: 'Jean-Paul Sartre',
        summary: 'French existentialist philosopher, playwright, novelist, and literary critic. He is known for his works on existentialism and phenomenology.',
        works: ['Being and Nothingness', 'No Exit', 'Nausea'],
        quotes: ['Existence precedes essence.', 'Man is condemned to be free.']
    }
};

function showDetails(philosopher, element) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('expanded'));
    element.classList.add('expanded');
}

function hideDetails(event) {
    event.stopPropagation();
    const element = event.target.closest('.card');
    element.classList.remove('expanded');
}
