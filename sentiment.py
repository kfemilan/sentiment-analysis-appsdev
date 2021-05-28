# import nltk
from nltk.stem.snowball import SnowballStemmer
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import re

# nltk.download('vader_lexicon') # Download this if use for first time

def cleanText(text):
    text = text.lower()
    cleanedText = re.sub("https://\S+|http://\S+|[^a-zA-Z0-9 ]+", '', text)

    ss = SnowballStemmer("english")

    newText = ''
    for word in cleanedText.split():
        newText = newText + ss.stem(word) + ' '
        
    return newText

def getScore(text):

    cleanedText = cleanText(text)
    print(cleanedText)
    analyzer = SentimentIntensityAnalyzer()

    score = analyzer.polarity_scores(cleanedText)

    return score

# if __name__ == '__main__':
#     text = "that might have been the worst performance"
#     sentimentScore = getScore(text)
#     print(sentimentScore)