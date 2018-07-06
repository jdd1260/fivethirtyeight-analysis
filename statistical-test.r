results = head(read.csv("results.csv"), -1) #throw out July's data

wordCountModel = lm(month.index ~ word.count, results)

wordCountResults = summary(wordCountModel)

print(wordCountResults$coefficients)

figureModel = lm(month.index ~ figure.count, results)

figureCountResults = summary(figureModel)

print(figureCountResults$coefficients)