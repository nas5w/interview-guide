# Behavioral Interviews

## What is a behavioral interview?

Behavioral interviews gauge your soft and interpersonal skills rather than your technical accumen. Pretty much every company has a behavioral interview component. This is for some very good reasons:

- No one wants to work with a jerk
- Engineers often have to handle ambiguity
- Companies want engineers that perform well under stress

It has become increasing popular for companies to try to assess your _emotional intelligence_ and _empathy_ as well. They want to know that you can see things from other people's points of view and that you can negotiate tricky interpresonal relationships.

**Resource alert**

One of my favorite resources for behavioral interviews is [Jeff Sipe's YouTube channel](https://www.youtube.com/c/JeffHSipe). He's a former Google recruiter and does a great job talking about the kind of empathy and interpersonal skills tech companies look for. I highly recommend you watch some of his videos.

## Types of questions

There are two main types of behavioral interview questions I have come across:

- **Past experience.** These questions often start out with the phrase "Tell me about a time..." The interviewer expects you to provide an example of something that actually happened in your work (or academic) history.
- **Hypotheticals.** These questions are scenarios presented by the interviewer asking how you'd handle a made up situation. The interviewer wants you to _not_ provide an example from the past but rather come up with a solution to a problem they have provided you.

It's important to know which question you're being asked! Far too often people provide the wrong type of answer to one of these questions. When in doubt, _ask the interviewer_!

> "Would you like me to provide an example from my work history or are you interested in how I would solve this problem in the future if it arose?"

In the following sections, I'll tell you how I prepare for both of these types of interviews.

## Preparing for past experience questions

My favorite way to prepare for past experience questions is to make a table. There are a limited number of common themes in behavioral interviews:

- Challenges
- Successes
- Failures
- Things you enjoyed
- Leadership
- Conflicts

Those become the rows of my table. The columns are all the different projects I want to talk about. I try my best to come up with an example for each row from each project. Here's a fictitious completed table:

| Theme      | Project A                                                                                                         | Project B                                                                                      | Project C                                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Challenges | Deployment process was a mess. I helped implement CD.                                                             | Team morale was low. I created social events and 1:1 calls.                                    | Complex, nested form logic shared between clients. I implemented JSON schema that could be consumed by various parties and used to validate data. |
| Successes  | Reduced average request time from 1.5s to 750ms.                                                                  | Handled exponential application growth from 1,000 requests per day to 50,000 requests per day. | The product beta launched with 1,000 users. customers.                                                                                            |
| Failures   | I pushed code to production that formatted dates incorrectly and caused an API endpoint to fail on every request. | N/A                                                                                            | Mismanaged relationship between tech team and partner tech teams caused some partners to back out.                                                |
| Enjoyed    | Teaching developers about CD.                                                                                     | My first exposure to CDNs and rapid scaling. Really enjoyed learning about this subject area.  | I got to sit in on user research. Was really interesting to see how users actually use the software.                                              |
| Leadership | I had to present my vision for better engineering practices to the CTO.                                           | No one was an infrastructure specialist so I stepped up to lead that area.                     | N/A                                                                                                                                               |
| Conflicts  | Some senior engineers were resistant to the changes I was proposing so I had to convince them in 1:1s and demos.  | N/A                                                                                            | Team members could not come to consensus on data schema validation method. I championed a process to use a structured design document.            |

### The STAR method

The STAR method is a popular framework for answering past experience questions. STAR stands for:

- **S**ituation - Lay the foundation for the story. Where were you working? What was the project? What role were you playing? Who else is involved in the story?
- **T**ask - What task was at hand when the story takes place?
- **A**ction - What action did you personally take to make the situation better (or if it was a mistake, what mistake did you make)?
- **R**esult - What was the result? How did your action get things back on track? Or what happened as a result of your mistake?

If appropriate to the situation, add a final thougth on what you learned. Companies like when candidates are capable of reflection and self-improvement.

### Quantify!

Be sure to quantify your successes. Many organizations are data-driven and expect you to be as well. If possible try to tie your successes to revenue generated or, if not possible, tie your successes to something known to be correlated with revenue generated. Some good metrics that you may have affected:

- Revenue
- Number of users
- Application performance metrics
- Availability
- Code quality measures
- Team velocity

### Be careful with negatives

Explain all problems and challenges with _empathy_. For example, if you had to deal with a disgruntled colleague, make sure you don't describe that person as "bad" but rather that they must have been going through a tough time. I'm not saying to lie, but I would definitely advise you to _never_ badmouth a former employer or colleague.

### Talk about lessons learned

Companies will likely ask you about mistakes or failures. All of us have made mistakes, but not all of us learn from them. Whenever you talk about your mistakes, make sure to talk about lessons you learned from those mistakes and, if you were able to take corrective action in the moment, talk about that too.

### Example past experience questions

The following examples are graciously taken from the [Tech Interview Handbook](https://www.techinterviewhandbook.org/behavioral-interview-questions/) under the MIT license. Make sure you check out this incredible resource for more information on behavioral interviews (and interviewing in general)!

1. Tell me about a time when you had a conflict with a co-worker.
2. Tell me about a time in which you had a conflict and needed to influence somebody else.
3. What are the most interesting projects you have worked on and how might they be relevant to this company's environment?
4. Tell me about a time you had a disagreement with your manager.
5. Talk about a project you are most passionate about, or one where you did your best work.
6. What is something that you had to push for in your previous projects?
7. What is the most constructive feedback you have received in your career?
8. What is something you had to persevere at for multiple months?
9. Tell me about a time you met a tight deadline.
10. Tell me about a problem you've had getting along with a work associate.

## Preparing for hypothetical questions

In my experience these are a bit tougher than past experience questions due to their ambiguity. One of the best tips is from the aforementioned Jeff Sipe, who recommends asking clarifying questions (almost like a coding interview!) so you really understand your relationship to the sitation.

Let's look at an example to see what I mean:

> Interviewer: "How would you handle someone who seems disengaged with work and is not carrying their weight on the team?"

The wrong thing to do here is start directly answering the question&mdash;you don't have enough information! Rather than diving into the answer, some great questions to ask would be:

- What is my relation to this individual? Am I their manager? Colleague? Subordinate?
- When did this start? Was it recent? Has it been going on for a while?
- Is there an event that appears to have triggered this behavior?

It's possible the interview says "it's up to you" in response to a lot of these questions, which is totally fine! That means _you_ get to provide the clarification and answer it in a way that best suits you.

### Interpersonal problem-solving

A lot of hypotheticals will involve conflict with another individual. Empathy is important here. You'll want to make sure your proposed solutiont treats the other party like a human. Make sure your approach solves problems _collaboratively_ with that individual. In the previous example where we have an employee who is disengaged and not performing, perhaps we recommend a 1:1 to try to get to the bottom of the situation and then collaboratively come up with an action plan to get the employee back on track.

### Example hypothetical questions

Here are some hyopothetical questions I have heard asked over the years:

1. How would you handle someone who seems disengaged with work and is not carrying their weight on the team?
2. What would you do if your manager wanted to go with a technical approach that you disagree with?
3. How would you convince a colleague that your technical approach is better?
4. A junior engineer on your team is being excluded from team activities. How would you fix this situation?
5. What would you do if you realized your team was going to miss a deadline?
6. A manager on a different team knows you're an excellent engineer and asks you for help but intentionally avoids speaking with your direct manager. What do you do?

## Watch Jeff Sipe's videos

I'm mentioning Jeff's videos again because they really were important to me. Once you have a matrix of all your experiences, Jeff will teach you how to present that experience in a way companies want to hear: with empathy and open-mindedness. He also provides a lot of good tips of recognizing what exactly companies are looking for when they ask specific types of questions.

🎥 [Jeff Sipe's YouTube Channel](https://www.youtube.com/c/JeffHSipe)

## Out of our comfort zone

Behavioral questions, especially those that deal with interpersonal relationships, can be very much out of an engineer's comfort zone. It's tough&mdash;on one hand we're being asked to reverse a linked list and on another hand we're being asked to troubleshoot behavioral problems. Because the behavioral part is tough for a lot of folks, this can be an area for you to really shine if you prep thoroughly!
