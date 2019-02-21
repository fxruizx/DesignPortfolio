# Design Portfolio
After getting my feet wet with React while working on my [Podcast Nexus project](https://github.com/fxruizx/PodcastNexus), I decided to remake my web and graphic design portfolio, in React (it needed an update anyway).
Project is 95% complete, and you can see it at [http://fxrdesign.com](http://fxrdesign.com)

## Web Technologies/Languages Utilized
**Learned for the First Time**
* N/A

**Gained More Experience**
* React
* JSX
* Styled Components
* React Router
* CSS Animations

**Further Honed My Skill**
* HTML
* Javascript
* CLI

## Key Take Aways
A big part of this redesign/development of my latest portfolio, is having all the art pieces contained on a wordpress.com site to speed up the time it takes to add new work.
Previous iterations had me hard coding new art pieces, leading to me rarely updating my portfolio. This has been achieved so far by:
* Learning how pull in data from wordpress.com feeds
* Figuring out that using the location paramater prop was much better for displaying content based on the URL, rather than passing props from a Link to Route
* Implementing the dangerouslySetInnerHTML method for correctly displaying numeric entities as their appropriate character (since I am in control of the text coming in from the wordpress feed, this should not present an issue)
* I'm sure more lessons will be learned as I finish my portfolio



_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._
