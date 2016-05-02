In this article we discuss basic differences between Generative and Discriminative models. This article is still in its draft mode and should be taken as such.

**Why is it important to understand the difference between Generative and Discriminative models?**
While analysing the various classifiers that are suitable for operation on your dataset, you will come across various classifiers including but not limited to SVMs, Naive Bayes, Logistic Regressor, etc., but it becomes imperative to understand which classifier would work best for your particular dataset and what you expect to achieve from this analysis of your data. Most people tend to rely on hit and trial form, but with growing number of classifiers, it is becoming impossible to rely on this naive method. Thus, based on what you wish to achieve from your analysis, classifiers are broadly divided into two groups:
1. Discriminative classifiers
2. Generative classfiers

The **fundamental difference** between these models is:
1. Disriminative models learn the boundaries between classes;
2. Generative models model the distribution of individual classes.

Discriminative models:

1. SVMs and decision trees are discriminative models because they learn explicit boundaties between classes. SVM is a maximal margin classifier, meaning that it learns a decision boundary that maximizes the distance between samples of the two classes, given a kernel. The distance between a sample and the learned decision boundary can be used to make the SVM a "soft" classifier. DTs learn the decision boundary by recursively partitioning the space in a manner that maximizes the information gain (or another criterion).
2. Discriminative models do not generally function for outlier detection, though generative models generally do. What's best for a specific application should, of course, be evaluated based on the application.
3. Discriminative models do not offer clear representations of relations between features and classes in the dataset. Instead of using resources to fully model each class, they focus on richly modeling the boundary between classes. Given the same amount of capacity (say, bits in a computer program executing the model), a discriminative model thus may yield more complex representations of this boundary than a generative model.
4. Discriminative algorithms allow you to classify points, without providing a model of how the points are actually generated. So these could be either:

a. probabilistic algorithms try to learn P(Y|X) (e.g., logistic regression) or;
b. non-probabilistic algorithms that try to learn the mappings directly from the points to the classes (e.g., perceptron and SVMs simply give you a separating hyperplane, but no model of generating new points).

Another way of thinking about this is that generative algorithms make some kind of structure assumptions on your model, but discriminative algorithms make fewer assumptions. For example, Naive Bayes assumes conditional independence of your features, while logistic regression (the discriminative "counterpart" of Naive Bayes) does not.

5. In general, discriminative models are more powerful than the generative models and hence work better for larger datasets than smaller datasets. That said, they might tend to overfit on smaller datasets.


Generative models:

I think of generative algorithms as providing a model of how the data is actually generated (I think of them as giving you a model of both P(X|Y)P(X|Y) and P(Y)P(Y), rather than of P(X,Y)P(X,Y), though I guess it's equivalent), and discriminative algorithms as simply providing classification splits (and not necessarily in a probabilistic manner).

Compare, for instance, Gaussian mixture models and k-mean clustering. In the former, we have a nice probabilistic model for how points are generated (pick a component with some probability, and then emit a point by sampling from the component's Gaussian distribution), but there's nothing we can really say about the latter.

Note that generative algorithms have discriminative properties, since you can get P(Y|X)P(Y|X) once you have P(X|Y)P(X|Y) and P(Y)P(Y) (by Bayes' Theorem), though discriminative algorithms don't really have generative properties.

1. Generative algorithms make some kind of structure assumptions on your model (For example, Naive Bayes assumes conditional independence of your features).Generative models are typically specified as probabilistic graphical models, which offer rich representations of the independence relations in the dataset.

2. Whenever you try to force a classifier to become generative (e.g. arguing that a logistic regressor can be obtained in terms of P(Y|X) and P(x) in place of P(Y,X), and hence can be a generative classifier) you are not using the full generative model to make classification decisions. 

Note that you can make a discriminative classifier generative only because you're adding something to logistic regression that's not already there. That is, when you're performing a Naive Bayes classification, you're directly computing P(Y|X)∝P(X|Y)P(Y) (the terms on the right, P(X|Y)P(X|Y) and P(Y)P(Y), are what allow you to generate a new document); but when you're computing P(Y|X) in logistic regression, you're not computing these two things, you're just applying a logistic function to a dot product.

3. Generative models often outperform discriminative models on smaller datasets because their generative assumptions place some structure on your model that prevent overfitting. For example, let's consider Naive Bayes vs. Logistic Regression. The Naive Bayes assumption is of course rarely satisfied, so logistic regression will tend to outperform Naive Bayes as your dataset grows (since it can capture dependencies that Naive Bayes can't).

4. There are a number of advantages generative models may offer, depending on the application. Say you are dealing with non-stationary distributions, where the online test data may be generated by different underlying distributions than the training data. It is typically more straightforward to detect distribution changes and update a generative model accordingly than do this for a decision boundary in an SVM, especially if the online updates need to be unsupervised.
