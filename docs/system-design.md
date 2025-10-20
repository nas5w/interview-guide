<img style="margin: 0 auto; max-width:13rem; margin-bottom: 2rem" width="208" height="208" alt="Person explaining complicated system" src="/system.svg" />

# System Design Interviews

<star />

## What are system design interviews?

System design interviews generally give you a set of requirements for a relatively complex system and ask you to come up with a design. Often, these requirements start off somewhat vague to test whether you know what types of questions to ask to gain clarity about the system. These interviews are generally aimed at more senior candidates since juniors can't be expected to have performed too much system design work in their careers.

These interviews can be some of the best barometers of a senior engineer's knowledge, but I personally find them to be the trickiest due to their open-ended nature.

## Types of system design interviews

I have seen two types of system design interviews:

- **Pure design.** You just focus entirely on specifying the system and talking through how you would design it. You may draw up some diagrams to help convey architecture to the interviewer.
- **Design + coding.** The problem is slightly smaller in breadth. You talk through the design of the system and then you write some code to start implementing it.

System design interviews look a lot different depending on your specialty. I have interviewed for both front-end and full stack web application engineer positions. For front-end positions, system design interviews tend to focus on designing a UI component and then implementing the HTML, CSS, and JavaScript for that component. For full stack positions, I have seen more pure design problems where you talk through various topics like how you'd make the application scale, database schema, and API design.

## How to prep for system design interviews

The way I practice system design interviews is to do the following:

1. **Create a list of the considerations that applies to the domain for which I'm interviewing.** For example, if I'm interviewing for a front-end position then my interview will likely involve topics like accessibility and internationalization.
2. **Find relevant system design questions online.** There are a lot of good examples online. Also, it's not too difficult to come up with your own examples.
3. **Design the systems.** Take 45 minutes to an hour to design one of the systems you've identified. Make sure you draw out/sketch architectural pieces, which will be helpful during the interview. When you're done, review your work and make sure you've addresseed all the topics that came up in the list you made. If there are any deficiencies, do some studying of those areas.

### Creating a list of topics

Here are a couple lists of topics for front-end and backend positions. If you have a different specialty, do so googling to find out the relevant topics for your domain.

#### Front-end

- Accessibility
- Performance
- Security
- Caching
- Device types / responsiveness
- Languages / internationalization
- Componentization
- Component API
- User experience
- Multi-tenancy
- Analytics / telemetry

#### Back-end

- Database design
- Scalability
- Security
- API design
- Caching
- Availability
- Reliability
- Performance
- Authentication / authorization
- Telemetry

### The part you can't practice too well: asking questions

One tough aspect of system design interviews is you really don't know which items in the above lists the interviewer will be interested in, which is why you need to ask a lot of questions. For example, a good front-end clarification would be asking whether the system should support multiple languages. If the interviewer says "yes," you should spend some time explaining the achitecture for supporting different langauges. If the interviewer says "no," then you can skip this topic as you design your system.

### Use the RADAD framework

The Frontend Interview Handbook talks about the [RADAD framework](https://www.frontendinterviewhandbook.com/front-end-system-design/#radad-framework), which I found to be a really useful way to spend my time during the interview. The following is a copy/paste from the Frontend Interview Handbook to give you an idea of the framework, but I absolutely recommend you navigate to the handbook itself for more detail:

- **Requirements clarifications/alignment** - Ask about the requirements of the system.
- **Architecture** - Outline the architecture of the system (could be a UI component or an app, depending on the question). Draw diagrams where relevant.
- **Data model** - How would the component store any data passed into it? What data structures are used?
- **API design** - What's the API for using this component? What options will be allowed on the component?
- **Deep dive** - User Experience (UX), Performance, Accessibility (a11y), Internationalization (i18n), Multi-device support, Security

This list is very front-end focused, but it applies equally as well to backend or full stack system design interviews.

### Find out where to spend most of your time

Once you've asked as many clarifying questions up front that you can think of, I recommend asking if there's a particular part of the system the interviewer is interested in. A lot of times the answer is "no," and you get to choose the focus. But in the event that the interviewer is particularly interested in one part of the design, that's a really good piece of information to have. Make sure to take notes as you're asking clarifying questions!

Here are some good clarifying questions, which may or may not be applicable depending on the system you're being asked to design:

If you're being asked to design a messaging service, you may ask:

- How real-time the messaging needs to be
- Whether there any special security requirements (e.g., end-to-end encryption)
- Whether we have insight into anticipated usage numbers
- How long messages should be retained
- Whether messaging should support media (e.g., images and video)

If you're being asked to design an calendar component, you may ask:

- Whether it needs to support multiple languages / internationalization
- Whether it needs to support date ranges or just a single date
- What browsers and devices it will be used on
- What type of data should be stored in the calendar

### Relevant system design questions

The following is a non-exhaustive list of system design questions I have heard of. Feel free to practice these examples. Also, be sure to google around for other examples to practice.

#### Back-end

- Chat / messaging application
- Twitter / micro-blogging platform
- Link shortener (e.g., bit.ly)
- Any create, read, update, delete (CRUD) API
- Public library checkout system API
- Video streaming service
- Pinterest

#### Front-end

- The front-end for anything listed in the back-end section
- Specific components:
  - Date-picker
  - Image carousel
  - Modal
  - Accordion

Here's an additional resource with system design interview questions and answers:

- [31 system design interview questions (and sample answers)](https://igotanoffer.com/blogs/tech/system-design-interviews)

<foot />
