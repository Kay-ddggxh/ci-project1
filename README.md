# Lowland Pride 🏳‍🌈

![responsive mock-up](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/responisve-screenshot.PNG?raw=true)
Welcome to Lowland Pride! This is the website of the Burren Lowland's first LGBTQ+ youth group. 
The site is targeted towards members of the LGBTQ+ community aged 14-25 who live in the rural areas of the at the base of the Burren, centering on Gort, Co. Galway and reaching into West Clare.
The Lowland Pride's site provides young people with a schedule of weekly meet-ups, dates and information on special events and how to join the group.

Visit live site [here](https://kathrin-ddggxh.github.io/ci-project1/).

## Design
This site was created and designed with young adults and teenagers in mind who are looking for information and access to a very specific group in their own locality. The content is short and informative, the style colourful and reassuring.

### Wireframes
- The first wireframe in [Figma](https://www.figma.com/file/wT3sdUsGl5XI6l3T6eq9bs/CI-Project-1?node-id=35%3A111) is a very simple design

### Font and Colour choices
Explain choice of fonts and colour schemes here

## Features
This site implements the very basic features of a static website.

### Existing Features
- **Navigation Bar**
    - Featured in the header of all four pages, includes the club's logo and links to Home page, About page, Events page and Contact form. Uniform format allows for easy navigation on all pages without the use of the "back" button.

### Possible Future Features
- Modal for events page:  

    I would like to implement a modal for the calender events. So far, the details of the weekly events are simply listed and explained below the calender. In future it would be nice to have them pop up in a modal when either hovering or clicking on the events in the calender.

- Include loading="lazy" attribute for images

    Once this attribute has full support from all commonly used browsers I aim to include it to all images on site in order to reduce data usage and improve rendering speed.

- Create carousel for homepage gallery

    At the moment the homepage gallery is static. I would like to implement a carousel in the future that would also allow for more images in the gallery.

## Testing
### Validator Testing
- HTML ([W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html))
    - 1 Error: "Element div not allowed as child of element button in this context. (Suppressing further errors from this subtree.)"; 
    referring to 3 ```<div class="burger-bar"></div>``` elements that make up the burger menu button
    - Solution: Changed ```div``` elements to ```span``` with ```display: block;```   
- CSS ([Jigsaw](https://jigsaw.w3.org/css-validator/))
    - No error found
- Accessibility ([WebAIM](https://webaim.org/resources/contrastchecker/), [axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd))
    - added ```title``` and ```aria-label``` attributes to all social links and home link logo to improve accessibility
- Browser Support ([CanIUse](https://caniuse.com/))
    - ```gap``` property for Flexbox: according to caniuse.com this property has a global support of 88.95%
    - ```loading="lazy"``` attribute on images: not yet fully supported by most browsers; to be included in the future

### Browser Testing

**Layout:** Testing layout and appearance of site for consistency throughout browsers.

**Functionality:** Ensuring all links, navigation and form submit functions as expected throughout browsers.

| Browser     | Layout      | Functionality |
| :---        |    :----:   |          ---: |
| Chrome      | ✔          | ✔             |
| Edge        | ✔          | ✔             |
| Firefox     | ✔          | ✔             |
| Safari      | ✔          | ✔             |
| IE          |deprecated by Microsoft, not tested|


### User Stories
do table with "expected result", "actual result" -> test all the links and buttons

### Fixed Bugs
#### 405 Error on form submit
Initially, when clicking the submit button on the contact form, the button would link to submit.html, displaying a "form submit successful" message and a "Back Home" button. On the deployed site this would bring up a 405 error (Not allowed).
As submit.html was not a valid action for form POST method, I had to use the Code Institute form dump provided to students.



### Unfixed bugs
No unfixed bugs to date.

## Deployment

This site was deployed using GitHub pages using the following steps:
- From the GitHub repository, navigate to **Settings**
- In the left-hand navigation section select **Pages**
- From the source section drop-down menu change Branch from **none** to **main** and click the **Save**
- After several minutes the website is live and will be automatically refreshed with each Git push command.

The link to the live site is: https://kathrin-ddggxh.github.io/ci-project1/ 

## Credits

Photographs with specific Irish LGBTQ content were taken from:
- https://www.galwaytourism.ie/event/galway-pride-festival/
- https://www.nxf.ie/
- https://northwestadventuretours.ie/ (Instagram feed)
- https://insighttreatment.com/
- http://thrivetherapyandcounseling.com/

### Code

Heart-Icon: 
- https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-more-complex-shape-using-css-and-html
- https://unused-css.com/blog/css-half-circle/


### Content
- Google fonts
- Font Awesome
- Kevin Powell (burger menu, etc)
- CSS tricks

### Media
All images and photographs were sourced from the following open source sites:
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)
- [Unsplash](https://unsplash.com/)

    
