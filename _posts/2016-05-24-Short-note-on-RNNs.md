---
layout: post
title: Unreasonable RNNs
---

Basic points for consideration in RNNs:

- At the core, RNNs have a deceptively simple API: They accept an input vector x and give you an output vector y. However, crucially this output vector’s contents are influenced not only by the input you just fed in, but also on the entire history of inputs you’ve fed in in the past.
- RNNs combine the input vector with their state vector with a fixed (but learned) function to produce a new state vector. This can in programming terms be interpreted as running a fixed program with certain inputs and some internal variables. 
- If training vanilla neural nets is optimization over functions, training recurrent nets is optimization over programs.
- ht=tanh(Whhht−1+Wxhxt)ht=tanh⁡(Whhht−1+Wxhxt) 
- Going deep. RNNs are neural networks and everything works monotonically better (if done right) if you put on your deep learning hat and start stacking models up like pancakes. For instance, we can form a 2-layer recurrent network as follows:
y1 = rnn1.step(x)
y = rnn2.step(y1)
In other words we have two separate RNNs: One RNN is receiving the input vectors and the second RNN is receiving the output of the first RNN as its input. Except neither of these RNNs know or care - it’s all just vectors coming in and going out, and some gradients flowing through each module during backpropagation.
