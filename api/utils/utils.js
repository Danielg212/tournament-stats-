export const calculateSuccessRate = (tournaments) => {
    const numberOfUsers = tournaments.length;
    let correctQuestions = tournaments.reduce((acc, current) => {
        acc.push(...current.correctQuestions);
        return acc;
    }, []);
    const NUM_OF_QUESTIONS = Math.max(...correctQuestions)
    const questionsRate = Array.from({length: NUM_OF_QUESTIONS}).fill(0);
    correctQuestions.forEach((correctAnswerNumber) => {
        questionsRate[correctAnswerNumber - 1]++;
    });
    return questionsRate.map((rate, index) => {
        const rateValue = (rate / numberOfUsers) * 100;
        return {question: index + 1, successRate: Number(rateValue).toFixed(2)};
    });
}

export const toLetterScore = (percent) => {
    if (percent >= 90) {
        return 'A';
    }
    if (percent >= 75) {
        return 'B';
    }
    if (percent >= 60) {
        return 'C';
    }
    return 'F';
}
