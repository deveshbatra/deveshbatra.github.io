---
layout: post
title: Unreasonable RNNs
---

- At the core, RNNs have a deceptively simple API: They accept an input vector x and give you an output vector y. However, crucially this output vector’s contents are influenced not only by the input you just fed in, but also on the entire history of inputs you’ve fed in in the past.
- RNNs combine the input vector with their state vector with a fixed (but learned) function to produce a new state vector. This can in programming terms be interpreted as running a fixed program with certain inputs and some internal variables. 
- If training vanilla neural nets is optimization over functions, training recurrent nets is optimization over programs.
- ht=tanh(Whhht−1+Wxhxt)ht=tanh⁡(Whhht−1+Wxhxt) 
